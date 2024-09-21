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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/085c4b1068f0f4f8db970.mp4" || "https://telegra.ph/file/085c4b1068f0f4f8db970.mp4" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "©✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22502331988";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/085c4b1068f0f4f8db970.mp4" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_55_09_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDM0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjExLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTczLFxuICAgICAgICA0MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTI1LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDczLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk2LFxuICAgICAgICA5MixcbiAgICAgICAgMTA4LFxuICAgICAgICAyNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTEyLFxuICAgICAgICA4NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDY4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA4MCxcbiAgICAgICAgNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDYwLFxuICAgICAgICAyMyxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAzOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1LFxuICAgICAgICA3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTIyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDksXG4gICAgICAgIDE1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgwLFxuICAgICAgICA0NSxcbiAgICAgICAgODYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjUzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMSxcbiAgICAgICAgMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjExLFxuICAgICAgICA4MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI5LFxuICAgICAgICA2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDM3LFxuICAgICAgICA4NixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUyLFxuICAgICAgICA3OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDM5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0cmdKUUdaVEFXOFg0VWhNcXBQbDE4Zm5QcEorSkgyaHM2TXN0UHRhRVZBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJiUmdzVlNTT1RWT0U0d1NaN1J2OV9nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE5NmE2MTJlLTczYTUtNGEwNC1hYWVhLTBmOGUzYmY3NTUxNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzAsXG4gICAgICAxNzEsXG4gICAgICA2MixcbiAgICAgIDIzOSxcbiAgICAgIDMxLFxuICAgICAgMTU4LFxuICAgICAgMTU2LFxuICAgICAgMTY4LFxuICAgICAgMTM0LFxuICAgICAgMTU0LFxuICAgICAgMTcxLFxuICAgICAgODUsXG4gICAgICAyMjYsXG4gICAgICAyOCxcbiAgICAgIDE2NCxcbiAgICAgIDI1NCxcbiAgICAgIDIxMyxcbiAgICAgIDIyOCxcbiAgICAgIDIwNSxcbiAgICAgIDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEsXG4gICAgICA2LFxuICAgICAgMTgxLFxuICAgICAgODIsXG4gICAgICA3NixcbiAgICAgIDM2LFxuICAgICAgNzEsXG4gICAgICAwLFxuICAgICAgMTg3LFxuICAgICAgMjM1LFxuICAgICAgMTUsXG4gICAgICA4NCxcbiAgICAgIDE5MCxcbiAgICAgIDIxLFxuICAgICAgMixcbiAgICAgIDIyNixcbiAgICAgIDE5MixcbiAgICAgIDIzMSxcbiAgICAgIDExMSxcbiAgICAgIDIwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEUkJGREY3WVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1MDIzMzE5ODg6NDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyMDEzNDkzMzIxNzk0OjQ1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pLNGc3TUhFTjIvdWJjR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVXhkODJIMkdSV3czUGFyRk1wYlNINkw4NGJZOVZlK2cxZjQzZnFVMHdSZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJWeE1UNS95N1grUFlwT0pvSzdQK2FnNE9oMHU1UWlDWStHd3JpTFBxb1l4anlENk5aMVljdzJ5MlgxVDh3UXVLTG1uaW45eGhBblNMN0JmakxPbVFEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJodGFMRi9nTGorUXp0N0syanM1ZjRwRmJnRnNhb1hGTm10V0VPN1NRZGpNSXQrcTZPemtSVTk0OWxqNjZRVlNpUk5JUGRmR1g5Y0Z0d00zQVJNWUhEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjUwMjMzMTk4ODo0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNjg5ODE0OFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳ ® 』```", //*『✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳",
  packname: process.env.PACK_NAME || "✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳",
  botname : process.env.BOT_NAME  || "NARUTO-MD",
  ownername:process.env.OWNER_NAME|| "✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳",


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
