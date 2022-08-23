require('dotenv').config();
import express from "express";
import eventRoute from "./routes/event-route";

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", eventRoute);

const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});