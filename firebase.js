document.addEventListener('DOMContentLoaded', function () {
    const firebaseConfig = {
        apiKey: "AIzaSyCOzn-VmHm097BAKpu9jmxd5-Mi5YC2jkk",
        authDomain: "xps-20d52.firebaseapp.com",
        databaseURL: "https://xps-20d52-default-rtdb.firebaseio.com",
        projectId: "xps-20d52",
        storageBucket: "xps-20d52.firebasestorage.app",
        messagingSenderId: "224206736479",
        appId: "1:224206736479:web:e73d367478700dc6b25fea",
        measurementId: "G-ECMRWW61Y7"
    };

    firebase.initializeApp(firebaseConfig);
    let messagesRef = firebase.database().ref('Collected Data');

    const chatContent = document.getElementById('dataDisplay');
    const typingIndicator = document.createElement('p');
    typingIndicator.textContent = 'Typing...';
    typingIndicator.style.display = 'none';
    chatContent.appendChild(typingIndicator);

    document.getElementById('contactForm').addEventListener('submit', submitForm);

    function submitForm(e) {
        e.preventDefault();
        const message = getInputVal('message');
        if (message.trim()) {
            saveMessage(message);
            document.getElementById('contactForm').reset();
            simulateBotResponse(message); // Simulate bot response
        }
    }

    function getInputVal(id) {
        return document.getElementById(id).value;
    }

    function saveMessage(message) {
        const timestamp = new Date().toLocaleTimeString();
        let newMessageRef = messagesRef.push();
        newMessageRef.set({ message, timestamp });
    }

    function displayData() {
        messagesRef.on('value', function (snapshot) {
            chatContent.innerHTML = '';
            snapshot.forEach(function (childSnapshot) {
                let childData = childSnapshot.val();
                chatContent.innerHTML += `
                    <div class="message-bubble">
                        <p><strong>You:</strong> ${childData.message}</p>
                        <span class="timestamp">${childData.timestamp}</span>
                    </div>
                `;
            });
            chatContent.scrollTop = chatContent.scrollHeight;
        });
    }

    function simulateBotResponse(userMessage) {
        typingIndicator.style.display = 'block';
        setTimeout(() => {
            const botMessage = `You said: "${userMessage}"`; // Simple echo response
            saveMessage(`Bot: ${botMessage}`);
            typingIndicator.style.display = 'none';
        }, 1000);
    }

    displayData();
});