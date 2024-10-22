const themeswitch=document.getElementById('themeswitch');
let darktheme = document.cookie.includes('dark');
if (darktheme) {
    document.body.classList.add('dark');
    themeswitch.checked=false;
} else {
    document.body.classList.remove('dark');
    themeswitch.checked=true;
    document.cookie = `theme=light;max-age=${60*60*24*365*2};SameSite=Lax;`;
}
themeswitch.addEventListener('change', () => {
    darktheme = !darktheme;
    document.body.classList.toggle('dark');
    document.cookie = `theme=${darktheme ? 'dark' : 'light'};max-age=${60*60*24*365*2};SameSite=Lax;`;
});