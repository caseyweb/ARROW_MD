const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({

    pattern: "menu",

    react: "🛸",

    alias: ["panel","commands"],

    desc: "Get bot\'s command list.",

    category: "main",

    use: '.menu',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
const config = await readEnv();
let madeMenu = `╭━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

*⇆ ʜɪɪ ᴍʏ ᴅᴇᴀʀ ғʀɪᴇɴᴅ ⇆*

     *${pushname}*
     
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷
┏━━━━━━━━━━━━━━━━━━━━━━━━━━
      *ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ sɪʟᴇɴᴛ-sᴏʙx-ᴍᴅ ғᴜʟʟ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ*
┗━━━━━━━━━━━━━━━━━━━━━━━━━━

*ᴄʀᴇᴀᴛᴇᴅ ʙʏ sɪʟᴇɴᴛ ʟᴏᴠᴇʀ⁴³²👨🏻‍💻*

*┌─〈 ✦🆂︎ɪʟᴇɴᴛ-🆂ᴏʙx-🅼ᴅ✦ 〉─◆*
*│╭─────────────···▸*
*┴│▸*
*❖│▸* *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
*❖│▸* *ʀᴀᴍ ᴜsᴇ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*❖│▸* *ɴᴀᴍᴇ ʙᴏᴛ* : *❖sɪʟᴇɴᴛ-sᴏʙx-ᴍᴅ❖*
*❖│▸* *ᴄʀᴇᴀᴛᴏʀ* : *➺ѕเℓεɳƭ_ℓσѵε૨࿐*
*❖│▸* *ᴠᴇʀsɪᴏɴs* : *ᴠ.2.0.0*
*❖│▸* *ᴍᴇɴᴜ ᴄᴍᴅ* : *ᴍᴇɴᴜ ʟɪsᴛ*
*┬│▸*
*│╰────────────···▸▸*
*└──────────────···▸*
*♡︎•━━━━━━☻︎━━━━━━•♡︎*

*╭────❒⁠⁠⁠⁠* *📥 DOWNLOADER-CMD 📥* *❒⁠⁠⁠⁠* 
*┋* *.ғʙ <ᴜʀʟ>*
*┋* *.ɪɴꜱᴛᴀ <ᴜʀʟ>*
*┋* *.ᴠɪᴅᴇᴏ <ᴜʀʟ>*
*┋* *.ɢᴅʀɪᴠᴇ <ᴜʀʟ>*
*┋* *.ᴛᴡɪᴛᴛᴇʀ <ᴜʀʟ>*
*┋* *.ᴛᴛ<ᴜʀʟ>*
*┋* *.ᴍᴇᴅɪᴀғɪʀᴇ <ᴜʀʟ>*
*┋* *.ꜱᴏɴɢ <ϙᴜᴇʀʏ>*
*┋* *.ᴘʟᴀʏ <ᴜʀʟ>*
*┋* *.ᴠɪᴅᴇᴏ <ϙᴜᴇʀʏ>*
*┋* *.ᴠɪᴅᴇᴏ <ᴜʀʟ>*
*┋* *.ɪᴍɢ <ϙᴜᴇʀʏ>*
*┋* *.ᴀᴘᴋ <ɴᴀᴍᴇ>*
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *🔎 SEARCH-CMD 🔍* *❒⁠⁠⁠⁠* 
*┋* *.ʏᴛꜱ  <ᴛᴇxᴛ>*
*┋* *.ʟᴏʟɪ <ᴛᴇxᴛ>*
*┋* *.ᴍᴏᴠɪᴇ <ᴛᴇxᴛ>*
*┋* *.ɪᴍɢ <ᴛᴇxᴛ>*
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *🧠 AI-CMD 🧠* *❒⁠⁠⁠⁠* 
*┋* *.ɢᴘᴛ <ᴛᴇxᴛ>*
*┋* *.ᴀɪ <ᴛᴇxᴛ>*
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *👨‍💻 OWNER-CMD 👨‍💻* *❒⁠⁠⁠⁠* 
*┋* *.ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*
*┋* *.ᴜᴘᴅᴀᴛᴇ*
*┋* *.ᴏᴡɴᴇʀ*
*┋* *.ʀᴇᴘᴏ*
*┋* *.ꜱʏꜱᴛᴇᴍ*
*┋* *.ꜱᴛᴀᴛᴜꜱ*
*┋* *.ʙᴏᴛ*
*┋* *.ʀᴇꜱᴛᴀʀᴛ*
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *👥 GROUP-CMD 👥* *❒⁠⁠⁠⁠* 
*┋* *.ʀᴇᴍᴏᴠᴇ <ʀᴇᴘʟʏ ғᴏʀ ᴅᴇʟᴇᴛᴇ sᴍs>*
*┋* *.ᴅᴇʟᴇᴛᴇ <ʀᴇᴘʟʏ ғᴏʀ ᴅᴇʟᴇᴛᴇ sᴍs>*
*┋* *.ᴀᴅᴅ*
*┋* *.ᴋɪᴄᴋ*
*┋* *.sᴇᴛɢᴏᴏᴅʙʏᴇ <ᴛᴇxᴛ>*
*┋* *.sᴇᴛᴡᴇʟᴄᴏᴍᴇ <ᴛᴇxᴛ>*
*┋* *.ᴘʀᴏᴍᴏᴛᴇ*
*┋* *.ᴅᴇᴍᴏᴛᴇ*
*┋* *.ᴛᴀɢᴀʟʟ*
*┋* *.ɢᴇᴛᴘɪᴄ*
*┋* *.ɪɴᴠɪᴛᴇ*
*┋* *.ʀᴇᴠᴏᴋᴇ*
*┋* *.ᴊᴏɪɴʀᴇǫᴜᴇsᴛs*
*┋* *.ᴀʟʟʀᴇǫ*
*┋* *.ᴍᴜᴛᴇ*
*┋* *.ᴜɴᴍᴜᴛᴇ*
*┋* *.ʟᴏᴄᴋɢᴄ*
*┋* *.ᴜɴʟᴏᴄᴋɢᴄ*
*┋* *.ʟᴇᴀᴠᴇ*
*┋* *.ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*
*┋* *.ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴄ*
*┋* *.ᴊᴏɪɴ*
*┋* *.ʜɪᴅᴇᴛᴀɢ*
*┋* *.ɢɪɴғᴏ*
*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ ᴏɴ*
*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ ᴏғғ*
*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ 7ᴅ 24ʜ 90ᴅ*
*┋* *.sᴇɴᴅᴅᴍ*
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *📃 INFO-CMD 📃* *❒⁠⁠⁠⁠* 
*┋* *.ᴍᴇɴᴜ*
*┋* *.ᴍᴇɴᴜ2*
*┋* *.ᴍᴇɴᴜ3*
*┋* *.ᴀʙᴏᴜᴛ*
*┋* *.sᴄʀɪᴘᴛ*
*┋* *.ᴀʟɪᴠᴇ*
*┋* *.ʙᴏᴛɪɴꜰᴏ*
*┋* *.ꜱᴛᴀᴛᴜꜱ*
*┋* *.ꜱᴜᴘᴘᴏʀᴛ*
*┋* *.ᴘɪɴɢ*
*┋* *.ꜱʏꜱᴛᴇᴍ*
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *🎡 CONVERTER-CMD 🎡* *❒⁠⁠⁠⁠* 
*┋* *.sᴛɪᴄᴋᴇʀ*
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *⛱️ RANDOM-CMD ⛱️* *❒⁠⁠⁠⁠* 
*┋* *.ᴋɪɴɢ*
*┋* *.ᴅᴏɢ*
*┋* *.ᴀɴɪᴍᴇ*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ1*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ2*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ3*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ4*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ5*
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *🏜️ WALLPAPERS-CMD 🏜️* *❒⁠⁠⁠⁠* 
*┋* *.ɪᴍɢ*
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *🌐 OTHER-CMD 🌐* *❒⁠⁠⁠⁠* 
*┋* *.ᴛʀᴛ*
*┋* *.ᴍᴏᴠɪᴇ*
*┋* *.ꜰᴀᴄᴛ*
*┋* *.ɢɪᴛʜᴜʙꜱᴛᴀʟᴋ*
*┋* *.ɢᴘᴀꜱꜱ*
*┋* *.ʜᴀᴄᴋ*
*┋* *.ǫᴜᴏᴛᴇ*
*┋* *.ꜱʀᴇᴘᴏ*
*┋* *.ᴅᴇꜰɪɴᴇ*
*┕───────────────────❒*

*❒⁠⁠⁠⁠▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭❒*⁠⁠⁠⁠

> *POWERED BY SILENTLOVER432*
╘✦•·········•••••••••············•✦ 
`

await conn.sendMessage(from, { text: madeMenu ,
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
title: '◀︎SILENT-SOBX-MD MENU▶︎',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VaHO5B0G3R3cWkZN970s" ,
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
