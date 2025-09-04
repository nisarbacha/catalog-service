import app from './src/app';
import { discount } from './src/utils';
import request from 'supertest';
describe('App', () => {
    it('should be give 10 parcent', () => {
        const result = discount(111, 10);
        expect(result).toBe(11.100000000000001);
    });
    it('should return 2000', async () => {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        const response = await request(app).get('/').send();
        expect(response.statusCode).toBe(200);
    });
});
