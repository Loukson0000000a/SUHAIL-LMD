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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_14_10_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA4MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTkzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxODksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDM0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDgzLFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDc0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUwLFxuICAgICAgICA0NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQzLFxuICAgICAgICA3MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA4LFxuICAgICAgICA3OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDk0LFxuICAgICAgICAzNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDYzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA5LFxuICAgICAgICA3MixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA1LFxuICAgICAgICA2NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjksXG4gICAgICAgIDY1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTMyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOSxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA3NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDksXG4gICAgICAgIDI0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNixcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OCxcbiAgICAgICAgMTgxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTk0LFxuICAgICAgICA4OCxcbiAgICAgICAgNixcbiAgICAgICAgNjksXG4gICAgICAgIDM1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0LFxuICAgICAgICA3NixcbiAgICAgICAgNTEsXG4gICAgICAgIDEyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAzNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExLFxuICAgICAgICA5OSxcbiAgICAgICAgMTY0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzQsXG4gICAgICAgIDg1LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDExLFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6VlNSNUJUNnZxUkRLTFlmdmJjeExrWlJnelhGZVl6UFUyV3RKa0pXaFM0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyNTAyMzMxOTg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2QUQ5NjJEOTYxQjZBNDg0RDg4MzY0NTRBQkE0QUI0MVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjgxNTkyNTRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWHkzVUt2ZkhUbmFiZGQwa1hCYk1ZUVwiLFxuICBcInBob25lSWRcIjogXCIxZmIxMmZiZS1iNzJiLTQ4N2EtYWMyZS02NzBlMmJkZTk3ZmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzQsXG4gICAgICAyMzksXG4gICAgICAyNDQsXG4gICAgICA5LFxuICAgICAgMjcsXG4gICAgICA2MyxcbiAgICAgIDM1LFxuICAgICAgMTQ0LFxuICAgICAgNDQsXG4gICAgICA5MyxcbiAgICAgIDEwNSxcbiAgICAgIDExMSxcbiAgICAgIDExNSxcbiAgICAgIDk5LFxuICAgICAgMTYwLFxuICAgICAgMTcyLFxuICAgICAgMjA4LFxuICAgICAgNTAsXG4gICAgICA2MCxcbiAgICAgIDI0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzcsXG4gICAgICAyNDgsXG4gICAgICAyNDUsXG4gICAgICA5NixcbiAgICAgIDE2LFxuICAgICAgMTcsXG4gICAgICA0OCxcbiAgICAgIDI0NyxcbiAgICAgIDQwLFxuICAgICAgMjE3LFxuICAgICAgMjE0LFxuICAgICAgNDQsXG4gICAgICAyMTEsXG4gICAgICAxMjcsXG4gICAgICAyNixcbiAgICAgIDczLFxuICAgICAgMCxcbiAgICAgIDQ0LFxuICAgICAgMjUwLFxuICAgICAgODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOTNEWFdBMlJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyNTAyMzMxOTg4OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCL8J2ar/CdkJTwnZCK8J2QkvCdmq/wnZq0LfCdkJTwnZqt8J2QlPCdmrPwnZqr8J2QivCdmrBcIixcbiAgICBcImxpZFwiOiBcIjEyMDEzNDkzMzIxNzk0OjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFRjejRvREVJKzhocmdHR0NvZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTcVNCSS9NdzFLWE91bW1uUFlkUGZkNytYQkozWHByUUhieGJJaHhweVg4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjNaUTVqbDRBb3lKWmxCNm1zb2lDRW90YmpyKzF5N0RBcCtmeGxKWi82U0RFUWtRbmFUSkNIZUlKTlR4NDl6S3hWbW5yc0ZVNzFuWm5XZVpzcWo3NkF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkd6dFRqaGdBTUJPd2tDeXZwZU4ycGw3YmF3LytTZUQ1M014VjU1VklzazZBNk50SDZ5b2RUTExaU1FPdGQzVjk0UW5CS1l6RTZTRG9tUGZqa1lHRGhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNTAyMzMxOTg4OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjgxNTkyNTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGUnNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZScy5qc29uIjogIntcImtleURhdGFcIjpcIjBSQXJRYjQ1NVM2L3JLYjVLVjNCbXV0WEU5MzIxR0ZOZjhURXk4NlArTXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODI3NTg0MDUyLFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwxLDMsNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "2", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

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
