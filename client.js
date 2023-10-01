function addMessage(messageText) {
  const ul = document.getElementById("chat-messages");
  const li = document.createElement("li");
  li.textContent = messageText;
  ul.appendChild(li);

  sendMessageToServer(messageText);
}

function sendMessageToServer(messageText) {
  fetch('http://localhost:3000/send-message', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify({ message: messageText }), 
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Server response:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

document.getElementById("chat-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const inputMessage = document.getElementById("chat-input-msg");
  const messageText = inputMessage.value.trim();

  if (messageText !== "") {
    addMessage(messageText);
    inputMessage.value = "";
  }
});

  
  

  