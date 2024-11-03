const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const config = require('../config')

cmd({
    pattern: "owner",
    desc: "im owner",
    react: "👩‍💻",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let owner = ` 
*HEAR IS BOT OWNER INFO*
*NAME:-* *USMAN.S*
*AGE:-* *20 YEARS*
*PUBLIC NAME:-* *SILENTLOVER*

> *BY SILENTLOVER432*
`
await conn.sendMessage(from, { text: owner ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363232588171807@newsletter',
      newsletterName: "SILENTLOVER432",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'SILENTLOVER432',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://wa.me/+923096287432?text=HY SILENTLOVER4 I'M MSG YOU FROM OWNER ADS" ,
thumbnailUrl: "https://files.catbox.moe/h5ddpq.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
});
