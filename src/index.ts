import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import compression from "compression";
import mongoose from "mongoose";

const app = express();
app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});

const MONGO_URL =
  "mongodb+srv://mirko:TZhrlxH0zNURYbWu@mygoodfood.ebbgrx4.mongodb.net/?retryWrites=true&w=majority";
