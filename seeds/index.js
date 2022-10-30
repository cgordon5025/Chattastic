const seedUsers = require('./user-seeds');
const seedMessages = require('./message-seed');
const seedChannelTags = require('./channel-tag-seeds')
// const seedComments = require('./comment-seeds');

const seedChannels = require('./channel-seeds');



const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');


    // await seedComments();
    // console.log('\n----- COMMENTS SEEDED -----\n');


    await seedChannels();
    console.log('\n----- CHANNELS SEEDED -----\n')

    await seedMessages()
    console.log('\n----- MESSAGES SEEDED -----\n');
    await seedChannelTags()
    console.log('\n----- channel tags SEEDED -----\n');
    process.exit(0);
};

seedAll();



