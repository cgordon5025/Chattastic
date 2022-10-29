// (function connect() {
//     let socket = io.connect('http://localhost:3040')
// })()


const pubnub = new PubNub ({
    publishKey : "pub-c-1ec1a0aa-1745-4f40-bf2f-45021d89be5b",
    subscribeKey: "sub-c-2032760e-5bfe-4054-81dd-5d9ea84edec6",
    userId: "myUserId"
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

