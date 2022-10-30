const { User } = require("../models")

const PubNub = require('pubnub');
const pubnub = new PubNub({
    publishKey: "myPublishKey",
    subscribeKey: "mySubscribeKey",
    userId: "myUniqueUserId",
});



module.exports = {
    format_time: (timeStamp) => {
        return `${new Date(timeStamp).getMonth() + 1}/${new Date(timeStamp).getDate()}/${new Date(timeStamp).getFullYear()}`
    },
    whichUser: () => {
        return user_id === req.session.userID;
    },

    publishMessageToChannel: async () => {
        try {
            const result = await pubnub.publish({
                message: {
                    such: "object",
                },
                channel: "",
                sendByPost: false, // true to send via post
                storeInHistory: false, //override default storage options
                meta: {
                    cool: "meta",
                }, // publish extra meta with the request
            });
        } catch (status) {
            console.log(status);
        }
    }


}