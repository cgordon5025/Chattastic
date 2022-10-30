const { ChannelTag } = require('../models');

const tagData = [
    {
        user_id: 1,
        channel_id: 1,
    },
    {
        user_id: 2,
        channel_id: 1,
    },
    {
        user_id: 1,
        channel_id: 2,
    },
    {
        user_id: 3,
        channel_id: 1,
    },
    {
        user_id: 2,
        channel_id: 3,
    },
    {
        user_id: 3,
        channel_id: 3,
    }
]

const seedChannelTags = () => ChannelTag.bulkCreate(tagData)

module.exports = seedChannelTags;
