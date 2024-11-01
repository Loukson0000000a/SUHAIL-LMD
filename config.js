const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "https://telegra.ph/file/085c4b1068f0f4f8db970.mp4" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Loukson/SUHAIL-LMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://iili.io/dmKqfTP.jpg" || "https://iili.io/dmKqfTP.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "©✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "221765147478";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/085c4b1068f0f4f8db970.mp4,https://iili.io/dmKqfTP.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "22502331988,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_45_11_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDQ2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU4LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2LFxuICAgICAgICA5NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDksXG4gICAgICAgIDYxLFxuICAgICAgICAyMixcbiAgICAgICAgNjgsXG4gICAgICAgIDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI4LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNSxcbiAgICAgICAgOTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzLFxuICAgICAgICAxNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYwLFxuICAgICAgICA5MixcbiAgICAgICAgNjcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAyLFxuICAgICAgICA2MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYxLFxuICAgICAgICA1MyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTksXG4gICAgICAgIDUsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDc0LFxuICAgICAgICA2NixcbiAgICAgICAgMixcbiAgICAgICAgNTQsXG4gICAgICAgIDkxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxODgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjEyLFxuICAgICAgICA5OSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNixcbiAgICAgICAgNjUsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDM5LFxuICAgICAgICA4NixcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjksXG4gICAgICAgIDgwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgODcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjksXG4gICAgICAgIDQyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3LFxuICAgICAgICA2MixcbiAgICAgICAgOTIsXG4gICAgICAgIDg4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNVNEQUF6ZVY3VDZrek1tUlY2TEZ3aFNoc3QweGFhNzlKb0ZqRGRBOTlUST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSmVGVUUwUGNRdVdBNURFYWZwMUhzUVwiLFxuICBcInBob25lSWRcIjogXCI3MDI1ZmFmMy0xYTFjLTQ5YmYtODdlOC1mNzhjZWI3MGU1YWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM5LFxuICAgICAgMjQ3LFxuICAgICAgMTI2LFxuICAgICAgOTUsXG4gICAgICAxMTYsXG4gICAgICA5MSxcbiAgICAgIDEzOCxcbiAgICAgIDEwNixcbiAgICAgIDEyMCxcbiAgICAgIDExMCxcbiAgICAgIDQ4LFxuICAgICAgMTgyLFxuICAgICAgMjAwLFxuICAgICAgMjUzLFxuICAgICAgMTIsXG4gICAgICAxODYsXG4gICAgICA2NixcbiAgICAgIDE1NSxcbiAgICAgIDkwLFxuICAgICAgMjEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OSxcbiAgICAgIDc3LFxuICAgICAgMjA1LFxuICAgICAgMzAsXG4gICAgICA1LFxuICAgICAgNjMsXG4gICAgICAxOTksXG4gICAgICA5NSxcbiAgICAgIDE5NyxcbiAgICAgIDIzMixcbiAgICAgIDY1LFxuICAgICAgNTAsXG4gICAgICAzMCxcbiAgICAgIDIzOCxcbiAgICAgIDQ4LFxuICAgICAgNzEsXG4gICAgICAxMTAsXG4gICAgICA0OCxcbiAgICAgIDIyOCxcbiAgICAgIDE5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSSlRQNlFOTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjIxNzY1MTQ3NDc4OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0ODUwMzYxOTM4MzMwNjoxN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJaURtTW9ERU5XMms3a0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIndBL0RwZXd0QTFVZnUxYXdjdVFWSFlnbldTVUlxdndla1VydnNTeXhwR009XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNVpWRE1uTGZIMlpSZTQrVnpBdURCaWNsOHlHVmRsaVdpWWxLNGI5RUowZ2hVMFpwb2d2NDY5MnpkKy82cU50Szk3NitGL2Z1TG96WWRJYzUrbGhjQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOGpyV0RmWDF2MlVTelRrNTdlVk9zVU1zYnlwRWJXQm8vSldKYkVWTE42S3dEVGtjZWFVaHE1MkNDdlVwcDM4LzlrWTFTYm42alZ5TTJkZ05vZUs5QkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjIxNzY1MTQ3NDc4OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNDY4Njk3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "2", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳ ® 』```", //*『✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳",
  packname: process.env.PACK_NAME || "✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳",
  botname : process.env.BOT_NAME  || "NARUTO-MD",
  ownername:process.env.OWNER_NAME|| "⫷⛇𝑺𝑯𝑨𝑫𝑶𝑾࿙𝑲𝑨𝑹𝑨࿚𝑮𝑨𝑹𝑫𝑬𝑵⛇⫸",
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "NARUTO"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
