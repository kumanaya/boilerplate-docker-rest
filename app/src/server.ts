import express from "express";

import router from "./routes";

require("dotenv").config();

const HOSTNAME = process.env.HOSTNAME || "http://localhost";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on ${HOSTNAME}:${PORT}`);
});

export default app;
