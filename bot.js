require('dotenv').config()

const { Client, Intents } = require('discord.js')
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

client.on('ready', () => {
  console.log('Our bot is ready to go')
})

client.on('messageCreate', (msg) => {
  if (msg.content === '!mod-me') {
    msg.member.roles.add('964973781686820884')
  }
})
client.login(process.env.BOT_TOKEN)
