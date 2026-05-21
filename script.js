document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const bodyElement = document.body;
    const srText = themeToggleBtn.querySelector('.sr-only');

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const activeTheme = savedTheme || (prefersDark ? 'dark-theme' : 'light-theme');
    
    bodyElement.className = activeTheme;
    atualizarControlesAcessibilidade(activeTheme);

    themeToggleBtn.addEventListener('click', () => {
        if (bodyElement.classList.contains('light-theme')) {
            bodyElement.classList.replace('light-theme', 'dark-theme');
            localStorage.setItem('theme', 'dark-theme');
            atualizarControlesAcessibilidade('dark-theme');
        } else {
            bodyElement.classList.replace('dark-theme', 'light-theme');
            localStorage.setItem('theme', 'light-theme');
            atualizarControlesAcessibilidade('light-theme');
        }
    });

    function atualizarControlesAcessibilidade(tema) {
        if (tema === 'dark-theme') {
            themeToggleBtn.setAttribute('aria-pressed', 'true');
            srText.textContent = "Desativar modo escuro (Ativar modo claro)";
        } else {
            themeToggleBtn.setAttribute('aria-pressed', 'false');
            srText.textContent = "Ativar modo escuro";
        }
    }
});