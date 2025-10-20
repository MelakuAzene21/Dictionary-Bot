# Dictionary Bot 📚

A Telegram bot that provides word definitions, examples, synonyms, and antonyms using the Free Dictionary API.

## Features ✨

- 📖 **Word Definitions**: Get detailed definitions for any English word
- 🗣️ **Parts of Speech**: Understand how words function grammatically
- 📝 **Usage Examples**: See how words are used in context
- 🔹 **Synonyms & Antonyms**: Discover related words and opposites
- 🌐 **Web Server**: Includes an Express server for deployment on platforms like Render

## Tech Stack 🛠️

- **TypeScript**: Type-safe JavaScript for better development experience
- **Node.js**: JavaScript runtime for server-side execution
- **Express**: Web framework for the server component
- **node-telegram-bot-api**: Official Telegram Bot API for Node.js
- **Axios**: Promise-based HTTP client for API requests
- **dotenv**: Environment variable management

## Installation 📥

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/dictionary-bot.git
   cd dictionary-bot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```
   TELEGRAM_BOT_TOKEN=your_telegram_bot_token
   PORT=3000
   ```

   > To get a Telegram Bot Token, message [@BotFather](https://t.me/BotFather) on Telegram and follow the instructions.

## Usage 🚀

### Development Mode

Run the bot in development mode with hot-reloading:

```bash
npm run dev
```

### Production Build

Build the TypeScript project:

```bash
npm run build
```

Run the compiled JavaScript:

```bash
npm start
```

## Bot Commands 🤖

- `/start` - Displays welcome message and instructions

## How to Use the Bot 📱

1. Start a chat with your bot on Telegram
2. Send any English word as a message
3. Receive definitions, examples, synonyms, and antonyms

## API Reference 🔗

This project uses the [Free Dictionary API](https://dictionaryapi.dev/) to fetch word data.

## Project Structure 📁

```
dictionary-bot/
├── src/
│   ├── api.ts         # API interaction with Dictionary API
│   ├── bot.ts         # Telegram bot implementation
│   ├── index.ts       # Application entry point
│   └── types.ts       # TypeScript interfaces
├── .env               # Environment variables (not in repo)
├── package.json       # Project dependencies and scripts
├── tsconfig.json      # TypeScript configuration
└── README.md          # Project documentation
```

## Deployment 🌐

The bot includes an Express server that makes it suitable for deployment on platforms like Render, Heroku, or any other Node.js hosting service.

## License 📄

ISC

---

Made with ❤️ using TypeScript and Node.js