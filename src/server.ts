import * as Express from "express";
import * as SwaggerUI from "swagger-ui-express";
import * as SwaggerDocument from "../docs/swagger/v1/swagger.json";

import { WinstonLogger } from "./common/logger/winston.logger";
import { ILogger } from "./common/logger/logger.interface.js";

class Application {
    private readonly server: Express.Application;

    constructor(
        private readonly logger: ILogger = new WinstonLogger(),
    ) {
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
