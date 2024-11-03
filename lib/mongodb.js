const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'ALIVE_IMG', value: 'https://files.catbox.moe/h5ddpq.jpg' },
    { key: 'ALIVE_MSG', value: 'ʜᴇʟʟᴏ , ɪ ᴀᴍ ᴀʟɪᴠᴇ ɴᴏᴡ ɪᴍ sɪʟᴇɴᴛ-sᴏʙx-ᴍᴅ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ sɪʟᴇɴᴛ ʟᴏᴠᴇʀ ⁴³²' },
    { key: 'PREFIX', value: '.' },
    { key: 'AUTO_READ_STATUS', value: 'true' },
    { key: 'MODE', value: 'public' },
    { key: 'AUTO_VOICE', value: 'true' },
    { key: 'AUTO_STICKER', value: 'true' },
    { key: 'AUTO_REPLY', value: 'true' },
    { key: 'ANTI_LINK', value: 'true' },
    { key: 'ANTI_BAD', value: 'true' },
    { key: 'RECORDING', value: 'true' },
    { key: 'READ_CMD', value: 'true' },
    { key: 'ANTI_DELETE', value: 'true' },
    { key: 'ALLWAYS_OFFLINE', value: 'true' },
    { key: 'AUTO_REACT', value: 'true' },

];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MONGODB CONNECTED SUCCESFULLY ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ CREATED DEFAULT ENV VAR: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
