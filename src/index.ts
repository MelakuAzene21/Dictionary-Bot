import express, { Request, Response } from "express";
import "./bot"; // Import your bot

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Dictionary Bot is running!');
});

app.listen(PORT, () => {
  console.log(`✅ Dictionary Bot is running on port ${PORT}`);
  console.log(`🌐 Server URL: http://localhost:${PORT}`);
});