const spawnInput = document.getElementById('newCommentBtn')
const commentContainerEl = document.getElementById("commentContainer")
const submitcommentBtn = document.getElementById('submitComment')

spawnInput.addEventListener('click', function () {
  console.log("clicking button")
  commentContainerEl.style.display = "block"
})

const message = document.querySelector("#newComment").value.trim();
const addComment = async function () {
  if (message) {
    const response = await fetch(`/api/message`, {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload;
    } else {
      alert('no user messages');
    }
  }
};

submitcommentBtn.addEventListener('click', addComment)