const seedUsers = require('./user-seeds');
const seedChannels = require('./channel-seeds');
const seedThreads = require('./thread-seed')
const seedMessages = require('./message-seed');




const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedChannels();
    console.log('\n----- CHANNELS SEEDED -----\n')
    await seedThreads();
    console.log('\n----- THREADS SEEDED -----\n')

    await seedMessages()
    console.log('\n----- MESSAGES SEEDED -----\n');

    process.exit(0);
};

seedAll();



