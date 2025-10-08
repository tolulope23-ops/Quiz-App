### 🏫 Case Study
A school wants a small tool to test students’ understanding after each lesson.  
The teacher can input multiple-choice questions, and students can take the quiz to see their score immediately after completion.

---


## 🎯 Features

- Displays **one question at a time** with four multiple-choice options  
- Tracks user-selected answers as they move between questions  
- Calculates and displays the **final score as a percentage**  
- Allows users to **navigate back** to previous questions  
- Includes a **Restart** feature to retake the quiz  
- All data (questions, options, and answers) are stored **in memory** — no backend or database  

---


quiz-app/
│
├── index.html           # Main HTML file
├── css/
│   └── style.css        # Custom styles
├── js/
│   └── scripts.js       # JavaScript quiz logic
└── assets/
    └── screenshot.png   # App preview image

---


## 🧠 Tech Stack
- **HTML5** – Structure of the quiz interface  
- **CSS3**, **boostrap** – Styling and layout  
- **JavaScript (ES6)** – Quiz logic and DOM manipulation 

---


## ⚙️ How It Works
1. The quiz data (questions, options, and answers) are stored in a JavaScript array.  
2. When the quiz starts, one question is displayed at a time.  
3. When the user selects an option and clicks **Next**, their answer is recorded in memory.  
4. After the final question, the script calculates the total score and displays it.  
5. The user can restart the quiz to retake it without reloading the page.  

---

```markdown
## 📸 Preview
![Quiz App Screenshot](./image/screenshot.png)

```

---

## 💡 Future Improvements
- Add a backend to store quiz questions and student scores  
- Include timer functionality for each question  
- Implement category-based quizzes 

---

## 🚀 Run Locally
1. Clone this repository  
   ```bash
   git clone https://github.com/tolulope23-ops/Quiz-App.git