// Bondly App - Main Logic
function showPage(pageName) {
    const content = document.getElementById('main-content');
    
    // Update navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    // Remove all 'active' classes
 document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
 });

 // Add 'active' to the correct button
 document.querySelector(`.nav-btn[onclick*="${pageName}"]`).classList.add('active');

    // Load different pages
    switch(pageName) {
        case 'assistant':
            content.innerHTML = getAssistantPage();
            setupAssistant();
            break;
        case 'insights':
            content.innerHTML = getInsightsPage();
            break;
        case 'settings':
            content.innerHTML = getSettingsPage();
            break;
    }
}

function getAssistantPage() {
    return `
        <div class="page">
            <h2>What message needs a thoughtful reply?</h2>
            <textarea 
                id="message-input" 
                placeholder="Paste your partner's message here... Let's build a better connection together. ❤️"
                rows="5">
            </textarea>
            <button onclick="generateReply()" class="craft-btn">
                ✨ Craft Reply
            </button>
            <div id="replies" class="replies-section"></div>
        </div>
    `;
}

function getInsightsPage() {
    return `
        <div class="page">
            <h2>📊 Your Communication Insights</h2>
            <div class="stat-card">
                <h3>Messages Analyzed</h3>
                <div class="stat-number">12</div>
            </div>
            <div class="stat-card">
                <h3>Relationships Improved</h3>
                <div class="stat-number">3</div>
            </div>
            <div class="stat-card">
                <h3>Success Rate</h3>
                <div class="stat-number">94%</div>
            </div>
        </div>
    `;
}

function getSettingsPage() {
    return `
        <div class="page">
            <h2>⚙️ Settings</h2>
            <div class="setting-item">
                <label>Reply Tone:</label>
                <select>
                    <option>Balanced</option>
                    <option>Professional</option>
                    <option>Warm & Personal</option>
                </select>
            </div>
            <div class="setting-item">
                <label>
                    <input type="checkbox"> Save conversation history
                </label>
            </div>
        </div>
    `;
}

function setupAssistant() {
    // This runs when Assistant page loads
    document.getElementById('message-input').focus();
}

function generateReply() {
    const input = document.getElementById('message-input').value;
    const replies = document.getElementById('replies');
    
    if (!input.trim()) {
        alert('Please enter a message first!');
        return;
    }
    
    // Mock AI responses (you'll improve this later)
    const suggestions = [
        {
            tone: "💝 Empathetic",
            text: "I understand this might be difficult. Let's talk about it when you're ready."
        },
        {
            tone: "🤝 Diplomatic", 
            text: "I appreciate you sharing this. Can we find time to discuss this together?"
        },
        {
            tone: "💪 Supportive",
            text: "I'm here for you, and I want us to work through this together."
        }
    ];
    
    replies.innerHTML = `
        <h3>Suggested Replies:</h3>
        ${suggestions.map(reply => `
            <div class="reply-option">
                <div class="reply-tone">${reply.tone}</div>
                <div class="reply-text">${reply.text}</div>
                <button onclick="copyReply('${reply.text}')" class="copy-btn">
                    📋 Copy
                </button>
            </div>
        `).join('')}
    `;
}

function copyReply(text) {
    navigator.clipboard.writeText(text);
    alert('Reply copied! 📋');
}

// Load Assistant page by default
document.addEventListener('DOMContentLoaded', () => {
    showPage('assistant');
});
