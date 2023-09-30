const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID || 'ZEROTWO=hiEU3aBR#2v3j4n5p-BrJdStbskybWUd01Q0l2YOzvrTPHok2c2g',
POSTGRESQL_URL: process.env.POSTGRESQL_URL || 'postgres://zerotwo_f044_user:Y5aimuxQ1NxZN9YspliPDfyKLza3sL76@dpg-ckcb2rect0pc73av4t70-a.oregon-postgres.render.com/zerotwo_f044',
LANG: process.env.BOT_LANG || 'EN' ,
ANTI_BAD: process.env.ANTI_BAD || 'false',
MAX_SIZE: process.env.MAX_SIZE || 200,
ONLY_GROUP: process.env.ONLY_GROUP || 'false',
ANTI_LINK: process.env.ANTI_LINK || 'false' ,
ANTI_BOT: process.env.ANTI_BOT || 'false',
ALIVE: process.env.ALIVE || `default`,
FOOTER: process.env.FOOTER ||  '©𝚉𝙴𝚁𝙾-𝚃𝚆𝙾 𝙼𝙳',
LOGO: process.env.LOGO || `https://github.com/vihangayt0/ZeroTwo-Uploads/blob/main/ZERO-TWO.png?raw=true` 
};
