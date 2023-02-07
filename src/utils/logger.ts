import kulay from "npm:kulay";

const levels = {
  TRACE: kulay.gray,
  DEBUG: kulay.blue,
  INFO: kulay.green,
  WARN: kulay.yellow,
  ERROR: kulay.red,
  FATAL: kulay.bgRed,
};

const log = {};

for (const key of Object.keys(levels)) {
  Object.defineProperty(log, key, {
    [key.toLowerCase()](text: unknown) {
      (console[key as keyof Console] as typeof console.log)(
        `[${
          (new Intl.DateTimeFormat("en", {
            timeStyle: "full",
          })).format(Date.now())
        }] ${levels[key as keyof typeof levels](key)} (${Deno.pid}): ${
          kulay.blue(String(text))
        }`,
      );
    },
  });
}

export default log;
