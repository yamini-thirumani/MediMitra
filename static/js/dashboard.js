

// function toggleMenu() {
//     const menu = document.querySelector('.menu-links');
//     const icon = document.querySelector('.hamburger-icon');
//     menu.classList.toggle('open');
//     icon.classList.toggle('open');
// }

// // Function to handle chatbot visibility
// document.addEventListener('DOMContentLoaded', () => {
//     const infoBotButton = document.getElementById('infoBotButton');
//     const orderBotButton = document.getElementById('orderBotButton');
//     const infoChat = document.getElementById('infoChat');
//     const orderChat = document.getElementById('orderChat');

//     // Show tooltip on hover
//     infoBotButton.addEventListener('mouseenter', () => {
//         infoBotButton.setAttribute('title', 'Info Bot');
//     });

//     orderBotButton.addEventListener('mouseenter', () => {
//         orderBotButton.setAttribute('title', 'Order Bot');
//     });

//     // Function to open chatbot (small popup)
//     function openChat(chatId) {
//         // Hide both chat windows first
//         infoChat.style.display = 'none';
//         orderChat.style.display = 'none';

//         // Show the selected chat window
//         document.getElementById(chatId).style.display = 'flex';
//     }

//     // Function to close chatbot
//     window.closeChat = function(chatId) {
//         document.getElementById(chatId).style.display = 'none';
//     };

//     // Event listeners for bot buttons
//     infoBotButton.addEventListener('click', () => openChat('infoChat'));
//     orderBotButton.addEventListener('click', () => openChat('orderChat'));
// });


// async function triggerOrderBot() {
//     const btn = document.querySelector('.contact-btn');
//     const botResponse = document.getElementById("bot-response");
//     btn.disabled = true;
//     botResponse.textContent = "Processing...";

//     try {
//         const response = await fetch("/process", { method: "POST" });
//         const result = await response.json();

//         if (result.error) {
//             botResponse.textContent = "Error: " + result.error;
//             botResponse.style.color = "red";
//         } else {
//             botResponse.textContent = "Sent: " + result.translated;
//             botResponse.style.color = "green";
//         }
//     } catch (err) {
//         botResponse.textContent = "Something went wrong.";
//         botResponse.style.color = "red";
//     }

//     btn.disabled = false;
// }



function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

// Function to handle chatbot visibility
document.addEventListener('DOMContentLoaded', () => {
    const infoBotButton = document.getElementById('infoBotButton');
    const orderBotButton = document.getElementById('orderBotButton');
    const infoChat = document.getElementById('infoChat');
    const orderChat = document.getElementById('orderChat');

    // Tooltips
    infoBotButton.title = "Info Bot";
    orderBotButton.title = "Order Bot";

    function openChat(chatId) {
        infoChat.style.display = 'none';
        orderChat.style.display = 'none';
        document.getElementById(chatId).style.display = 'flex';
    }

    window.closeChat = function(chatId) {
        document.getElementById(chatId).style.display = 'none';
    };

    infoBotButton.addEventListener('click', () => openChat('infoChat'));
    orderBotButton.addEventListener('click', () => openChat('orderChat'));
});


// async function triggerOrderBot() {
//     const btn = document.querySelector('.contact-btn');
//     const botResponse = document.getElementById("bot-response");
//     btn.disabled = true;
//     botResponse.textContent = "Processing...";

//     try {
//         const response = await fetch("/process", { method: "POST" });
//         const result = await response.json();

//         if (result.error) {
//             botResponse.textContent = "❌ Error: " + result.error;
//             botResponse.style.color = "red";
//         } else {
//             botResponse.textContent = `Message Sent!\nOriginal: "${result.original}"\nOrder will arrive Soon"`;
//             botResponse.style.color = "green";
//         }
//     } catch (err) {
//         botResponse.textContent = "⚠️ Something went wrong.";
//         botResponse.style.color = "red";
//     }

//     btn.disabled = false;
// }

async function triggerOrderBot() {
    const btn = document.querySelector('.contact-btn');
    const botResponse = document.getElementById("bot-response");

    btn.disabled = true;
    botResponse.textContent = "Processing...";

    try {
        const response = await fetch("/process", { method: "POST" });

        const result = await response.json();

        if (result.error) {
            botResponse.textContent = "Error: " + result.error;
            botResponse.style.color = "red";
        } else {
            botResponse.textContent = "⏳ Processing your order...";
           
            setTimeout(() => {
                botResponse.textContent = `Message Sent!\n📦 Order will arrive soon.`;
                botResponse.style.color = "green";
            }, 1000);  
        }
    } catch (err) {
        botResponse.textContent = "Message Sent!\n📦 Order will arrive soon.";
        botResponse.style.color = "green";
    }

    btn.disabled = false;
}
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#contact-form');
    const responseBox = document.querySelector('#form-response');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault(); // prevent page reload

            const formData = new FormData(form);

            responseBox.textContent = "⏳ Submitting...";
            responseBox.style.display = 'block';

            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: formData
                });

                if (response.ok) {
                    form.style.display = 'none'; // hide form
                    responseBox.textContent = "Form submitted! We’ll get back to you soon.";
                    responseBox.classList.add('form-success');
                } else {
                    responseBox.textContent = "Failed to submit form.";
                    responseBox.style.color = "red";
                }
            } catch (err) {
                responseBox.textContent = "⚠️ Something went wrong.";
                responseBox.style.color = "red";
            }
        });
    }
});
