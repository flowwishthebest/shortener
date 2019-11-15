import * as Express from "express";
import * as SwaggerUI from "swagger-ui-express";
import * as SwaggerDocument from "../docs/swagger/v1/swagger.json";

const app = Express();

app.use("/docs/swagger/v1", SwaggerUI.serve, SwaggerUI.setup(SwaggerDocument));

app.get("api/v1/links", (req, res) => {
    res.status(200);
    res.write("Hello, World!");
    res.end();
});

app.listen(3001, () => {
    console.log("The server running on http://localhost:3001");
});
