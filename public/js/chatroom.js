// (function connect() {
//     let socket = io.connect('http://localhost:3040')
// })()


// const startPub = () => {

//     const pubnub = new PubNub ({

//     });
// }
// startPub();


const pubnub = new PubNub({
    publishKey: "pub-c-1ec1a0aa-1745-4f40-bf2f-45021d89be5b",
    subscribeKey: "sub-c-2032760e-5bfe-4054-81dd-5d9ea84edec6",
    userId: document.getElementById("message").dataset.username
});

function sendmessage(txt) {
    pubnub.publish({
        channel: "msg",
        message: {
            text: txt,
            mytime: 'My time is:' + new Date().toString()
        }
    })
}

pubnub.addListener({
    message: function (m) {
        document.getElementById("pikachu").innerHTML += "<div class= 'chatContainer align-self-end'" + "<br>" + "<span class=  'myUsername'>" + m.publisher + "</span>" + " : " + "<span class= 'myText'>" + m.message.text + "</span> </div>"
        console.log(m);
    },
});

pubnub.subscribe({
    channels: ["msg"]
});

function sendinput() {
    sendmessage(document.getElementById("message").value);
    document.getElementById("message").value = "";
    console.log("button is pressed");
}

// Basic usage for fetch history
// function fetchMessages() {
// pubnub.fetchMessages({
//     channels: ["msg"],
//   //   count: number,
//     // includeMessageType: true,
//     // includeUUID: false,
//     // includeMeta: false,
//     // includeMessageActions: true,
//     // start: "",
//     // end: ""

//  } )}
// fetchMessages();
// const viewLatestMessages = async () => {
// try {
//   const result = await pubnub.history({
//       channel: "msg",
//       count: 100, // how many items to fetch
//       stringifiedTimeToken: true, // false is the default
//   });

// } catch (status) {
//   console.log(status);
// }
// }

// viewLatestMessages();

// const displayLastMessage = async () => {
//     try {
//       const result = await pubnub.fetchMessages({
//           channels: ["msg"],

//           count: 100,
//       });
//     } catch (status) {
//       console.log(status);
// //     }
//     }
pubnub.fetchMessages(
    {
        channels: ["msg"],

        count: 50 // default/max is 25 messages for multiple channels (up to 500)
    },
    function (status, response) {
        for (let i = 0; i < response.channels.msg.length; i++) {
            if (response.channels.msg[i].uuid == document.getElementById("message").dataset.username) {
                document.getElementById("pikachu").innerHTML += "<div class= 'chatContainer align-self-end'" + "<br>" + "<span class=  'myUsername'>" + response.channels.msg[i].uuid + "</span>" + " : " + "<span class= 'myText'>" + response.channels.msg[i].message.text + "</span> </div>"
            } else {
                document.getElementById("pikachu").innerHTML += "<div class= 'chatContainer'" + "<br>" + "<span class=  'theirUsername'>" + response.channels.msg[i].uuid + "</span>" + " : " + "<span class= 'theirText'>" + response.channels.msg[i].message.text + "</span> </div>"
            }
        }
        //   console.log(status, response);
        console.log(response);
        console.log(response.channels.msg[i].uuid);
        console.log(response.channels.msg[i].message.text);
    }
);
