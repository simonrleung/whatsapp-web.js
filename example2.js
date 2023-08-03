const { Client, LocalAuth } = require('./index');

const client = new Client({
    authStrategy: new LocalAuth(),
    // proxyAuthentication: { username: 'username', password: 'password' },
    puppeteer: {
        // args: ['--proxy-server=proxy-server-that-requires-authentication.example.com'],
        headless: false
    }
});

client.initialize();

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
});

client.on('message', async msg => {
    console.log('MESSAGE RECEIVED', msg);
});