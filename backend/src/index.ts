import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import userRoutes from "./routes/users";

// Connecting to MongoDB
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

const app = express();
app.use(express.json()); // convert the body to a json object
app.use(express.urlencoded({ extended: true })); // convert the body to url encoded
app.use(cors()); // allow cross origin requests

// Adding an endpoint for testing
app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "hello from express endpoint!" });
});

app.use("/api/users", userRoutes);

// Starting the server
app.listen(3000, () => console.log("Server started on port 3000"));
