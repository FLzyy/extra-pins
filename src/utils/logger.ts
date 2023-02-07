import kulay from "npm:kulay";

const levels = {
  TRACE: kulay.gray,
  DEBUG: kulay.blue,
  INFO: kulay.green,
  WARN: kulay.yellow,
  ERROR: kulay.red,
  FATAL: kulay.bgRed,
};

const f = (level: keyof typeof levels, text: unknown) => {
  (console[level as keyof Console] as typeof console.log)(
    `[${
      (new Intl.DateTimeFormat("en", {
        timeStyle: "full",
      })).format(Date.now())
    }] ${levels[level](level)} (${Deno.pid}): ${kulay.blue(String(text))}`,
  );
};

const log = {
  trace(text: unknown) {
    f("TRACE", text);
    return this;
  },
  debug(text: unknown) {
    f("DEBUG", text);
    return this;
  },
  info(text: unknown) {
    f("INFO", text);
    return this;
  },
  warn(text: unknown) {
    f("WARN", text);
    return this;
  },
  error(text: unknown) {
    f("ERROR", text);
    return this;
  },
  fatal(text: unknown) {
    f("FATAL", text);
    return this;
  },
};

export default log;
