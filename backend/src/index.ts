import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "hello from express endpoint!" });
});

app.listen(3000, () => console.log("Server started on port 3000"));
