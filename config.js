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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22502331988";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_00_10_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTEyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjU1LFxuICAgICAgICA4LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE0LFxuICAgICAgICA0MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg3LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDgwLFxuICAgICAgICA0NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDksXG4gICAgICAgIDkyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMSxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk4LFxuICAgICAgICA0OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTE2LFxuICAgICAgICA5OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDc2LFxuICAgICAgICA5MCxcbiAgICAgICAgNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjUxLFxuICAgICAgICA1NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIwLFxuICAgICAgICA3NixcbiAgICAgICAgNjEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTUwLFxuICAgICAgICA0NixcbiAgICAgICAgMjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQxLFxuICAgICAgICA5NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgODIsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzAsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzUsXG4gICAgICAgIDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExLFxuICAgICAgICA3LFxuICAgICAgICA4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzksXG4gICAgICAgIDY1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDYzLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwib0N3MnplZ25scnh5UXRVTVhhdjNUSzUzRml6UUtKRHlQdmJoYkdRcDNCWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidDZ0S2xkaTdRRzYwNzJMV3E5Si1LQVwiLFxuICBcInBob25lSWRcIjogXCJiMWEwZDlkMC1jMWRhLTQzMzctYTBmZS01NDMyNjhlODJlNGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYzLFxuICAgICAgMTc4LFxuICAgICAgMzUsXG4gICAgICAxNjksXG4gICAgICAyMzgsXG4gICAgICA0OCxcbiAgICAgIDEwOCxcbiAgICAgIDEzNyxcbiAgICAgIDExMCxcbiAgICAgIDI0MCxcbiAgICAgIDE1MCxcbiAgICAgIDExMCxcbiAgICAgIDg5LFxuICAgICAgMTUsXG4gICAgICAxMzksXG4gICAgICAxNjQsXG4gICAgICA3NSxcbiAgICAgIDcyLFxuICAgICAgOTYsXG4gICAgICAxMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODksXG4gICAgICAxMzQsXG4gICAgICAxODksXG4gICAgICA0MixcbiAgICAgIDYzLFxuICAgICAgMTIsXG4gICAgICAxNjQsXG4gICAgICA1OCxcbiAgICAgIDYwLFxuICAgICAgMCxcbiAgICAgIDc4LFxuICAgICAgMjI3LFxuICAgICAgMTIzLFxuICAgICAgODUsXG4gICAgICAxOTAsXG4gICAgICAxNTAsXG4gICAgICA5NCxcbiAgICAgIDE4NSxcbiAgICAgIDY4LFxuICAgICAgMTE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxOR045U0tIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjUwMjMzMTk4ODo5NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIsqfIC/wnZKWXFxuICDhtI8v8J2Sm1xcbiAgICDhtJwv8J2SllxcbiAgICAgIOG0iy/wnZKOXFxuICAgICAgICBzLyDwnZKCXFxuICAgICAgICAgIOG0jy/wnZKMXFxuICAgICAgICAgICAgIMm0L/CdkopcIixcbiAgICBcImxpZFwiOiBcIjEyMDEzNDkzMzIxNzk0Ojk2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p2dCthTUZFTWoyLzdnR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWWpzSEhMZEVENU9jaXNJeE81Nm9DU1BscjB3bHJQUzIza2drSGk3S20wRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJIcUxNejMxN2ZqZUhqWWxOVCtQdEFncHdiWk5adEl1T0NhdTZmVk1HVEJNdWRGampiUHRYMDhwVytpMXpqYzUyVWE5ald6SEF5U2ZLZlJjMXJDK01DUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJOWTJuUDQ3bVpvazExZm5VN2ZtMUk3RjZaeW9pR3pqb2pkam9iWVhKczM4enQwZlF0NzA1Qm80T1Y3dkZWWHNVZ2txQ3RBaFJxWDJXVXNoV2I2aW9DZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjUwMjMzMTk4ODo5NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwMTQ5MTk2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRmlKXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGaUouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKOUNreW9RTE81Z3RENDEwdG1nZ0RzaHNJYzhlMTJQdisxdjZBL2dFd2w0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MTc1NzQwNDMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMDA5ODk1MzUwNlwifSIKfQ=="  // PUT your SESSION_ID 


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
