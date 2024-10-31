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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_39_10_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgyLFxuICAgICAgICA5NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDU0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDYxLFxuICAgICAgICA4NCxcbiAgICAgICAgODYsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTA1LFxuICAgICAgICA4OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgODgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMwLFxuICAgICAgICA3NixcbiAgICAgICAgNTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTgxLFxuICAgICAgICA4NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg3LFxuICAgICAgICA0MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTksXG4gICAgICAgIDk5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU3LFxuICAgICAgICA4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTEwLFxuICAgICAgICA0MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDk5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4LFxuICAgICAgICA4NSxcbiAgICAgICAgNDksXG4gICAgICAgIDE0NixcbiAgICAgICAgMzUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDMzLFxuICAgICAgICAyOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTYxLFxuICAgICAgICA3NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDYzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTg2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjksXG4gICAgICAgIDk0LFxuICAgICAgICAxNixcbiAgICAgICAgMTYzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTY5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxLFxuICAgICAgICAzNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlVOWUFPc3BSV3JpeVRaY3F1RHJlQkJkcXpGRk1QczEreGRuOUNITHVDZVU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkctZ1k4ZjY1VERHREo1WktKR3M4d0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzU3Y2RkNjQtZWI0Yi00ZWY1LWFjZWYtZThkNmYxOTBmYjliXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMCxcbiAgICAgIDI1MyxcbiAgICAgIDE2NSxcbiAgICAgIDE1MixcbiAgICAgIDE1OSxcbiAgICAgIDcwLFxuICAgICAgMTc2LFxuICAgICAgMCxcbiAgICAgIDE0MyxcbiAgICAgIDE2OSxcbiAgICAgIDExOSxcbiAgICAgIDIwMyxcbiAgICAgIDkyLFxuICAgICAgMTUzLFxuICAgICAgMTU2LFxuICAgICAgMjA0LFxuICAgICAgMjA0LFxuICAgICAgMjEyLFxuICAgICAgNzcsXG4gICAgICAzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MCxcbiAgICAgIDE1NSxcbiAgICAgIDIwLFxuICAgICAgMjA1LFxuICAgICAgMTA2LFxuICAgICAgMTkxLFxuICAgICAgMjQ5LFxuICAgICAgMjI1LFxuICAgICAgMTY3LFxuICAgICAgMTU1LFxuICAgICAgMTAyLFxuICAgICAgMjA0LFxuICAgICAgNTUsXG4gICAgICA4NCxcbiAgICAgIDU3LFxuICAgICAgMTQ3LFxuICAgICAgMTk3LFxuICAgICAgMTU5LFxuICAgICAgMTkyLFxuICAgICAgMTAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdRUTRHWFoxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNDEwNzA1OTMyMDo2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTY0MjM1NjIzNTUwOTg3OjY2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pIRmpQY0VFSzZPa0xrR0dBb2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiK3pUUEVkcVJSRTNrQW1hOG1uVjdLQll5dWtHRTBuYU1QaFg5U2VMVlB6Yz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJRNmgyY21vTDBKR1VTakRFaDRTL29sSlBOdHVLT3BtSmxRdlpoYmgxZmd4SWhCVHRXOHZjREFhTEkrd2FHM0g1bVoyOFRDU3NqOUhhUlkxdW90TUdEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJQVXVUc2hjbmI2SVhOZW1CMWczbmZaNGgwR05VTVdCbXQ5YWJPYU9QRVRqRm9zNjhXeEFKWUp0QTZ2NmVzUnJWVUhjU2w4aEdsaU5ETC9hTWRsbHlEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNDEwNzA1OTMyMDo2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDQxNDM4NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJXOVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQlc5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiWU1mMmk3WjFzdXVCR1Q1VVpPV3ZPRUtLTnN4WWJLV3IxcW5XQlpJT3JGQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzIzNTA4MzY5LFwiY3VycmVudEluZGV4XCI6NyxcImRldmljZUluZGV4ZXNcIjpbMCw0LDUsNl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
