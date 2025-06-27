# 🧠 React Quiz App

A modern, interactive quiz application built with React, Vite, and Tailwind CSS. Test your knowledge with multiple-choice questions and get instant feedback on your performance!

![Quiz App Demo](https://img.shields.io/badge/React-18.x-blue)
![Vite](https://img.shields.io/badge/Vite-5.x-green)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-blue)

## ✨ Features

- 🎯 **Interactive Quiz Interface** - Clean, modern UI with smooth transitions
- 📊 **Real-time Score Tracking** - See your score update as you progress
- 📈 **Progress Indicator** - Visual progress bar showing completion status
- 🎨 **Responsive Design** - Works perfectly on desktop and mobile devices
- 🏆 **Detailed Results** - Performance analysis with personalized feedback
- 🔄 **Quiz Retake** - Option to retake the quiz or start over
- 🌈 **Beautiful Gradients** - Eye-catching gradient backgrounds
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development

## 🚀 Live Demo

[View Live Demo](#) <!-- Add your deployed app URL here -->

## 📱 Screenshots

### Home Page
- Welcome screen with name input
- Start quiz button
- Feature highlights

### Quiz Interface
- Question counter (1 of 8)
- Progress bar
- Multiple choice options (A, B, C, D)
- Current score display

### Results Page
- Final score with percentage
- Performance feedback
- Visual progress indicator
- Action buttons (Retake Quiz, Start Over)

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Emoji-based icons
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/react-quiz-app.git
   cd react-quiz-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`

## 🎮 How to Use

1. **Enter Your Name** - Start by entering your name on the home page
2. **Start Quiz** - Click the "Start Quiz" button to begin
3. **Answer Questions** - Select your answers from the multiple choice options
4. **View Progress** - Track your progress with the visual progress bar
5. **See Results** - Get detailed feedback on your performance
6. **Retake or Restart** - Choose to retake the quiz or start over

## 📚 Quiz Content

The quiz includes 8 carefully selected questions covering:
- 🌍 Geography (capitals, countries)
- 🪐 Science (planets, chemistry)
- 🎨 Art & Culture (famous paintings, artists)
- 📚 General Knowledge (history, currencies)
- 🐋 Nature (animals, biology)

## 🏗️ Project Structure

```
quiz-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── pages/
│   │   ├── Home.jsx      # Welcome page with name input
│   │   ├── Quiz.jsx      # Main quiz interface
│   │   └── Result.jsx    # Results and feedback page
│   ├── App.jsx           # Main app component with routing
│   ├── App.css           # App-specific styles
│   ├── index.css         # Global styles with Tailwind
│   └── main.jsx          # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Adding New Questions
Edit the `questions` array in `src/pages/Quiz.jsx`:

```javascript
const questions = [
  {
    question: "Your question here?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: "Correct Answer"
  },
  // Add more questions...
];
```

### Changing Styles
- Modify Tailwind classes directly in components
- Update `tailwind.config.js` for custom colors/themes
- Edit `src/index.css` for global styles

### Scoring System
Adjust the scoring logic in `src/pages/Result.jsx`:
- Modify percentage thresholds
- Change feedback messages
- Update result colors

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Vercel
1. Connect your GitHub repository
2. Vercel will automatically build and deploy

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/react-quiz-app",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy: `npm run deploy`

## 📈 Performance Features

- ⚡ **Vite Build Tool** - Fast development and optimized builds
- 🎯 **Component-based Architecture** - Efficient re-rendering
- 📱 **Responsive Design** - Mobile-first approach
- 🎨 **CSS Optimization** - Tailwind CSS with purging unused styles

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Built with [Vite](https://vitejs.dev/)
- Icons and emojis for enhanced UX

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact me via email: your-email@example.com

---

⭐ **If you found this project helpful, please give it a star!** ⭐
