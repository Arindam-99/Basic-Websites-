document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather input data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const country = document.getElementById('country').value;
    
    const fruits = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach((checkbox) => {
        fruits.push(checkbox.value);
    });

    const comments = document.getElementById('comments').value;

    // Display the output
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <h2>Submitted Information</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Favorite Fruits:</strong> ${fruits.join(', ')}</p>
        <p><strong>Comments:</strong> ${comments}</p>
    `;
});


// let btn = document.querySelector("#btn");
// let content = document.querySelector("#content");
// let voice = document.querySelector("#voice");

// let femaleVoice;

// // Function to load voices
// function loadVoices() {
//     let voices = window.speechSynthesis.getVoices();
//     femaleVoice = voices.find(v => v.lang === "hi-GB" && v.name.toLowerCase().includes("female")); // Adjust the condition if needed
// }

// // Call loadVoices when voices are loaded
// window.speechSynthesis.onvoiceschanged = loadVoices;

// function speak(text) {
//     let text_speak = new SpeechSynthesisUtterance(text);
//     text_speak.rate = 1;
//     text_speak.pitch = 1;
//     text_speak.volume = 1;
//     text_speak.lang = "hi-GB";
//     text_speak.voice = femaleVoice; // Set to the female voice
//     window.speechSynthesis.speak(text_speak);
// }

// function wishMe() {
//     let day = new Date();
//     let hours = day.getHours();
//     if (hours >= 0 && hours < 12) {
//         speak("Good Morning Sir, How may i help you");
//     }else if (hours >= 12 && hours < 16) {
//         speak("Good Afternoon Sir, How may i help you");
//     }
//     else{
//         speak("Good night sir,How may i help you")
//     }
// }

// window.addEventListener('load', () => {
//     wishMe();
// });

// let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// let recognition = new speechRecognition();

// recognition.onresult = (event) => {
//     let currentIndex = event.resultIndex;
//     let transcript = event.results[currentIndex][0].transcript;
//     content.innerText = transcript;
//     takeCommand(transcript.toLowerCase());
// };

// btn.addEventListener("click", () => {
//     recognition.start();
//     voice.style.display = "block";
//     btn.style.display = "none";
// });

// function takeCommand(message) {
//     voice.style.display = "none";
//     btn.style.display = "flex";
    
//     if (message.includes("hello") || message.includes("hey")) {
//         speak("Hello Arindam Sir, what can I help you with?");
//     } else if (message.includes("who are you")) {
//         speak("I am a virtual assistant, created by Arindam Sir.");
//     } else if (message.includes("open youtube")) {
//         speak("Opening YouTube...");
//         window.open("https://youtube.com/", "_blank");
//     } else if (message.includes("open google")) {
//         speak("Opening Google...");
//         window.open("https://google.com/", "_blank");
//     } else if (message.includes("open facebook")) {
//         speak("Opening Facebook...");
//         window.open("https://facebook.com/", "_blank");
//     } else if (message.includes("open instagram")) {
//         speak("Opening Instagram...");
//         window.open("https://instagram.com/", "_blank");
//     } else if (message.includes("open calculator")) {
//         speak("Opening calculator...");
//         window.open("calculator://");
//     } else if (message.includes("open whatsapp")) {
//         speak("Opening WhatsApp...");
//         window.open("whatsapp://");
//     } else if (message.includes("time")) {
//         let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
//         speak(time);
//     } else if (message.includes("date")) {
//         let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" });
//         speak(date);
//     } else {
//         let finalText = "This is what I found on the internet regarding " + message.replace("friday", "");
//         speak(finalText);
//         window.open(`https://www.google.com/search?q=${message.replace("friday", "")}`, "_blank");
//     }
// }
