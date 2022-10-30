// (function connect() {
//     let socket = io.connect('http://localhost:3040')
// })()


// const startPub = () => {
    
//     const pubnub = new PubNub ({

//     });
// }
// startPub();


const pubnub = new PubNub ({
 
});

function sendmessage(txt) {
    pubnub.publish({
        channel: "msg",
        message: {
            text:txt,
            mytime: 'My time is:' + new Date().toString()
        }
    })
}

pubnub.addListener({
    message: function(m){
        document.getElementById("pikachu").innerHTML+="<br>"+m.message.text;
    }
});

pubnub.subscribe({
    channels: ["msg"]
});

function sendinput(){
    sendmessage(document.getElementById("message").value);
    document.getElementById("message").value="";
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
        function(status, response) {
            for (let i = 0; i < response.channels.msg.length; i++){
                document.getElementById("pikachu").innerHTML+="<br>"+ response.channels.msg[i].uuid + ": " + response.
                channels.msg[i].message.text
            }
        //   console.log(status, response);
          console.log(response);
          console.log(response.channels.msg[0].message.text)
        //   console.log(response.)
        }
      );
