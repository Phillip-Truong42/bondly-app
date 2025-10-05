# Bondly - AI Relationship Coach

![Bondly Logo](assets/images/logo.png)

## 🌟 Overview

**Bondly** is an AI-powered relationship coaching app that helps you strengthen your relationships with thoughtful, high-EQ replies. Simply paste a message from your partner, friend, or colleague, and get emotionally intelligent response suggestions that help build better connections.

### ✨ Key Features

- **AI-Powered Reply Generation**: Get 2-3 thoughtful response options for any message
- **Emotional Intelligence Focus**: Responses designed to strengthen relationships and defuse tension  
- **Simple Interface**: Just paste, click "Craft Reply", and choose your response
- **Multiple Scenarios**: Works for romantic relationships, friendships, and professional communications
- **Privacy-First**: Your conversations stay private

## 🚀 Quick Start

### Option 1: Run Locally (Recommended for Development)

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/bondly-app.git
cd bondly-app
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open your browser to:**
```
http://localhost:3000
```

### Option 2: Simple Local Server

If you don't want to install Node.js:

1. **Download all files** to a folder called `bondly-app`
2. **Open `index.html`** directly in your browser
3. **Or use Python's built-in server:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

## 📁 Project Structure

```
bondly-app/
├── index.html              # Main app entry point
├── package.json            # Dependencies and scripts
├── README.md              # This file
├── src/
│   ├── pages/
│   │   ├── assistant.html     # Main AI assistant interface
│   │   ├── insights.html      # Analytics/usage insights
│   │   └── settings.html      # User preferences
│   ├── components/
│   │   ├── message-input.js   # Message input component
│   │   ├── reply-generator.js # AI reply generation logic
│   │   └── navigation.js      # Bottom navigation
│   ├── styles/
│   │   ├── main.css          # Global styles
│   │   └── components.css    # Component-specific styles
│   └── scripts/
│       ├── app.js            # Main application logic
│       └── api.js            # API integration
├── assets/
│   └── images/               # App images and icons
└── docs/
    └── setup-guide.md        # Detailed setup instructions
```

## 🎨 How to Use

1. **Open the Assistant tab** (main interface)
2. **Paste a message** in the text area that you need help responding to
3. **Click "Craft Reply"** to generate AI suggestions
4. **Choose the best response** or use it as inspiration
5. **Copy and send** your thoughtful reply

## 🛠️ Development

### File Organization

**Your copied Base44 code should be organized as follows:**

1. **Assistant page code** → `src/pages/assistant.html`
2. **Dashboard/Insights code** → `src/pages/insights.html` 
3. **Settings page code** → `src/pages/settings.html`
4. **Component code** → `src/components/` (separate files for each)
5. **CSS styles** → `src/styles/main.css`
6. **JavaScript logic** → `src/scripts/app.js`

### Making Changes

Since you copied from Base44:
- Edit HTML files for structure changes
- Modify CSS files for styling updates  
- Update JavaScript for functionality changes
- Test changes by refreshing your browser

## 🚀 Deployment Options

### GitHub Pages (Free)
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select "Deploy from main branch"
4. Your app will be live at `https://yourusername.github.io/bondly-app`

### Netlify (Free)
1. Drag your project folder to netlify.com/drop
2. Get instant deployment
3. Connect to GitHub for automatic updates

### Vercel (Free)
1. Import from GitHub at vercel.com
2. Zero-configuration deployment
3. Automatic deployments on code changes

## 📱 Features Roadmap

- [x] Basic AI reply generation
- [x] Clean, intuitive interface
- [x] Mobile-responsive design
- [ ] Multiple reply tone options (professional, casual, empathetic)
- [ ] Conversation history
- [ ] User accounts and preferences
- [ ] API integration improvements
- [ ] Mobile app version

## 🤝 Contributing

This is currently a personal project, but contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - feel free to use this code for your own projects.

## 📞 Support

If you have questions or need help:
- Open an issue on GitHub
- Email: your-email@example.com

---

**Built with ❤️ for better relationships through thoughtful communication**
