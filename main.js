const ws = require('whatsapp-web.js')
const qrcode = require("qrcode-terminal")

const client = new ws.Client({
  webVersionCache: {
    type: "remote",
    remotePath:
      "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html",
  },
  // puppeteer: {
  //   headless: true,
  //   ignoreHTTPSErrors: true,
  //   args: [ '--no-sandbox']
  // },
})

client.on('qr', (qr) => {
  // Generate and scan this code with your phone
  qrcode.generate(qr, { small: true })
  console.log(qr)
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