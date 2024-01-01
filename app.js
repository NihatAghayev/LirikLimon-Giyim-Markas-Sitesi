const header = document.querySelector("header");
const iletisim = document.getElementById("iletisim");
const logoTikla1 = document.getElementsByClassName("logo");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');


logoTikla1.onclick = () =>{
    location.reload();
}

