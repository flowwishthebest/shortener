import * as config from './config';
import { build } from './app';

const server = build({});

server.listen(config.app.port, config.app.host, (err, addr) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log("Server running on " + addr);
});
