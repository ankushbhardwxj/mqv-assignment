import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import FormData from "form-data";
import HTMLParser from "node-html-parser";
import companyRouter from "./routes";
import { init } from "./db";

const app = express();
const port = 8003;

app.use((req, res, next): any => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use(bodyParser.json());

app.use("/api/v1", companyRouter);

app.listen(port, () => {
  init();
  console.log("Listening on port", port);
});
