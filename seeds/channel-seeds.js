const { Channel } = require('../models');

const channelData = [
    {
        title: "General",
     
    },
    {
        title: "Lost Boiz",
    
    },
    {
        title:"Other General",
  
    }
];

const seedChannels = () => Channel.bulkCreate(channelData, {
    individualHooks: true,
});

module.exports = seedChannels