document.getElementById('openChatBtn').addEventListener('click', () => {
    document.getElementById('chatContainer').style.display = 'flex';  // Show chat window
});

document.getElementById('closeChatBtn').addEventListener('click', () => {
    document.getElementById('chatContainer').style.display = 'none';  // Hide chat window
});

document.getElementById('chatForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const userMessage = document.getElementById('userInput').value;

    // Display user's message
    const userMsgDiv = document.createElement('div');
    userMsgDiv.classList.add('user-msg');
    userMsgDiv.textContent = userMessage;
    document.getElementById('chatWindow').appendChild(userMsgDiv);

    // Clear input field
    document.getElementById('userInput').value = '';

    // Scroll to bottom
    document.getElementById('chatWindow').scrollTop = document.getElementById('chatWindow').scrollHeight;

    // Simulate a bot response
    const botReply = getBotReply(userMessage);

    // Display bot's response
    const botMsgDiv = document.createElement('div');
    botMsgDiv.classList.add('bot-msg');
    botMsgDiv.textContent = botReply;
    document.getElementById('chatWindow').appendChild(botMsgDiv);

    // Scroll to bottom again
    document.getElementById('chatWindow').scrollTop = document.getElementById('chatWindow').scrollHeight;
});

// Simple bot logic (for demonstration purposes)
function getBotReply(message) {
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.wincludes('hey')) {
        return 'Hello! How can I help you today?';
    } else if (lowerMessage.includes('how are you')) {
        return 'I am good, thank you! How about you?';
    } else if (lowerMessage.includes('what is your name') || lowerMessage.includes('who are you')) {
        return 'I am your friendly chatbot, here to assist you!';
    } else if (lowerMessage.includes('what can you do') || lowerMessage.includes('what are you capable of')) {
        return 'I can help with answering questions, provide support, and assist with information on this website!';
    } else if (lowerMessage.includes('thank you') || lowerMessage.includes('thanks')) {
        return 'You are very welcome! Feel free to ask anything else.';
    } else if (lowerMessage.includes('goodbye') || lowerMessage.includes('bye') || lowerMessage.includes('see you')) {
        return 'Goodbye! Have a great day!';
    } else if (lowerMessage.includes('help') || lowerMessage.includes('can you help me')) {
        return 'Sure! What do you need help with? I am here to assist you.';
    } else if (lowerMessage.includes('where are you from') || lowerMessage.includes('where do you live')) {
        return 'I am a virtual assistant, I don’t have a physical location, but I’m always here to help you online!';
    } else if (lowerMessage.includes('what is this website') || lowerMessage.includes('what do you do here')) {
        return 'This website is a place where you can find all the information you need about our products/services.';
    } else if (lowerMessage.includes('hours') || lowerMessage.includes('opening hours')) {
        return 'Our working hours are from 9 AM to 5 PM, Monday to Friday.';
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('how to contact')) {
        return 'You can contact us via email at support@website.com or call us at 123-456-7890.';
    } else if (lowerMessage.includes('pricing') || lowerMessage.includes('price')) {
        return 'Please visit our pricing page for more details on our products and services.';
    } else if (lowerMessage.includes('services') || lowerMessage.includes('what services do you offer')) {
        return 'We offer a variety of services, including product sales, customer support, and consultancy. Feel free to ask more about them!';
    } else if (lowerMessage.includes('location') || lowerMessage.includes('where are you located')) {
        return 'We are located at 123 Main Street, City, Country.';
    } else if (lowerMessage.includes('feedback') || lowerMessage.includes('suggestion')) {
        return 'We’d love to hear your feedback! Please email us at feedback@website.com.';
    } else if (lowerMessage.includes('how to use this website') || lowerMessage.includes('what should I do first')) {
        return 'To get started, simply browse our products or use the search bar at the top of the page to find what you need.';
    } else if (lowerMessage.includes('error') || lowerMessage.includes('problem')) {
        return 'Sorry about that! Could you please describe the issue so I can help you resolve it?';
    } else if (lowerMessage.includes('refund') || lowerMessage.includes('return')) {
        return 'For refund and return information, please visit our Return Policy page or contact customer support.';
    } else if (lowerMessage.includes('payment') || lowerMessage.includes('pay')) {
        return 'We accept payments via credit/debit cards, and bank transfers. Let me know if you need more details!';
    } else if (lowerMessage.includes('signup') || lowerMessage.includes('register')) {
        return 'You can sign up by clicking the “Sign Up” button at the top right of the page.';
    } else if (lowerMessage.includes('login') || lowerMessage.includes('signin')) {
        return 'To log in, click the “Login” button at the top right corner and enter your credentials.';
    } else if (lowerMessage.includes('forgot password')) {
        return 'If you forgot your password, click on the “Forgot Password” link on the login page to reset it.';
    } else if (lowerMessage.includes('terms') || lowerMessage.includes('terms of service')) {
        return 'You can view our terms and conditions by visiting the Terms of Service page.';
    } else if (lowerMessage.includes('privacy') || lowerMessage.includes('privacy policy')) {
        return 'Please refer to our Privacy Policy page for details on how we handle your data.';
    } else if (lowerMessage.includes('how does it work') || lowerMessage.includes('how do I get started')) {
        return 'To get started, browse our products or services and follow the prompts to place an order or contact us!';
    } else if (lowerMessage.includes('how much') || lowerMessage.includes('cost') || lowerMessage.includes('price')) {
        return 'The prices depend on the product/service you are interested in. You can view our pricing page for more details.';
    } else {
        return 'I am still learning. Please ask something else!';
    }
}
