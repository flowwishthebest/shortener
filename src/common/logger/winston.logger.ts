import { ILogger } from "./logger.interface";
import { createLogger, Logger } from "winston";

export class WinstonLogger implements ILogger {
    // TODO:

    private readonly logger: Logger;

    constructor() {
        this.logger = createLogger();
    }

    public info(...args: any[]): void {
        // TODO:

        this.logger.log("info", args.join(","));
    }
}
