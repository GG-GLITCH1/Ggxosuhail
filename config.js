const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/9dcef2b49909742db8dbd.jpg" || "https://telegra.ph/file/9dcef2b49909742db8dbd.jpg"; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "BLUE DEMON !" 


global.devs = "2347041039367" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347041039367";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347041039367";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 10
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/9dcef2b49909742db8dbd.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2347041039367";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_39_10_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxODksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc0LFxuICAgICAgICA4NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY0LFxuICAgICAgICA4LFxuICAgICAgICA5NixcbiAgICAgICAgOTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDcsXG4gICAgICAgIDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyOCxcbiAgICAgICAgNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTExLFxuICAgICAgICA3NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNixcbiAgICAgICAgNTIsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDkxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDg0LFxuICAgICAgICA2NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDc4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDcwLFxuICAgICAgICAzMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyLFxuICAgICAgICA5MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDMzLFxuICAgICAgICAzLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA5NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODcsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzksXG4gICAgICAgIDIyNixcbiAgICAgICAgNjksXG4gICAgICAgIDEyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTc5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDgyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA1NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU5LFxuICAgICAgICA1NixcbiAgICAgICAgNTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzksXG4gICAgICAgIDM4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTEzLFxuICAgICAgICA1MixcbiAgICAgICAgOTQsXG4gICAgICAgIDIzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDk1LFxuICAgICAgICA3NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAzNixcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInNJczFTT2s4anI3ZTJJMnVTRm52SFZLeEsxWGdqbjkxWWdqc2I2MDllVFU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImZDblJ6VnVOUTVTclpFVWNueGlUdVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjFkZWQ2NDEtN2JmNS00YzEwLWI0M2ItNTUzMDk2MTZlNDk5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNCxcbiAgICAgIDkzLFxuICAgICAgMjMsXG4gICAgICAyMzIsXG4gICAgICAyMzksXG4gICAgICA1MSxcbiAgICAgIDE5OSxcbiAgICAgIDI1MyxcbiAgICAgIDI1NSxcbiAgICAgIDk5LFxuICAgICAgMjA0LFxuICAgICAgNzksXG4gICAgICAxNDAsXG4gICAgICAyNixcbiAgICAgIDQ3LFxuICAgICAgMjE2LFxuICAgICAgMjgsXG4gICAgICAyMzYsXG4gICAgICA2MixcbiAgICAgIDI1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDQsXG4gICAgICAxODYsXG4gICAgICAzLFxuICAgICAgMjMzLFxuICAgICAgMjMsXG4gICAgICA5NCxcbiAgICAgIDIwNyxcbiAgICAgIDUzLFxuICAgICAgMTQyLFxuICAgICAgOTYsXG4gICAgICAxMTAsXG4gICAgICAxNTAsXG4gICAgICA0NSxcbiAgICAgIDE0OSxcbiAgICAgIDEwNyxcbiAgICAgIDE0NCxcbiAgICAgIDEsXG4gICAgICAxMTUsXG4gICAgICAxNTksXG4gICAgICAxNjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUVBCM1k0TjdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDEwMzkzNjc6OTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZmx8J2Zu/CdmoTwnZm0IPCdmbPwnZm08J2ZvPCdmb7wnZm9IPCdmofwnZqB8J2ZsPCdmbjwnZqD8J2aglwiLFxuICAgIFwibGlkXCI6IFwiMjE0NjE1NTczMTQzNzEyOjkzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0liODd2b0ZFT0NMc0xnR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYzlycEtaZUlCQ3cwUzkrOXR6QldPZkNlb1VtbVl3NGVCUDRWOXFtZnhoOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJuQ3p3ajlRK1RTdUJzb0QycVZhMFVxV2hsREE5YXlOZGJ3OTg3MllaUUFZWEtackwxbHNITVZ6eHJxbElNMnJiVzY5V1J1aEo3M2Y2R2o3OHl5NzhBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJEeGdtQnRKSktha0dSUnlUMEJKaHoxcWpVZ05heDZJN0xpTGxNZFA4WW5vblJXUmpFNUprZWU4SSsraEoyQi9kR0NxN1pVTUdSSHFsUEdoeHEwYXpCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDQxMDM5MzY3OjkzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODg0MTE4NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhFNVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSEU1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwidmdUdnkxbWlNamdzSXBjZFlENFAwK2dLZUFCYjlmYjFTRVB1Um1FbUcxYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTk5ODQ3OTQyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjg3NTg5NDA3MDdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "BLUE DEMON",
  ownername:process.env.OWNER_NAME|| "BLUE DEMON",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "BLUE DEMON"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
