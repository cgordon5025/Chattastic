const pubnub = new PubNub({

});

const thread = document.getElementById('channel');
const publishButton = document.getElementById('publish-button');
publishButton.addEventListener('click', () => {
    pubnub.publish({
        channel : thread.value,
        message: {
            mytime: 'My time is: ' + new Date().toString()
        }
    });
});

const newThread = document.getElementById('new-to-group');
const addToGroup = document.getElementById('add-to-group');
addToGroup.addEventListener('click', () => {
    pubnub.channelGroups.addChannels({
        channels: [newThread.value],
        channelGroup: 'my-group'
    });
});

pubnub.subscribe({
    channels: ['channel-a.*'],    // Wildcard subscribe
    channelGroups: ['my-group'] // Channel group subscribe
});

pubnub.addListener({
    message: function(event) {
        let newPEl = document.createElement('p');
        newPEl.appendChild(document.createTextNode(event.message.mytime));
        document.body.appendChild(newPEl);
    }
});