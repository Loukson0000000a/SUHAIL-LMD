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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_15_10_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDM0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA1NixcbiAgICAgICAgMTkzLFxuICAgICAgICA1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDc3LFxuICAgICAgICA3MyxcbiAgICAgICAgODUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDgzLFxuICAgICAgICA2MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYxLFxuICAgICAgICAxODcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjIzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTg3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNixcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgMjEzLFxuICAgICAgICA4NixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NixcbiAgICAgICAgMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA2MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDk0LFxuICAgICAgICAzNSxcbiAgICAgICAgODIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDgxLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMixcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjksXG4gICAgICAgIDEwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDgsXG4gICAgICAgIDQ2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY1LFxuICAgICAgICA5NixcbiAgICAgICAgMTcsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjU0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMixcbiAgICAgICAgNDEsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4LFxuICAgICAgICA2OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgODQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU2LFxuICAgICAgICA4MixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjksXG4gICAgICAgIDcxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzksXG4gICAgICAgIDcyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSFM3SXNBZkhpWTVxdHRPVGdHalRoUmZ0VDc4bHNjUFVkUDNKMUMzaGZOYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMjUwMjMzMTk4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQzgxNkZEQTVGMjREODMyQURCQjZFREJCMzEyQzg3M0FcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5Mjk2OTMzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjJNNTlOeHp5U0hlSE1xM3VBLUFGV1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjZjNmRlMjEtMDVmOS00YmEzLTkzMjYtMDIzZDljYTExZTQyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyOCxcbiAgICAgIDE5NyxcbiAgICAgIDE5NCxcbiAgICAgIDE3MCxcbiAgICAgIDE2NCxcbiAgICAgIDY0LFxuICAgICAgMjQxLFxuICAgICAgMixcbiAgICAgIDIwMixcbiAgICAgIDg2LFxuICAgICAgMTg4LFxuICAgICAgNjIsXG4gICAgICAxMTcsXG4gICAgICAxMjEsXG4gICAgICA3OSxcbiAgICAgIDIzMSxcbiAgICAgIDExMCxcbiAgICAgIDIxMSxcbiAgICAgIDEzMyxcbiAgICAgIDk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwLFxuICAgICAgMjIzLFxuICAgICAgMTEzLFxuICAgICAgMjAzLFxuICAgICAgMjI0LFxuICAgICAgMixcbiAgICAgIDIxMyxcbiAgICAgIDEyMSxcbiAgICAgIDE3MyxcbiAgICAgIDM1LFxuICAgICAgMjQ3LFxuICAgICAgNDcsXG4gICAgICAxMTAsXG4gICAgICAxODUsXG4gICAgICAxODcsXG4gICAgICAyMzMsXG4gICAgICAyMSxcbiAgICAgIDU0LFxuICAgICAgMjQyLFxuICAgICAgMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyREM0SjhONVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1MDIzMzE5ODg6NjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCM8J2Qq+KIhfCdlYPwnZWG8J2VjPCdlYLwnZWK8J2VhuKElSDwnZWM4oSk8J2VjPCdlYTwnZS48J2VgvCdlYAgIPCdlYvwnZS84oSC4oSNXCIsXG4gICAgXCJsaWRcIjogXCIxMjAxMzQ5MzMyMTc5NDo2M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKbnQrYU1GRUozMHk3Z0dHRHdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIllqc0hITGRFRDVPY2lzSXhPNTZvQ1NQbHIwd2xyUFMyM2tna0hpN0ttMEU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOXVTVjI2Vy9PTWdkTlBLUVVPdnEweUIzNWlFand3V1UvQjZFMUtDWlhyM3paUkVybllDVFkrbEEvd0d0UzdDNUlsMlRjTTVqWnhDcENKdHFGSDlTQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidnpndFh2QjBKK3pKZHVDcUZjNGtVVkt2ZkNrMEx0bS84ZUNsNmhXNkRWaDhRdFRWNWxkZk9PQjJ5Q3J4R1BPUGVSTHkzNlljR3RnRUlHREpUKzh6RHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI1MDIzMzE5ODg6NjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTI5NjkyOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhvQ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSG9DLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOWxnVmJhQ1ZBQyt5WDBlVXFhSzZ4ZzkzWFVFSExGTk9VY1UvUHg4STE4WT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDE3NTc0MDQxLFwiY3VycmVudEluZGV4XCI6NTgsXCJkZXZpY2VJbmRleGVzXCI6WzAsNTMsNTQsNTgsNDVdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
