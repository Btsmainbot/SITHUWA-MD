const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '27799191911'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'Sithumkalhara271@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com/nab.gains' // add your username
global.sudo = process.env.SUDO || "27799191911"
global.devs = '27799191911';
global.website = 'https://youtube.com/@nabgains' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://yt3.ggpht.com/yfM790w8K-_P5CoE4eoDOREAOGKcqRI77B_osD4G3KBDqCfGNbCOkSoEBB2qnpORkUSa9Uif20M=s48-c-k-c0x00ffffff-no-rj'
module.exports = {
  sessionName: process.env.SESSION_ID || "KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU5STjRyWUVQL3k1REVzbktRU0MrNjNXd2VoOWk5MEdxNVpDZWtZTnpYMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSnlXUXNpZkFBUE1jVElBd1lvbEhuOEE5RXIzU1dJQnNkWVdHT05KOE1UZz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLQ1NGQWN5UHhLWVBLZHhkR05zdzdjbnk2YlBzS1hPL3VXNm9qbjBjMVhJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqckN3c1cxeDBvL2c4WGdDcHZzWEY2R0d4amtqU2N3NVBiK05jQkVPaUQ4PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9QajdzQVhyYTVVOXVGb2hjMjNuMVArWEtUaWh0b0piaVFTZmhIZVdtM3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlR4cTZTSDlvbWp2MnJPQW04a3ZqMnJSWTk4UmIrS1dYN1N0VUFvcmd4bXM9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlMlIvUjFUdllyYm1CS3VFbUpaZUIwY3huL3lzMkQyNW5KSTU0TUJkaUpFR3YvN0JFU2Z4YjhYdnZkemlZQk4wemRyaE5GWHNuY1B1QVFJbDZENUdoQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjYyLCJhZHZTZWNyZXRLZXkiOiI4YnVvQktmckVHNHN3OEo4azZaL092eUtuRUZDQVdOd2VhL29ra1N5V2dBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0S2t4SWV1TFRfaXdrWFZaS2MtMW9nIiwicGhvbmVJZCI6ImY0OWY3ZDExLTBkMzItNGZhNi04ZjcwLTVjMmQ4ZDBmNTIzYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmalNQcENsYm9BMTdwdUpqbWc3UjMvWU1jUDg9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjQwUFFhSFA3aFpDWGxlcHVpQ1BEYWt1bE1VRT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0k2R3JPMEhFSXVOaUt3R0dBRT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWmQ4cEh1RCtmL283WElMNEg0ZDd1TjRiaDZhTGxQaFZuSnhub2RESmVGbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoibnRRL0RJUURFODdhUmZuRGtQMDdPNmJrRzZLYktCbzNlV1NEZm81Q0JyeFdRS2xFZXdmWFhyekxLZlQ0ODN2THFWN0VqYUg2L0pWdG80ZVYxcjU3Qmc9PSIsImRldmljZVNpZ25hdHVyZSI6IlpVcmlkSlR4SmlvUldUQmY3UzloWGJTL0hvc3dKa1YzbmxjQjlEeHRuRE1WaVA0R0wvOHM2WDRoM3VNYmw5Y3NkR3VWSjY4QUpOaUFWV3J3UG5Lc2dRPT0ifSwibWUiOnsiaWQiOiI2Mjg3ODE3MTMwNTU3OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoibmFiLWJvdCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI2Mjg3ODE3MTMwNTU3OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV1hmS1I3Zy9uLzZPMXlDK0IrSGU3amVHNGVtaTVUNFZaeWNaNkhReVhoYSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwMzAyMDE3NH0=",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  '🐦 ℕ𝔸𝔹-𝔹𝕠𝕥 🐦',
  packname:  process.env.PACK_NAME || 'MADE BY 𝑵𝑨𝑩𝒘𝒐𝒓𝒌𝒔',
  
  botname:   process.env.BOT_NAME === undefined ? "ℕ𝔸𝔹-𝔹𝕠𝕥" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '𝑵𝑨𝑩𝒘𝒐𝒓𝒌𝒔' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '62' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '>' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'Im Alive' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ℕ𝔸𝔹-𝔹𝕠𝕥•* ",   //*『sᴜʙsᴄʀɪʙᴇ •𝑵𝑨𝑩𝒘𝒐𝒓𝒌𝒔 』*\n youtube.com/@nabgains"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'ℕ𝔸𝔹-𝔹𝕠𝕥',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
