import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "aurum-backend",
    env: process.env.NODE_ENV || "development"
  });
});

app.listen(PORT, () => {
  console.log(`🚀 AURUM backend rodando na porta ${PORT}`);
});
