const { User, Channel } = require("../models")
// const messageFormHandler = async function(event) {
//   event.preventDefault
// }

const publishMessageToChannel = async (event) => {
  event.preventDefault  
  try {

    const postId = document.querySelector('input[name="post-id"]').value;
    const body = document.querySelector('textarea[name="comment-body"]').value;
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