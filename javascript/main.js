const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

const id = entry.target.getAttribute("id");

highlightToc(id);

}

});

},{
rootMargin: "-40% 0px -55% 0px"
});

sections.forEach(section=>{
observer.observe(section);
});