const f = (level: string, text: unknown, levelC: string) => {
  (console[
    (level === "FATAL" ? "error" : level.toLowerCase()) as keyof Console
  ] as typeof console.log)(
    `[${
      (new Intl.DateTimeFormat("en", {
        hour12: false,
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        fractionalSecondDigits: 3,
      })).format(Date.now())
    }] ${levelC} (${Deno.pid}): \x1b[34m${String(text)}\x1b[0m`,
  );
};

const log = {
  trace(...text: unknown[]) {
    const l = text.length;
    for (let i = 0; i < l; i++) {
      f("TRACE", text[i], "\x1b[90mTRACE\x1b[0m");
    }
    return this;
  },
  debug(...text: unknown[]) {
    const l = text.length;
    for (let i = 0; i < l; i++) {
      f("DEBUG", text[i], "\x1b[34mDEBUG\x1b[0m");
    }
    return this;
  },
  info(...text: unknown[]) {
    const l = text.length;
    for (let i = 0; i < l; i++) {
      f("INFO", text[i], "\x1b[32mINFO\x1b[0m");
    }
    return this;
  },
  warn(...text: unknown[]) {
    const l = text.length;
    for (let i = 0; i < l; i++) {
      f("WARN", text[i], "\x1b[33mWARN\x1b[0m");
    }
    return this;
  },
  error(...text: unknown[]) {
    const l = text.length;
    for (let i = 0; i < l; i++) {
      f("ERROR", text[i], "\x1b[31mERROR\x1b[0m");
    }
    return this;
  },
  fatal(...text: unknown[]) {
    const l = text.length;
    for (let i = 0; i < l; i++) {
      f("FATAL", text[i], "\x1b[41mFATAL\x1b[0m");
    }
    return this;
  },
};

export default log;
