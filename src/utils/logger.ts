import kulay from "npm:kulay";

const f = (level: string, text: unknown, levelC: string) => {
  (console[
    (level === "FATAL" ? "error" : level.toLowerCase()) as keyof Console
  ] as typeof console.log)(
    `[${
      (new Intl.DateTimeFormat("en", {
        timeStyle: "medium",
      })).format(Date.now())
    }] ${levelC} (${Deno.pid}): ${kulay.blue(String(text))}`,
  );
};

const log = {
  trace(text: unknown) {
    f("TRACE", text, kulay.gray("TRACE"));
    return this;
  },
  debug(text: unknown) {
    f("DEBUG", text, kulay.blue("DEBUG"));
    return this;
  },
  info(text: unknown) {
    f("INFO", text, kulay.green("INFO"));
    return this;
  },
  warn(text: unknown) {
    f("WARN", text, kulay.yellow("WARN"));
    return this;
  },
  error(text: unknown) {
    f("ERROR", text, kulay.red("ERROR"));
    return this;
  },
  fatal(text: unknown) {
    f("FATAL", text, kulay.bgRed("FATAL"));
    return this;
  },
};

export default log;
