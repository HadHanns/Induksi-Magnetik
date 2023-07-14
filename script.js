let title = document.title;
window.addEventListener('blur', () => {
    document.title = "Kelompok 2";
});

window.addEventListener('focus', () => {
    document.title = title;
});