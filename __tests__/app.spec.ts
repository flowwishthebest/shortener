import { build } from '../src/app';
import { EHttpStatus } from '../src/helpers/http-status';

test('GET `/`', () => {
    const app = build({});
    const resData = {
        data: 'Hello, World!',
    };

    app.inject().get('/').end((err, res) => {
        expect(res.statusCode).toBe(EHttpStatus.OK);

        expect(res.headers['content-type']).toBeDefined();
        expect(res.headers['content-type'])
            .toStrictEqual('application/json; charset=utf-8');

        expect(res.body).toBeDefined();
        expect(res.body).toEqual(JSON.stringify(resData));

        expect(res.json()).toEqual(resData);
    });
});
