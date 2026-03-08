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