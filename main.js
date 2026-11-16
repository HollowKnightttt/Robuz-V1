const bedrock = require('bedrock-protocol')
const client = bedrock.createClient({
  host: '10b10t.uk.to',   
  port: 19132,         
  version: '1.26.60', 
  offline: false       
})

function generateSecureString(length) {
  const chars = '1234567890abclpo';
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  
  return Array.from(array, (byte) => chars[byte % chars.length]).join('');
}

client.on('text', (packet) => { 
  if (packet.source_name != client.username) {
    client.queue('text', {
      type: 'chat', needs_translation: false, source_name: client.username, xuid: '', platform_chat_id: '', filtered_message: '',
      message: `RandomMizerrr Sent Me To Here. | ${generateSecureString(3)} | ROBUZ V1`
    })
  }
})
