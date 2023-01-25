import express from 'express';
import { connectionDB } from './DB/connection.js';
import * as Routers from './Modules/index.routes.js'

const app = express();
const port = 3000;
const BaseUrl = "/api";

connectionDB();
app.use(express.json());
app.use(`${BaseUrl}/user`,Routers.userRouter);
app.use(`${BaseUrl}/product`,Routers.productRouter);

app.listen(port, () => console.log("Server Running........................"))