const submitBtn = document.getElementById('submitAnnouce');
const userID = document.getElementById('user-id').value;
console.log(userID)
const submitPostHandler = async function () {
    console.log('makign a post');

    const title = document.getElementById('newTitle').value;
    const text = document.getElementById('newContent').value
    await fetch('/api/messages', {
        method: 'POST',
        body: JSON.stringify({
            title, text,
            user_id: 1
        }),
        headers: { 'Content-Type': 'application/json' }
    })
    // console.log(body)

    console.log('posting')

    // document.location.replace('/annoucements')
}

submitBtn.addEventListener('click', submitPostHandler)