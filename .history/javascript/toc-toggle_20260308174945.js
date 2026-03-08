const button = document.querySelector(".toc-toggle");
const toc = document.querySelector(".toc");

window.addEventListener("scroll", () => {

if(window.scrollY > 300){
button.style.display = "block";
}else{
button.style.display = "none";
}

});

button.addEventListener("click", () => {

toc.classList.toggle("open");

});