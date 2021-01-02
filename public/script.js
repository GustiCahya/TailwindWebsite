const menu = document.querySelector("#menu");
const navList = document.querySelector("#navList");

menu.addEventListener("click", () => {
    navList.classList.toggle("hidden");
});

window.addEventListener("resize", () => {
    width = window.innerWidth;
    if(width >= 768){
        navList.classList.remove("hidden");
    }else{
        navList.classList.add("hidden");
    }
});