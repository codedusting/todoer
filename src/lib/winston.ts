import { format } from "date-fns";
import { toZonedTime } from "date-fns-tz";
import * as fs from "fs";
import * as winston from "winston";

const timeZone = "Asia/Kolkata"; // IST timezone

const logDir = "logs";
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const l = winston.createLogger({
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.json(),
  ),
  transports: [
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error",
    }),
    new winston.transports.Http({
      level: "warn",
      format: winston.format.json(),
    }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  l.add(
    new winston.transports.Console({
      level: "info",
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.printf(({ level, message, timestamp }) => {
          const zonedDate = toZonedTime(timestamp as string, timeZone);
          return `${level}: ${message} on ${format(zonedDate, "yyyy-MM-dd@HH:mm:ss")}`;
        }),
      ),
    }),
  );
}

export default l;
