import * as Express from "express";
import * as SwaggerUI from "swagger-ui-express";
import * as SwaggerDocument from "../docs/swagger/v1/swagger.json";

import { WinstonLogger } from "./common/logger/winston.logger";
import { ILogger } from "./common/logger/logger.interface";
import { EnvConfig } from "./common/configuration/env.config";
import { IConfig } from "./common/configuration/config.interface";

interface IApplicationConstructorKwArgs {
    logger: ILogger;
    config: IConfig;
}

class Application {
    private readonly server: Express.Application;
    private readonly logger: ILogger;
    private readonly config: IConfig;

    constructor(kwargs?: IApplicationConstructorKwArgs) {
        this.logger = kwargs.logger || new WinstonLogger();
        this.config = kwargs.config || new EnvConfig();

        this.server = Express();

        this.server.use(
            "/docs/swagger/v1",
            SwaggerUI.serve,
            SwaggerUI.setup(SwaggerDocument),
        );

        this.server.get("api/v1/links", (req, res) => {
            res.status(200);
            res.write("Hello, World!");
            res.end();
        });
    }

    public run(): void {
        this.server.listen(3001, () => {
            this.logger.info("The server running on http://localhost:3001");
        });
    }
}

new Application().run();
