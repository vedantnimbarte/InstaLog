export type LogFormatter = (
  timestamp: string,
  level: string,
  message: string
) => string;

export interface LogEntry {
  timestamp: string;
  level: string;
  message: string;
}

export interface Transport {
  write(logEntry: LogEntry): void;
}

export type LogLevel = "info" | "warn" | "error" | "debug";

export interface LoggerOptions {
  transports?: Transport[];
  format?: LogFormatter;
  logRotationSize?: number;
  logFile?: string;
}
