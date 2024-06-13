import { Client } from 'whatsapp-web.js';
import pkg from 'qrcode-terminal';

const { generate } = pkg;
const client = new Client({
  puppeteer: {
    headless: true,
    ignoreHTTPSErrors: true,
    args: [ '--no-sandbox']
  },
})

client.on('qr', (qr) => {
  // Generate and scan this code with your phone
  console.log(qr)
  generate(qr, { small: true }, (qrcode) => console.log('done'))
});

client.on('ready', () => {
  console.log('Client is ready!');
});

client.on('message', msg => {
  if (msg.body == '!ping') {
    msg.reply('pong');
  }
});

client.initialize();