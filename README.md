# 👨‍💻 Personal Portfolio Website

A clean, responsive, and minimalist personal portfolio website built with raw HTML, CSS, and JavaScript. Designed to showcase my background in Computer Engineering, software development projects, and professional experience.

## 🚧 To-Do / Pending Updates
- [ ] **Profile Picture:** Replace the placeholder in `index.html` with a proper headshot.
- [x] **Project Images:** Take screenshots of current projects and save them to an `/images` folder. Update the `src` paths in `projects.html`.
- [x] **Project Descriptions:** Review and refine the project copy in `projects.html` to ensure it accurately highlights the project and what it does.
- [x] **Resume:** Add the actual `resume.pdf` file to the root directory and ensure the download link in the Hero section works.

## ✨ Features
* **Dark/Light Mode:** A persistent theme toggle that saves user preference to `localStorage`.
* **Experience Timeline:** An interactive vertical timeline to switch between "Work" and "Education" history.
* **Project Showcase:** A CSS Grid layout featuring project cards with "pill" tags for tech stacks and direct links to live demos/GitHub repos.
* **Mobile Responsive:** Fully adaptive layout that scales from desktop down to mobile devices.
* **Zero Dependencies:** Built without frameworks (React, Vue, Bootstrap) for maximum performance and control.

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3 (Custom Variables for theming), JavaScript (ES6+)
* **Icons:** FontAwesome 6 (CDN)
* **Fonts:** System fonts stack (Apple System, BlinkMacSystemFont, Segoe UI) for fast loading.

## 📂 Project Structure
```text
/
├── index.html          # Main landing page (Hero + Experience Timeline)
├── projects.html       # Dedicated projects grid view
├── style.css           # Global styles, variables, and media queries
├── script.js           # Light/Dark toggling
├── /images             # Folder for project screenshots and profile picture
└── resume.pdf          # Downloadable resume
└── README.md           # Project documentation
