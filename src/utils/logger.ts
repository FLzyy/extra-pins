import chalk from "npm:chalk";

const f = (level: string, text: unknown, levelC: string) => {
  (console[
    (level === "FATAL" ? "error" : level.toLowerCase()) as keyof Console
  ] as typeof console.log)(
    `[${
      (new Intl.DateTimeFormat("en", {
        timeStyle: "medium",
      })).format(Date.now())
    }] ${levelC} (${Deno.pid}): ${chalk.blue(String(text))}`,
  );
};

const log = {
  trace(...text: unknown[]) {
    const l = text.length;
    for (let i = 0; i < l; i++) {
      f("TRACE", text[i], chalk.gray("TRACE"));
    }
    return this;
  },
  debug(...text: unknown[]) {
    const l = text.length;
    for (let i = 0; i < l; i++) {
      f("DEBUG", text[i], chalk.blue("DEBUG"));
    }
    return this;
  },
  info(...text: unknown[]) {
    const l = text.length;
    for (let i = 0; i < l; i++) {
      f("INFO", text[i], chalk.green("INFO"));
    }
    return this;
  },
  warn(...text: unknown[]) {
    const l = text.length;
    for (let i = 0; i < l; i++) {
      f("WARN", text[i], chalk.yellow("WARN"));
    }
    return this;
  },
  error(...text: unknown[]) {
    const l = text.length;
    for (let i = 0; i < l; i++) {
      f("ERROR", text[i], chalk.red("ERROR"));
    }
    return this;
  },
  fatal(...text: unknown[]) {
    const l = text.length;
    for (let i = 0; i < l; i++) {
      f("FATAL", text[i], chalk.bgRed("FATAL"));
    }
    return this;
  },
};

export default log;
