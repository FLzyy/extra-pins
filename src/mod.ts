import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { optimize } from "https://esm.sh/svgo@3.0.2";
import type { GithubAPIResponse } from "./types/res.d.ts";
import dark from "./styles/dark.ts";
import light from "./styles/light.ts";
import log from "./utils/logger.ts";

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

    ctx.response.headers.set("Content-Type", "image/svg+xml");

    ctx.response.body = optimize(opts[theme](res, fullName), {
      multipass: true,
    }).data;
  } catch (err) {
    ctx.response.status = 500;
    ctx.response.body = `An error has occurred: ${err}`;
  }
});

const app = new Application({
  logErrors: false,
});

app.use(async ({ response, request }, next) => {
  await next();

  const resTime = response.headers.get("X-Response-Time");
  const status = response.status;
  const method = request.method;
  const ip = request.ip;
  const path = request.url.pathname;
  const logF: keyof typeof log = (status >= 500 || status >= 400)
    ? "error"
    : status >= 200
    ? "info"
    : "debug";

  log[logF](`${ip} ${method} ${path} ${status} ${resTime}`);
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
