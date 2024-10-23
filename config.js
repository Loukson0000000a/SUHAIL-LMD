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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_04_10_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NixcbiAgICAgICAgMjMxLFxuICAgICAgICA1MSxcbiAgICAgICAgODgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMSxcbiAgICAgICAgMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2LFxuICAgICAgICA0NyxcbiAgICAgICAgODEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDYwLFxuICAgICAgICA0MixcbiAgICAgICAgMjM2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTg0LFxuICAgICAgICA0OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI2LFxuICAgICAgICAzMixcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA3MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDkwLFxuICAgICAgICAxODQsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjksXG4gICAgICAgIDk4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNixcbiAgICAgICAgODIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDEsXG4gICAgICAgIDY5LFxuICAgICAgICA5MixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAzNixcbiAgICAgICAgMTE2LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODgsXG4gICAgICAgIDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQzLFxuICAgICAgICA4NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk1LFxuICAgICAgICA4NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDM1LFxuICAgICAgICAyNixcbiAgICAgICAgMTY3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDMxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDY2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTUyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM2LFxuICAgICAgICA1NyxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImo3QnlQbmc1UGdxS3NRdEEvS1YvQjJ1SDBtcFRiR3BRSXRRRlB1S3kwc0E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlhnblNINl9TU1kycC1hM1BzbFM2ckFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzZiOTI4NTEtODE1ZS00N2E0LWFkZjUtYWUwOTMzZWY0YTE5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYyLFxuICAgICAgNTUsXG4gICAgICA3NyxcbiAgICAgIDI1MyxcbiAgICAgIDE2OSxcbiAgICAgIDE0MSxcbiAgICAgIDE3MCxcbiAgICAgIDc2LFxuICAgICAgNjIsXG4gICAgICA2MSxcbiAgICAgIDMyLFxuICAgICAgMTMsXG4gICAgICA1NyxcbiAgICAgIDUwLFxuICAgICAgMjU0LFxuICAgICAgODQsXG4gICAgICA0MCxcbiAgICAgIDY5LFxuICAgICAgMTM0LFxuICAgICAgMTUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMSxcbiAgICAgIDIxMSxcbiAgICAgIDg2LFxuICAgICAgMjQ4LFxuICAgICAgODksXG4gICAgICA4MSxcbiAgICAgIDI3LFxuICAgICAgNzEsXG4gICAgICAyMDIsXG4gICAgICAyMDgsXG4gICAgICA0OSxcbiAgICAgIDY3LFxuICAgICAgMTYyLFxuICAgICAgODYsXG4gICAgICAyNDQsXG4gICAgICA0MyxcbiAgICAgIDYzLFxuICAgICAgMTQxLFxuICAgICAgMTg2LFxuICAgICAgMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBMjlLQ1RDM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1MDIzMzE5ODg6NzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLKnyAv8J2SllxcbiAg4bSPIC/wnZKbXFxuICAgIOG0nC8g8J2SllxcbiAgICAgIOG0iy8g8J2SjlxcbiAgICAgICAgcy8g8J2SglxcbiAgICAgICAgICDhtI8gL/CdkoxcXG4gICAgICAgICAgICDJtC/wnZKKXCIsXG4gICAgXCJsaWRcIjogXCIxMjAxMzQ5MzMyMTc5NDo3OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKcnQrYU1GRUp6NzRMZ0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIllqc0hITGRFRDVPY2lzSXhPNTZvQ1NQbHIwd2xyUFMyM2tna0hpN0ttMEU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwid2l4TElBckxta1g3Q2Q0TkRWVzVQdm5GekM5Si9Uc2xJamNjdmRFOXdjQlVoV1ozWFFrNW14YW1FcnU5bW5GREl2cGcvMWZFTUJKWW16T1ZPREdnREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQWYvVkRTUUowWENzWlZrd3hRWnhHSXFXd3hNaE9KR2djL1NOTm1icUdlK1ErYXlnQUdUeHZTbFFJZnFYS1BrcHdHVGVUbmYrTUtVdkcrWmY5VG10Q0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI1MDIzMzE5ODg6NzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTY0MTg5MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhvU1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSG9TLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYkl5TkRCa2ZHY3dFTllFYmxlcVg2WXNESzZYTGRvc1VXQStnZW9yMnZNZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDE3NTc0MDQxLFwiY3VycmVudEluZGV4XCI6NzMsXCJkZXZpY2VJbmRleGVzXCI6WzAsNTQsNzIsNzNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
