import express from "express"; // веб-фреймворк для Node.js
import mongoose from "mongoose"; // ODM-библиотека для MongoDB
import bodyParser from "body-parser"; // для парсинга тела запроса
import corse from "cors"; // для разрешения кросс-доменных запросов
import morgan from "morgan"; // для логирования запросов

import { router as analiticsRouter } from "./routes/analytics.js";
import { router as authRouter } from "./routes/auth.js";
import { router as categoryRouter } from "./routes/category.js";
import { router as orderRouter } from "./routes/order.js";
import { router as positionRouter } from "./routes/position.js";

import keys from "./config/keys.js";
export const app = express();

mongoose
  .connect(keys.mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(corse());

app.use("/api/analytics", analiticsRouter);
app.use("/api/auth", authRouter);
app.use("/api/category", categoryRouter);
app.use("/api/order", orderRouter);
app.use("/api/position", positionRouter);
