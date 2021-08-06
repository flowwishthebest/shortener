import { EHttpStatus } from '../src/helpers/http-status';

test('Expect `OK`', () => {
    expect(EHttpStatus.OK).toBeDefined();
    expect(EHttpStatus.OK).toBe(200);
});
