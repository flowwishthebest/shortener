import * as Express from 'express';

const app = Express();

const port = process.env.APP_PORT;

app.get('/', (req, res) => {
    res.status(200);
    res.write('Hello, World!\n');
    res.end();
});

app.listen(port, () => {
    console.log('The server running on http://localhost:' + port);
});