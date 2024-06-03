import express, { Router } from "express";
import serverless from 'serverless-http';

const api = express();

const router = Router();

router.get('/', (req, res) => {
    res.sendFile( path.join( __dirname + "/public/index.html" ));
});

api.use("/public", router);

export const handler = serverless(api);