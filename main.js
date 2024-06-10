import { Client } from 'whatsapp-web.js';
import pkg from 'qrcode-terminal';

const { generate: generateQrCode } = pkg;
const client = new Client({
  webVersionCache: {
    type: 'remote',
    remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html',
  }
});

client.on('qr', (qr) => {
  // Generate and scan this code with your phone
  generateQrCode(qr, { small: true })
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