// const User = require("");
const PubNub = require('pubnub');

const pubnub = new PubNub({

  // we can use req.body.userid here?


 
  
});
// pubnub.getUserId();
// pubnub.setUserId();
// pubnub.setAuthKey();
// console.log(pubnub.getUserId());
// pubnub.getUserId(pubnub);
// getUUID();
// console.log(getUUID());
// console.log(pubnub);
// console.log(pubnub.setUserId());
// add listener
// makes app display messages as they are received


const listener = {
    status: (statusEvent) => {
        if (statusEvent.category === "PNConnectedCategory") {
            console.log("Connected");
        }
    },
    message: (messageEvent) => {
        showMessage(messageEvent.message.description);
    },
    presence: (presenceEvent) => {
        // handle presence
    }
};
pubnub.addListener(listener);


// publishes a message when publishMessage() is called
const publishMessage = async (message) => {
    const publishPayload = {
        channel : "hello_world",
        message: {
            title: "greeting",
            description: message
        },

        // storeInHistory: ,

        // sendByPost: ,

    };
    await pubnub.publish(publishPayload);
}


// subscribe to a channel to receive messages from it
pubnub.subscribe({
    channels: ["hello_world"],
});


// built-in package for reading from stdin
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.setPrompt("");
readline.prompt();
// publish after hitting return
readline.on('line', (message) => {
    publishMessage(message).then(() => {
        readline.prompt();
    });
});
const showMessage = (msg) => {
    console.log("message: " + msg);
}


// Publish message to channel. Do we want to say successful/unsuccessful?
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


// Store the published message for 10 hours
const storeMessage = async () => {
try {
  const result = await pubnub.publish({
      message: "hello!",
      channel: "my_channel",
      storeInHistory: true,
      ttl: 10,
  });
  console.log("message published w/ server response: ", response);
} catch (status) {
  console.log("publishing failed w/ status: ", status);
}
}

//  Add a channel
  const addChannel = async () => {
    try {
      const result = await pubnub.channelGroups.addChannels({
          channels: ["ch1", "ch2"],
          channelGroup: "myChannelGroup",
      });
      console.log("operation done!");
      result.channels.forEach(function (channel) {
          console.log(channel);
      });
  } catch (status) {
      console.log("operation failed w/ error:", status);
  }}


// List all channels
 const listChannels = async () => {
// assuming an intialized PubNub instance already exists
try {
  const result = await pubnub.channelGroups.listChannels({
      channelGroup: "myChannelGroup",
  });
  console.log("Listing push channels for the device");
  result.channels.forEach(function (channel) {
      console.log(channel);
  });
} catch (status) {
  console.log("Operation failed w/ error:", status);
}
 }


// Remove a channel
const removeChannel = async () => {
  // assuming an initialized PubNub instance already exists
try {
  const result = await pubnub.channelGroups.removeChannels({
      channels: ["son"],
      channelGroup: "family",
  });
  console.log("operation done!");
  result.channels.forEach(function (channel) {
      console.log(channel);
  });
} catch (status) {
  console.log("operation failed w/ error:", status);
}
}


const viewUsersInChannel = async () => {
try {
  const result = await pubnub.hereNow({
      channels: ["ch1"],
      channelGroups: ["cg1"],
      includeUUIDs: true,
      includeState: true,
  });
} catch (status) {
  console.log(status);
}
}


// Basic usage for fetch history
// pubnub.fetchMessages({
//   channels: Array<string>,
//   count: number,
//   includeMessageType: boolean,
//   includeUUID: boolean,
//   includeMeta: boolean,
//   includeMessageActions: boolean,
//   start: string,
//   end: string
// })


const displayLastMessage = async () => {
try {
  const result = await pubnub.fetchMessages({
      channels: ["ch1"],
      start: "15343325214676133",
      end: "15343325004275466",
      count: 1,
  });
} catch (status) {
  console.log(status);
}
}


const deleteMessage = async () => {
try {
  const result = await pubnub.deleteMessages({
      channel: "ch1",
      start: "15088506076921021",
      end: "15088532035597390",
  });
} catch (status) {
  console.log(status);
}
}


const viewLatestMessages = async () => {
try {
  const result = await pubnub.history({
      channel: "history_channel",
      count: 100, // how many items to fetch
      stringifiedTimeToken: true, // false is the default
  });
} catch (status) {
  console.log(status);
}
}


const viewMessageCounts = async () => {
try {
  const result = await pubnub.messageCounts({
      channels: ["chats.room1", "chats.room2"],
      channelTimetokens: ["15518041524300251"],
  });
} catch (status) {
  console.log(status);
}
}


const messageAction = async () => {
try {
  const result = await pubnub.addMessageAction({
      channel: "channel1",
      messageTimetoken: "15610547826970040",
      action: {
          type: "reaction",
          value: "smiley_face",
      },
  });
} catch (status) {
  console.log(status);
}
}


const removeMessageAction = async () => {
  try {
    const result = await pubnub.removeMessageAction({
        channel: "channel1",
        messageTimetoken: "15610547826970040",
        actionTimetoken: "15610547826970040",
    });
} catch (status) {
    console.log(status);
}
}

