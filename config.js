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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_25_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjEwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg3LFxuICAgICAgICA1NixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDMwLFxuICAgICAgICAyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDk4LFxuICAgICAgICA4OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTksXG4gICAgICAgIDY0LFxuICAgICAgICAzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDQyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTksXG4gICAgICAgIDgzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDk1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA1NixcbiAgICAgICAgMzYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjI5LFxuICAgICAgICA2NixcbiAgICAgICAgODUsXG4gICAgICAgIDcsXG4gICAgICAgIDExMixcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUyLFxuICAgICAgICA0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjEwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDMyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxLFxuICAgICAgICA2MixcbiAgICAgICAgNzIsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA3MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ3LFxuICAgICAgICA2NCxcbiAgICAgICAgNjksXG4gICAgICAgIDY4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDgzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTkzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICAzNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjUwLFxuICAgICAgICA5MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDksXG4gICAgICAgIDI1LFxuICAgICAgICAxODksXG4gICAgICAgIDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2LFxuICAgICAgICAzMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDcsXG4gICAgICAgIDI5LFxuICAgICAgICAxODYsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM1LFxuICAgICAgICA1MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM2LFxuICAgICAgICAxODEsXG4gICAgICAgIDY3LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjksXG4gICAgICAgIDk0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibHBZZ3VvcUkwMGwxWHVmT2ExVWhsa3pPblR0aDNZTTNVUFV4WjZOSFozdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSnlub1FBcHJRdW05TXBnN0l4QXI4UVwiLFxuICBcInBob25lSWRcIjogXCIzMGJjZTdkMi0xZjg4LTQ2YjEtOWNmZC00ZTI1YTlkNGE2OTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAsXG4gICAgICA2MCxcbiAgICAgIDEzNixcbiAgICAgIDMxLFxuICAgICAgOTMsXG4gICAgICAyMzQsXG4gICAgICA4OCxcbiAgICAgIDM5LFxuICAgICAgMTk3LFxuICAgICAgMjIxLFxuICAgICAgNTgsXG4gICAgICAyMjcsXG4gICAgICAxODEsXG4gICAgICAxOTYsXG4gICAgICAyMTcsXG4gICAgICAxNjQsXG4gICAgICAxMjcsXG4gICAgICAxMDAsXG4gICAgICA4MSxcbiAgICAgIDgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcwLFxuICAgICAgMTY3LFxuICAgICAgMjA3LFxuICAgICAgMTU2LFxuICAgICAgMTg1LFxuICAgICAgNTksXG4gICAgICAyMzQsXG4gICAgICA1LFxuICAgICAgNzksXG4gICAgICAyNDYsXG4gICAgICA2MCxcbiAgICAgIDUwLFxuICAgICAgMTM5LFxuICAgICAgMTU2LFxuICAgICAgMTYyLFxuICAgICAgMjE1LFxuICAgICAgMTY1LFxuICAgICAgMjIzLFxuICAgICAgMjM4LFxuICAgICAgMTM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJXM1BLU0RQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNDIwNjUzODY1MjI6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFMSUNJQVwiLFxuICAgIFwibGlkXCI6IFwiOTk1MDYzNTYwMDI5MzA6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOemNnUE1ERUtqOGw3a0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlN2U3JscGV2NFplRGRUMzVQcHN5K041TVFyN2xjT3RPREs1Q1pZcGpVaTA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMUtNUS80em9lamUwY25PQURjNTRPN2F4bENEbjY4Qkp6bXFpeUw1NXd3SXR2N2lrQ3pBNHRPQ29wZlZXYlNRb05TcTVjQSt5bFpna3N5cUFkNUpXREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicGRtdGpiOThWOGxBblYyMDlWY0xMM0xZTlRpN0w0SW8vRFhXK1E1T2VXZkhackhabGpEN2hlaXNOdnQrVnllenBOeEc2MXhNZE1JZHUwSkxHZU4yQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjQyMDY1Mzg2NTIyOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA1NDMxNDgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEUTJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURRMi5qc29uIjogIntcImtleURhdGFcIjpcIk5pdS85VWdqODdUQnQwVjFtSjZEZkFibmc4K0xWd2xnYndSZ1FYaGU4cGM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA0NjQ5MDcxNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMwNTQzMTUyNDk5XCJ9Igp9"  // PUT your SESSION_ID 


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
