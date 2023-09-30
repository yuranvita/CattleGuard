import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { appRouter } from "./routes/appRoutes";
import { ensureAppError } from "./middleware/ensureAppError";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(cors());
app.use(appRouter);

app.use(ensureAppError);

app.listen(3333, () => {
  console.log(`app is running at port 3333`);
});
