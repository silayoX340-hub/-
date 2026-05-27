const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');
const pino = require('pino');

async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState('auth');
    const sock = makeWASocket({
        auth: state,
        logger: pino({ level: 'silent' })
    });

    sock.ev.on('connection.update', (update) => {
        const { connection, qr } = update;
        if (qr) console.log('Scan this QR:', qr);
        if (connection === 'open') console.log('Bot connected!');
        if (connection === 'close') startBot();
    });

    sock.ev.on('creds.update', saveCreds);

    sock.ev.on('messages.upsert', async (msg) => {
        const message = msg.messages[0];
        if (!message.message) return;
        const text = message.message.conversation || '';
        
        if (text === '.ping') {
            await sock.sendMessage(message.key.remoteJid, { text: 'Pong! SilayoX V6 is alive ✅' });
        }
    });
}

startBot();
