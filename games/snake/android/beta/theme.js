<<<<<<< HEAD
if(!localStorage.theme) localStorage.theme = "light"
document.body.className = localStorage.theme 
ThemeBTN.innerText = document.body.classList.contains("dark") ? 'light'  : 'dark'


ThemeBTN.onclick = () =>{
    document.body.classList.toggle("dark")
    ThemeBTN.innerText = document.body.classList.contains("dark") ? 'light'  : 'dark'
    localStorage.theme = document.body.className || "light"
=======
if(!localStorage.theme) localStorage.theme = "light"
document.body.className = localStorage.theme 
ThemeBTN.innerText = document.body.classList.contains("dark") ? 'light'  : 'dark'


ThemeBTN.onclick = () =>{
    document.body.classList.toggle("dark")
    ThemeBTN.innerText = document.body.classList.contains("dark") ? 'light'  : 'dark'
    localStorage.theme = document.body.className || "light"
>>>>>>> 1e32beeac7847aa8bf6b28d61c9c763573ccfa57
} 