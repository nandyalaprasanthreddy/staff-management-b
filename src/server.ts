import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDB";
import cors from "cors";
import { router } from "./routes/routes";
import { errorHandler } from "./middlewares/errorHandler";
import helmet from "helmet";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["PUT", "POST", "GET", "DELETE", "PATCH"],
    credentials: true,
  })
);

app.use(
  helmet({
    contentSecurityPolicy: false,
    hsts: false,
  })
);

app.use(cors());
app.use(express.json({ limit: "1kb" }));
app.use(express.urlencoded({ limit: "1kb", extended: true }));
app.use("/api", router);
app.use(errorHandler);

app.listen(process.env.PORT, async () => {
  await connectDB();
});
