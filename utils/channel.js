const { User, Channel } = require("../models")

const publishMessageToChannel = async () => {
    try {
      const result = await pubnub.publish({
          message: {
              such: "object",
          },
          channel: "my_channel",
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



module.exports = {


}