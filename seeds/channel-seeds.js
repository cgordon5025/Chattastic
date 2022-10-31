const { Channel } = require('../models');

const channelData = [
    {
        title: "General",
     
    },
    {
        title: "Cooking",
    
    },
    {
        title:"Pets and Activities",
  
    }
];

const seedChannels = () => Channel.bulkCreate(channelData, {
    individualHooks: true,
});

module.exports = seedChannels