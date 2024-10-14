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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_48_10_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDYxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjUwLFxuICAgICAgICA1OCxcbiAgICAgICAgMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDc0LFxuICAgICAgICA5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI2LFxuICAgICAgICAyNixcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxODksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE1LFxuICAgICAgICA4MixcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM1LFxuICAgICAgICAxOSxcbiAgICAgICAgODEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIwLFxuICAgICAgICAyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDYwLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMixcbiAgICAgICAgNzYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTI4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI5LFxuICAgICAgICA3OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ5LFxuICAgICAgICA0MixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDk2LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzksXG4gICAgICAgIDY5LFxuICAgICAgICA4LFxuICAgICAgICAxNixcbiAgICAgICAgNTQsXG4gICAgICAgIDIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDYwLFxuICAgICAgICA5NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1LFxuICAgICAgICAzNSxcbiAgICAgICAgODksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA5MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjExLFxuICAgICAgICA2MSxcbiAgICAgICAgMjAzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDksXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDY0LFxuICAgICAgICA4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDc2LFxuICAgICAgICA0NixcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA3MyxcbiAgICAgICAgODEsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwLFxuICAgICAgICA1MSxcbiAgICAgICAgNzksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiR2xkaGdCR0pIZ0o2WUxBWEpIRDdnaFhYM0VuTHNWUWwrV05vbkZXdG9FWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidEJROUdTMFNTYXkyeWdwa2pDYkZVQVwiLFxuICBcInBob25lSWRcIjogXCI0NWI2ZmUwZi0xM2M3LTQ1OWEtODA5YS1iZTA3ODAxMjU2YmZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIzLFxuICAgICAgMjEyLFxuICAgICAgMTk4LFxuICAgICAgNzQsXG4gICAgICAyNDIsXG4gICAgICAyNDYsXG4gICAgICAyMzUsXG4gICAgICA1OCxcbiAgICAgIDE1NSxcbiAgICAgIDIzNSxcbiAgICAgIDE1NCxcbiAgICAgIDE2NSxcbiAgICAgIDIwMCxcbiAgICAgIDUzLFxuICAgICAgMjI0LFxuICAgICAgNCxcbiAgICAgIDI1MSxcbiAgICAgIDExLFxuICAgICAgMjEyLFxuICAgICAgNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk2LFxuICAgICAgMTc0LFxuICAgICAgMjUyLFxuICAgICAgMTE0LFxuICAgICAgMjMxLFxuICAgICAgMTQxLFxuICAgICAgMTkwLFxuICAgICAgMzQsXG4gICAgICAyMDcsXG4gICAgICAyMzEsXG4gICAgICA2OSxcbiAgICAgIDg5LFxuICAgICAgMjQzLFxuICAgICAgNDcsXG4gICAgICAyMjcsXG4gICAgICAyMzQsXG4gICAgICA0OSxcbiAgICAgIDE2NSxcbiAgICAgIDIzMSxcbiAgICAgIDg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFSN0xQWktBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQ4MjUyNDc0OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5NjMxOTEyMTEyOTQ5MDoxN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMLzR3YUlDRUovZXRMZ0dHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImNOdWNCSGVFTVZPdi9GNVhIeEhLZ3p2LzhiS0ExTVN0bU1pbjNRSkp0RkU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZDhTbVVNREU4cXdNenJyOHJEOXc3N21XZkM5N3o3UHhVOS9leVNyRmJ2MzA2WHVPTTNCUDlFUE5lRUNkcWovTDlybm1vSjVGTlVGTXlUWU5yRWtUQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNVhudkxQTW9XY01WUUdRdXRSbFNlM1YwRkZrTnlxVDUzOTliQUZNV09Wd0xodCtrK0R4a3lNR3NqSGpPdTFiS1Y2eVM4RDdOMnllSFhXcURXeHVCQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE0ODI1MjQ3NDoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4OTE3Mjg1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQk1MXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCTUwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIvM0V3dXcyYzRpb283aklMaXNiZ3Z1bElZNHVZbkdxRndES2wvZ3V5bWFvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjYwOTI1NDQ2MyxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI4ODM1NDcwNDE3XCJ9Igp9"


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
