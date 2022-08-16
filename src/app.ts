require('dotenv').config();
import express from "express";
import ghana from "./routes/ghana-route";

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/ghana", ghana);

// const httpsServer = https.createServer(credentials, app);
const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});