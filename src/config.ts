import dotenv from 'dotenv';

dotenv.config();

export const app = {
    port: process.env.APP_POR ?
        parseInt(process.env.APP_POR) : 8080,
    host: '0.0.0.0',
};
