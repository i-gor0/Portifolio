function applyTheme(theme) {
const ico = document.getElementById('ico')
    if (theme === 'dark') {
        ico.setAttribute("href", "assets/codigo branco.ico")
    } else {
        ico.setAttribute("href", "assets/codigo.ico")
    }
}
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
applyTheme(systemTheme.matches ? 'dark' : 'light');

systemTheme.addEventListener('change', event => {
    applyTheme(event.matches ? 'dark' : 'light');
});
