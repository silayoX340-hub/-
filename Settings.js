const fs = require('fs')
const chalk = require('chalk')

// Bot Identity
global.botName = process.env.BOT_NAME || 'SilayoX-MD'
global.ownerName = process.env.OWNER_NAME || 'silent dj'
global.ownerNumber = process.env.OWNER_NUMBER || '255768192847'

// Links & Group
global.groupLink = process.env.GROUP_LINK || 'https://chat.whatsapp.com/HE1DhAqgUaJ2rOFvvKd24y'
global.supportGc = global.groupLink
global.channelLink = process.env.CHANNEL_LINK || 'https://whatsapp.com/channel/xxx'

// Appearance
global.packname = process.env.PACKNAME || 'SilayoX'
global.author = process.env.AUTHOR || 'Bot by silent dj'
global.footer = process.env.FOOTER || 'Powered by SilayoX-MD'

// API Keys - add yours if needed
global.apiKeys = {
    // 'zenz': process.env.ZENZ_APIKEY || '',
    // 'openai': process.env.OPENAI_APIKEY || ''
}

// Settings
global.prefa = ['.', '#', '!', '/']
global.session
