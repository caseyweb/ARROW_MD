const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "azQCTZya#Wwa9X4RDbyUlpyFA3N5foCpmgvh6hDx9FSneyslGNpc",
MONGODB: process.env.MONGODB || "enter mongodb url",
};
