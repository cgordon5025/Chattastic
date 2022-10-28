// const User = require("");
const PubNub = require('pubnub');
const pubnub = new PubNub({
  publishKey: "pub-c-1ec1a0aa-1745-4f40-bf2f-45021d89be5b",
  subscribeKey: "sub-c-2032760e-5bfe-4054-81dd-5d9ea84edec6",
  userId: "myUniqueUserId",

  // authKey: "myAuthKey",
  
});
// pubnub.getUserId();
// pubnub.setUserId();
// pubnub.setAuthKey();
console.log(pubnub.getUserId());
// pubnub.getUserId(pubnub);
// getUUID();
// console.log(getUUID());
// console.log(pubnub);

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

pubnub.addListener({
    // Messages
    message: function (m) {
      const channelName = m.channel; // Channel on which the message was published
      const channelGroup = m.subscription; // Channel group or wildcard subscription match (if exists)
      const pubTT = m.timetoken; // Publish timetoken
      const msg = m.message; // Message payload
      const publisher = m.publisher; // Message publisher
    },
    // Presence
    presence: function (p) {
      const action = p.action; // Can be join, leave, state-change, or timeout
      const channelName = p.channel; // Channel to which the message belongs
      const occupancy = p.occupancy; // Number of users subscribed to the channel
      const state = p.state; // User state
      const channelGroup = p.subscription; //  Channel group or wildcard subscription match, if any
      const publishTime = p.timestamp; // Publish timetoken
      const timetoken = p.timetoken; // Current timetoken
      const uuid = p.uuid; // UUIDs of users who are subscribed to the channel
    },
    // Signals
    signal: function (s) {
      const channelName = s.channel; // Channel to which the signal belongs
      const channelGroup = s.subscription; // Channel group or wildcard subscription match, if any
      const pubTT = s.timetoken; // Publish timetoken
      const msg = s.message; // Payload
      const publisher = s.publisher; // Message publisher
    },
    // Objects
    objects: (objectEvent) => {
      const channel = objectEvent.channel; // Channel to which the event belongs
      const channelGroup = objectEvent.subscription; // Channel group
      const timetoken = objectEvent.timetoken; // Event timetoken
      const publisher = objectEvent.publisher; // UUID that made the call
      const event = objectEvent.event; // Name of the event that occurred
      const type = objectEvent.type; // Type of the event that occurred
      const data = objectEvent.data; // Data from the event that occurred
    },
    // Message Actions
    messageAction: function (ma) {
      const channelName = ma.channel; // Channel to which the message belongs
      const publisher = ma.publisher; // Message publisher
      const event = ma.event; // Message action added or removed
      const type = ma.data.type; // Message action type
      const value = ma.data.value; // Message action value
      const messageTimetoken = ma.data.messageTimetoken; // Timetoken of the original message
      const actionTimetoken = ma.data.actionTimetoken; // Timetoken of the message action
    },
    // File actions
    file: function (event) {
      const channelName = event.channel; // Channel to which the file belongs
      const channelGroup = event.subscription; // Channel group or wildcard subscription match (if exists)
      const publisher = event.publisher; // File publisher
      const timetoken = event.timetoken; // Event timetoken
      const message = event.message; // Optional message attached to the file
      const fileId = event.file.id; // File unique id
      const fileName = event.file.name;// File name
      const fileUrl = event.file.url; // File direct URL
    },
    status: function (s) {
      const affectedChannelGroups = s.affectedChannelGroups; // Array of channel groups affected in the operation
      const affectedChannels = s.affectedChannels; // Array of channels affected in the operation
      const category = s.category; // Returns PNConnectedCategory
      const operation = s.operation; // Returns PNSubscribeOperation
      const lastTimetoken = s.lastTimetoken; // Last timetoken used in the subscribe request (type long)
      const currentTimetoken = s.currentTimetoken; /* Current timetoken fetched in subscribe response,
                                                  * to be used in the next request (type long) */
      const subscribedChannels = s.subscribedChannels; // Array of all currently subscribed channels
    },
  });

