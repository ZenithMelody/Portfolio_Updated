/* =========================================
   1. DARK MODE TOGGLE
   ========================================= */
const themeToggleBtn = document.getElementById('theme-toggle');

// Safety check: ensure the button exists on the current page
if (themeToggleBtn) {
    const body = document.body;
    const iconSpan = themeToggleBtn.querySelector('.icon');

    // 1. Get the saved theme from local storage
    const currentTheme = localStorage.getItem('theme');

    // 2. Enforce the saved theme on page load
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        iconSpan.textContent = '🌙';
    } else if (currentTheme === 'light') {
        body.classList.remove('dark-mode'); // Crucial: strips dark mode if HTML hardcoded it
        iconSpan.textContent = '☀';
    }

    // 3. Handle the click toggle
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            iconSpan.textContent = '🌙';
            localStorage.setItem('theme', 'dark');
        } else {
            iconSpan.textContent = '☀';
            localStorage.setItem('theme', 'light');
        }
    });
}

/* =========================================
   2. EXPERIENCE / EDUCATION TOGGLE
   ========================================= */
function showSection(sectionId) {
    // 1. Hide all list contents
    const contents = document.querySelectorAll('.list-content');
    contents.forEach(content => {
        content.classList.remove('active-content');
    });

    // 2. Remove 'active' class from all buttons
    const buttons = document.querySelectorAll('.toggle-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // 3. Show the selected section
    document.getElementById(sectionId).classList.add('active-content');

    // 4. Set the clicked button to active
    // Find the button that called this function based on its onclick attribute
    // Alternatively, we loop through to find which button matches the logic, 
    // but here is a simple way using the event object if passed, or matching text.
    
    // Simple approach: Check text content of buttons
    buttons.forEach(btn => {
        if (btn.innerText.toLowerCase() === sectionId) {
            btn.classList.add('active');
        }
    });
}