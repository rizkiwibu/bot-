const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fs = require('fs')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let anu = `*â”€â”€â”€â”€â”€Œ DONATE ã€ â”€â”€â”€*

Hai ðŸ‘‹
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
â”Œã€” Donasi â€¢ Emoney ã€•
â”œðŸ“Œdana: 0838 1716 1861
â””â”€â”€â”€â”€
Berapapun donasi kalian akan sangat berarti ðŸ‘

Arigatou!

Contact person Owner:
wa.me/6283817161861 (Owner)

*donasi via follow ig juga boleh*`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: anu,
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/donasi.jpg') }, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'ðŸ“instagram',
               url: instagram
             }

           },
               {
             quickReplyButton: {
               displayText: 'Back To Menu',
               id: '.menu',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['donasi', 'donate']
handler.tags = ['xp']
handler.command = /^(donasi|donate)$/i

module.exports = handler
