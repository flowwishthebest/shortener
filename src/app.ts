import fastify from 'fastify';

export function build(parameters: any) {
    const app = fastify(parameters);

    app.get("/", async (req, rep) => {
        return {
            data: "Hello, World!",
        };
    });
    
    app.get("/ping", async (req, rep) => {
        return {
            data: "Pong!",
        };
    });

    return app;
}
