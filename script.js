
function openStartMenu() {
  const startMenu = document.getElementById("start-menu");
  startMenu.style.display = startMenu.style.display === "none" ? "block" : "none";
}

function closeWindow() {
  const window = document.getElementById("window");
  window.style.display = "none";
}

// Open the start menu by default as hidden
window.onload = () => {
  document.getElementById("start-menu").style.display = "none";
};

let isDragging = false;
let offset = { x: 0, y: 0 };

function startDrag(event) {
  isDragging = true;
  offset.x = event.clientX - event.target.closest('.window').getBoundingClientRect().left;
  offset.y = event.clientY - event.target.closest('.window').getBoundingClientRect().top;

  document.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', stopDrag);
}

function drag(event) {
  if (!isDragging) return;

  const windowElement = event.target.closest('.window');
  windowElement.style.left = `${event.clientX - offset.x}px`;
  windowElement.style.top = `${event.clientY - offset.y}px`;
}

function stopDrag() {
  isDragging = false;
  document.removeEventListener('mousemove', drag);
  document.removeEventListener('mouseup', stopDrag);
}

function closeWindow() {
  const windowElement = document.getElementById('window');
  windowElement.style.display = 'none'; // Hides the window
}

function openStartMenu() {
  const startMenu = document.getElementById('start-menu');
  startMenu.style.display = startMenu.style.display === 'block' ? 'none' : 'block'; // Toggle start menu visibility
}

let isDraggingChat = false;
let chatOffset = { x: 0, y: 0 };

function openMyDocuments() {
    const myDocumentsWindow = document.getElementById('myDocuments');
    myDocumentsWindow.style.display = 'block'; // Show My Documents window
  }
  
  function closeMyDocuments() {
    const myDocumentsWindow = document.getElementById('myDocuments');
    myDocumentsWindow.style.display = 'none'; // Hide My Documents window
  }
  
  function openImage(imageSrc) {
    const imageWindow = window.open("", "Image Viewer", "width=600,height=400");
    imageWindow.document.write(`
      <html>
        <head>
          <title>Image Viewer</title>
        </head>
        <body style="text-align:center;">
          <img src="${imageSrc}" style="max-width:100%;max-height:100%;">
          <br>
          <button onclick="window.close()">Close</button>
        </body>
      </html>
    `);
  }

  function openRecycleBin() {
    const recycleBinWindow = document.getElementById('recycleBin');
    recycleBinWindow.style.display = 'block'; // Show Recycle Bin window
}

function closeRecycleBin() {
    const recycleBinWindow = document.getElementById('recycleBin');
    recycleBinWindow.style.display = 'none'; // Hide Recycle Bin window
}
function openImage(imageSrc) {
    const imageWindow = window.open("", "Image Viewer", "width=600,height=400");
    imageWindow.document.write(`
        <html>
            <head>
                <title>Image Viewer</title>
            </head>
            <body style="text-align:center;">
                <img src="${imageSrc}" style="max-width:100%;max-height:100%;">
                <br>
                <button onclick="window.close()">Close</button>
            </body>
        </html>
    `);
}

function openChat() {
    document.getElementById('chatWindow').style.display = 'block';
  }
  
  function closeChat() {
    document.getElementById('chatWindow').style.display = 'none';
  }
  
  function sendMessage() {
    const inputField = document.getElementById('userInput');
    const chatContent = document.getElementById('chatContent');
  
    if (inputField.value.trim() !== '') {
      const userMessage = document.createElement('p');
      userMessage.textContent = `User: ${inputField.value}`;
      chatContent.appendChild(userMessage);
  
      // Show thinking bubble before sending the bot response
      const thinkingBubble = document.createElement('div');
      thinkingBubble.classList.add('thinking-bubble');
      thinkingBubble.textContent = "Thinking...";
      chatContent.appendChild(thinkingBubble);
      chatContent.scrollTop = chatContent.scrollHeight; // Auto-scroll to the bottom
  
      // Delayed bot response
      setTimeout(() => {
        thinkingBubble.remove(); // Remove the thinking bubble
        const botMessage = document.createElement('p');
        botMessage.textContent = `Bot: ${getBotResponse(inputField.value)}`;
        chatContent.appendChild(botMessage);
        chatContent.scrollTop = chatContent.scrollHeight; // Auto-scroll to the bottom
      }, 1500); // 1.5-second delay
  
      inputField.value = ''; // Clear the input field
    }
  }
  
  // Enhanced response logic
  function getBotResponse(userInput) {
    const input = userInput.toLowerCase();
  
    if (input.includes('hello') || input.includes('hi')) {
      return "Hello! How can I assist you today?";
    } else if (input.includes('how are you')) {
      return "I'm just a program, but thanks for asking! How can I help you?";
    } else if (input.includes('your name') || input.includes('who are you')) {
      return "I'm your friendly chatbot. You can call me Chatbot!";
    } else if (input.includes('help')) {
      return "I can assist you with various tasks. Just ask!";
    } else if (input.includes('bye')) {
      return "Goodbye! Have a great day!";
    } else if (input.includes('weather')) {
      return "I'm not able to check the weather right now, but it's always a good idea to have an umbrella!";
    } else if (input.includes('joke')) {
      return "Why did the scarecrow win an award? Because he was outstanding in his field!";
    } else if (input.includes('favorite color')) {
      return "I think I’d like blue! What about you?";
    } else {
      return "I’m still learning, but I can help with many things! Try asking me about the weather, jokes, or just say hi!";
    }
  }

// Open Music Popup
function openMusic() {
    document.getElementById("musicPopup").style.display = "block";
  }
  
  // Close Music Popup
  function closeMusicPopup() {
    document.getElementById("musicPopup").style.display = "none";
  }
  
  // Play Music Function
  let currentAudio = null;
  
  function playMusic(song) {
    if (currentAudio) {
      currentAudio.pause();
    }
    currentAudio = new Audio(song);
    currentAudio.play();
  }
  
  // Additional existing script code
  function openStartMenu() {
    const startMenu = document.getElementById("start-menu");
    startMenu.style.display = startMenu.style.display === "none" ? "block" : "none";
  }
  
  // Close Window Function
  function closeWindow() {
    const window = document.getElementById("window");
    window.style.display = "none";
  }
  
  window.onload = () => {
    document.getElementById("start-menu").style.display = "none";
  };




  let videoIndex = 0;
const videos = ['https://cdn.glitch.global/8d466461-796e-4a57-ab88-e576d330cd76/aye.mp4?v=1733722746578', 'https://cdn.glitch.global/8d466461-796e-4a57-ab88-e576d330cd76/sunset.mp4?v=1733722753335', 'https://cdn.glitch.me/8d466461-796e-4a57-ab88-e576d330cd76/film-background_1308_1.mp4?v=1733723263558'];

function openMediaPlayer() {
    document.getElementById('mediaPlayerPopup').style.display = 'block';
    loadVideo(videoIndex);
}

function closeMediaPlayer() {
    document.getElementById('mediaPlayerPopup').style.display = 'none';
}

function loadVideo(index) {
    const videoElement = document.getElementById('videoElement');
    videoElement.src = videos[index];
    videoElement.load();
    videoElement.play();
}

function prevVideo() {
    videoIndex = (videoIndex - 1 + videos.length) % videos.length;
    loadVideo(videoIndex);
}

function nextVideo() {
    videoIndex = (videoIndex + 1) % videos.length;
    loadVideo(videoIndex);
}







  
  
  
  