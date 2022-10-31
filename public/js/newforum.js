const submitBtn = document.getElementById('submitForum');
const spawnInput = document.getElementById('newForum')
const newForumContainer = document.getElementById('newForumContainer')
const user_id = document.getElementById('newForumContainer').dataset.userid
spawnInput.addEventListener('click', function () {
    newForumContainer.style.display = "block"
})
const submitForum = async function () {
    const title = document.getElementById('newForumTitle').value;
    console.log(title)
    // const response = 
    await fetch('/api/channel', {
        method: 'POST',
        body: JSON.stringify({ title, user_id }),
        headers: { 'Content-Type': 'application/json' }
    })
    console.log('posting')

    document.location.reload()
}

submitBtn.addEventListener('click', submitForum)