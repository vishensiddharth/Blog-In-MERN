import express from 'express';
import { Request, Response } from 'express';
import "dotenv/config"
import connection from '../db/connection'

const port = process.env.PORT
const app = express();

app.get('/', (req:Request, res:Response) => {
    res.send('Node Js Worked with Typescript');
})

new Promise<void>((resolve, reject) => {
    connection.db()
    //@ts-ignore
    .then(() => {
        app.listen(port, () => {
            return console.log(`App is ruuning on http://localhost:${port}`);
            resolve();
        });
    })
    .catch((err: any) => reject(err));
})
