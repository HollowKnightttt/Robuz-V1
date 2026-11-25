const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'i2b2t.playwithbao.com',
  port: 46265,
  username: '12111A8RK',
  password: ''
})

bot.once('spawn', () => {
  bot.chat('/register 63596axd 63596axd')
  bot.chat('Hello Everyone!')
})
