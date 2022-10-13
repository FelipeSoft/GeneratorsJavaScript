var navbar = document.querySelector(".default");
window.onscroll = () =>{ 
    window.scrollY > navbar.offsetTop 
    ? navbar.classList.add("sticky") 
    : navbar.classList.remove("sticky");
}