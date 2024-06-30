import express, { Router } from "express";
import serverless from 'serverless-http';
import compression from "express";

const api = express();

const router = Router();

router.get('/', (req, res) => {
    res.sendFile( path.join( __dirname + "/public/index.html" ));
});

api.use(compression);
api.use("/public", router);

export const handler = serverless(api);