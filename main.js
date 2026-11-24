const bedrock = require('bedrock-protocol')
const { randomBytes } = require('crypto')

const client = bedrock.createClient({
  host: '10b10t.uk.to', port: 19132, version: '1.26.60', offline: false
})

const chars = '1234567890abclpo'
const rand = (n) => Array.from(randomBytes(n), b => chars[b % chars.length]).join('')

let ready = false, lastSent = 0
client.on('spawn', () => { ready = true })
client.on('error', console.error)

client.on('text', (p) => {
  if (!ready || p.type !== 'chat' || p.source_name === client.username) return
  if (Date.now() - lastSent < 5500) return
  lastSent = Date.now()
  client.queue('text', {
    type: 'chat', needs_translation: false, source_name: client.username,
    xuid: '', platform_chat_id: '', filtered_message: '',
    message: `RandomMizerrr Sent Me To Here. | ${rand(5)}`
  })
})
