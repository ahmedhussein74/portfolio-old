let menu = document.querySelector("aside");
let btn1 = document.querySelector(".fa-bars");
let btn2 = document.querySelector(".fa-times");
let link = document.querySelectorAll("aside a");

btn1.addEventListener("click", () => {
   btn1.style.transform = "rotate(90deg)"
   menu.style.transform = "translateX(0)";
});
btn2.addEventListener("click",()=>{
   btn1.style.transform = "rotate(0)";
   menu.style.transform = "translateX(100%)";
});
link[0].addEventListener("click",()=>{
   btn1.style.transform = "rotate(0)";
   menu.style.transform = "translateX(100%)";
});
link[1].addEventListener("click",()=>{
   btn1.style.transform = "rotate(0)";
   menu.style.transform = "translateX(100%)";
});
link[2].addEventListener("click",()=>{
   btn1.style.transform = "rotate(0)";
   menu.style.transform = "translateX(100%)";
});