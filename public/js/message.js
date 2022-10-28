const message = document.querySelector("#message-input").value.trim();

if (message) {
    const response = await fetch(`/api/message`, {
      method: 'POST',
      body: JSON.stringify({message}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/chatroom');
    } else {
      alert('no user messages');
    }
  };