const themeToggle = document.getElementById('themeToggle');
    const storedTheme = localStorage.getItem('theme');
    console.log(storedTheme);

    if (storedTheme == 'dark') {
        document.documentElement.style.setProperty('--main-bg-color', '#000');
        document.documentElement.style.setProperty('--main-text-color', '#fff');
        themeToggle.checked = true;
    }
    else {
        document.documentElement.style.setProperty('--main-bg-color', '#fff');
        document.documentElement.style.setProperty('--main-text-color', '#333');
        themeToggle.checked = false;
    }

    themeToggle.addEventListener('change', function () {
        if (this.checked) {
            // Apply dark theme
            document.documentElement.style.setProperty('--main-bg-color', '#000');
            document.documentElement.style.setProperty('--main-text-color', '#fff');

            // Save theme to local storage
            localStorage.setItem('theme', 'dark');
        } else {
            // Apply light theme
            document.documentElement.style.setProperty('--main-bg-color', '#fff');
            document.documentElement.style.setProperty('--main-text-color', '#333');

            // Save theme to local storage
            localStorage.setItem('theme', 'light');
        }
    });