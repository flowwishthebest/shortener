import fastify from "fastify";
import * as config from './config';

const server = fastify();

server.get("/", async (req, rep) => {
    return {
        data: "Hello, World!",
    };
});

server.get("/ping", async (req, rep) => {
    return {
        data: "Pong!",
    };
});

server.listen(config.app.port, config.app.host, (err, addr) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log("Server running on " + addr);
});
