const spawnInput = document.getElementById('newThead')
const commentContainerEl = document.getElementById("newThreadContainer")
const submitcommentBtn = document.getElementById('submitThread')
const channel_id = document.getElementById("chName").dataset.channelid;
const user_id = document.getElementById('newThead').dataset.userid
spawnInput.addEventListener('click', function () {
    console.log("clicking button")
    commentContainerEl.style.display = "block"
})

const addThread = async function () {
    const text_content = document.querySelector("#newThreadTopic").value.trim();
    await fetch(`/api/thread`, {
        method: 'POST',
        body: JSON.stringify({
            text_content, user_id, channel_id,

        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    document.location.reload();
};

submitcommentBtn.addEventListener('click', addThread)