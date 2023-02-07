import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
// @deno-types="npm:@types/html-minifier@^4.0.2"
import { minify } from "npm:html-minifier";
import log from "./utils/logger.ts";
import type { GithubAPIResponse } from "./types/res.d.ts";
import dark from "./styles/dark.ts";
import light from "./styles/light.ts";

const opts = { dark, light };

const router = new Router();

router.get("/:user/:repo", async (ctx) => {
  const sParams = ctx.request.url.searchParams;
  const params = ctx.params;
  const theme =
    ((sParams.get("theme") as "light" | "dark") ?? "light") satisfies
      | "light"
      | "dark";
  const fullName = sParams.has("full");

  try {
    const res: GithubAPIResponse = await (await fetch(
      `https://api.github.com/repos/${params.user}/${params.repo}`,
    )).json();

    ctx.response.headers.set("Content-Type", "text/html");

    ctx.response.body = minify(opts[theme](res, fullName, params), {
      collapseBooleanAttributes: true,
      continueOnParseError: true,
      minifyURLs: true,
      quoteCharacter: "'",
      removeComments: true,
    });
  } catch (err) {
    log.error(err);
    ctx.response.status = 500;
    ctx.response.body = `An error has occurred: ${err}`;
  }
});

const app = new Application({
  logErrors: false,
});

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", (event) => {
  log.info(
    `Start listening on http://${event.hostname}:${event.port}`,
  );
});

app.addEventListener("error", (event) => {
  log.error(
    event.error,
  );
});

await app.listen({ hostname: "localhost", port: 3000 });
