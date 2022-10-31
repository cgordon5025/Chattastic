const spawnInput = document.getElementById('newCommentBtn')
const commentContainerEl = document.getElementById("commentContainer")
const submitcommentBtn = document.getElementById('submitComment')
const channel_id = document.getElementById("chName").dataset.channelid;
const thread_id = document.getElementById("threadInfo").dataset.threadid
const user_id = document.getElementById('newCommentBtn').dataset.userid
spawnInput.addEventListener('click', function () {
  console.log("clicking button")
  commentContainerEl.style.display = "block"
})

const addComment = async function () {
  const text = document.querySelector("#newComment").value.trim();
  await fetch(`/api/messages`, {
    method: 'POST',
    body: JSON.stringify({
      text, user_id, channel_id, thread_id

    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  document.location.reload();
};

submitcommentBtn.addEventListener('click', addComment)