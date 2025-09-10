import TelegramBot from "node-telegram-bot-api";
import { fetchWordData } from "./api";
import { Meaning } from "./types";
import dotenv from "dotenv";
import express from "express"

dotenv.config();
const token = process.env.TELEGRAM_BOT_TOKEN as string;
const bot = new TelegramBot(token, { polling: true });

// 🟢 Express server just for Render (keeps port open)
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("✅ Dictionary Bot is running!");
});

app.listen(PORT, () => {
  console.log(`🌐 Server running on http://localhost:${PORT}`);
});


bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text?.trim();

  if (!text) {
    bot.sendMessage(chatId, "❌ Please send a word to search.");
    return;
  }

  const wordData = await fetchWordData(text);
  if (!wordData) {
    bot.sendMessage(chatId, `⚠️ No definition found for *${text}*`, {
      parse_mode: "Markdown",
    });
    return;
  }

  let reply = `📖 *${wordData.word}* \n\n`;

  wordData.meanings.forEach((meaning: Meaning, i: number) => {
    reply += `(${i + 1}) *${meaning.partOfSpeech}*\n`;

    meaning.definitions.slice(0, 2).forEach((def, j) => {
      reply += `   • ${def.definition}\n`;
      if (def.example) reply += `     👉 Example: _${def.example}_\n`;
      if (def.synonyms && def.synonyms.length > 0) {
        reply += `     🔹 Synonyms: ${def.synonyms.slice(0, 5).join(", ")}\n`;
      }
      if (def.antonyms && def.antonyms.length > 0) {
        reply += `     🔸 Antonyms: ${def.antonyms.slice(0, 5).join(", ")}\n`;
      }
    });

    reply += "\n";
  });

  bot.sendMessage(chatId, reply, { parse_mode: "Markdown" });
});

console.log("✅ Dictionary Bot is running...");
