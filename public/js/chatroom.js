// (function connect() {
//     let socket = io.connect('http://localhost:3040')
// })()


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

