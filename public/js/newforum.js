const submitBtn = document.getElementById('submitForum');
const submitForum = async function () {
    const title = document.getElementById('newForumTitle').value;
    console.log(title)
    // const response = 
    await fetch('/api/channel', {
        method: 'POST',
        body: JSON.stringify({ title }),
        headers: { 'Content-Type': 'application/json' }
    })
    console.log('posting')

    // document.location.replace('/')
}

submitBtn.addEventListener('click', submitForum)