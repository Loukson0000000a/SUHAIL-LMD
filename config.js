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
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
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


global.SESSION_ID = process.env.SESSION_ID  || "mSUHAIL_00_20_09_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDg4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTc5LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk3LFxuICAgICAgICA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1LFxuICAgICAgICA0OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI4LFxuICAgICAgICA5MixcbiAgICAgICAgMTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjksXG4gICAgICAgIDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDg2LFxuICAgICAgICAxODcsXG4gICAgICAgIDQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDUxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM3LFxuICAgICAgICA2MixcbiAgICAgICAgMTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDExLFxuICAgICAgICAxMzUsXG4gICAgICAgIDcxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MSxcbiAgICAgICAgOTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDczLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMCxcbiAgICAgICAgNjksXG4gICAgICAgIDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc3LFxuICAgICAgICA4NixcbiAgICAgICAgNSxcbiAgICAgICAgMjA2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTU3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOCxcbiAgICAgICAgMjM2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4LFxuICAgICAgICA4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDMwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJZRVV6bm1EMWxaZ1o3YVQrYkdyWk1SU0tSc05BenQ1ekRKbHVOOVAvMDlzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDbEJibTdsWFJ4MmJqWGdiVDEwZTl3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjUzNDM4N2U4LTA4MjItNGM0NS1hNTgyLWM3NzJmMDc4MzJiMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjEsXG4gICAgICAxMTEsXG4gICAgICA2NCxcbiAgICAgIDE4MixcbiAgICAgIDEyNCxcbiAgICAgIDE5NSxcbiAgICAgIDE0MixcbiAgICAgIDMzLFxuICAgICAgNzUsXG4gICAgICAyNDAsXG4gICAgICA4MixcbiAgICAgIDE2MixcbiAgICAgIDIyOSxcbiAgICAgIDkwLFxuICAgICAgNjAsXG4gICAgICAxOTksXG4gICAgICAxOTAsXG4gICAgICAxMzUsXG4gICAgICA1MixcbiAgICAgIDE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMwLFxuICAgICAgMTU3LFxuICAgICAgMTksXG4gICAgICAyNDMsXG4gICAgICAxNyxcbiAgICAgIDY4LFxuICAgICAgNTEsXG4gICAgICAxMjMsXG4gICAgICA3LFxuICAgICAgMTA2LFxuICAgICAgMTQ2LFxuICAgICAgMTYwLFxuICAgICAgMjI3LFxuICAgICAgMjE5LFxuICAgICAgNTEsXG4gICAgICAzMSxcbiAgICAgIDUxLFxuICAgICAgMTQwLFxuICAgICAgMjEsXG4gICAgICAzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMUTdTVkZONlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1MDIzMzE5ODg6NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyMDEzNDkzMzIxNzk0OjQyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pHNGc3TUhFS2FpdUxjR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVXhkODJIMkdSV3czUGFyRk1wYlNINkw4NGJZOVZlK2cxZjQzZnFVMHdSZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJRakkwSDVobWpFZldzek1zdGFtMDdzeXB4cDNKWDdCQUdoWm5CN2l4aUUwaWhEQy9wZzZqTkZ5dHlNUXEwaU9ob0FLN0JwQVErYjlmRy9LanZSNGtDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJlRGRHNjZLVi9CRVJTUDZsZ0ZoMkwxbzYxZXROWGdqTjVtcEdIKzlBS3AyQjJwZ0t4Y1BZM2JkbDgrdFBQK25iUTZ2ZUNkTEZVcVFJTkNYK1MwNDZqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjUwMjMzMTk4ODo0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNjg3Nzk5NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJmUFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQmZQLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRis5bUhnUnZGc2pVK2dmbGw5OXpVU01KbWZsUGpuQjJWdDlQZ0Rld1Q3RT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTg2MDU5Mjc5LFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMCwzLDddfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳ ® 』```", //*『✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
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
