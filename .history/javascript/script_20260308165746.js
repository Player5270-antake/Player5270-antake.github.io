const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".toc a");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

links.forEach(link => {
link.classList.remove("active");
});

const id = entry.target.getAttribute("id");
const activeLink = document.querySelector(`.toc a[href="#${id}"]`);

if(activeLink){
activeLink.classList.add("active");
}

}

});

},{
rootMargin: "-40% 0px -55% 0px"
});

sections.forEach(section=>{
observer.observe(section);
});

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