import kulay from "https://esm.sh/kulay@1.0.0";

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
  trace(...text: unknown[]) {
    const l = text.length;
    for (let i = 0; i < l; i++) {
      f("TRACE", text[i], kulay.gray("TRACE"));
    }
    return this;
  },
  debug(...text: unknown[]) {
    const l = text.length;
    for (let i = 0; i < l; i++) {
      f("DEBUG", text[i], kulay.blue("DEBUG"));
    }
    return this;
  },
  info(...text: unknown[]) {
    const l = text.length;
    for (let i = 0; i < l; i++) {
      f("INFO", text[i], kulay.green("INFO"));
    }
    return this;
  },
  warn(...text: unknown[]) {
    const l = text.length;
    for (let i = 0; i < l; i++) {
      f("WARN", text[i], kulay.yellow("WARN"));
    }
    return this;
  },
  error(...text: unknown[]) {
    const l = text.length;
    for (let i = 0; i < l; i++) {
      f("ERROR", text[i], kulay.red("ERROR"));
    }
    return this;
  },
  fatal(...text: unknown[]) {
    const l = text.length;
    for (let i = 0; i < l; i++) {
      f("FATAL", text[i], kulay.bgRed("FATAL"));
    }
    return this;
  },
};

export default log;
