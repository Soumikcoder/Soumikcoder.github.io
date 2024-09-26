const themeswitch=document.getElementById('themeswitch');
let darktheme = document.cookie.includes('dark');
if (darktheme) {
    document.body.classList.add('dark');
} else {
    document.body.classList.remove('dark');
}
themeswitch.addEventListener('change', () => {
    darktheme = !darktheme;
    document.body.classList.toggle('dark');
    document.cookie = darktheme ? 'dark' : 'light';
});