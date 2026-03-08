const links = document.querySelectorAll(".toc a");
const sections = document.querySelectorAll("section");

function highlightToc(id){

links.forEach(link=>{
link.classList.remove("active");
});

const activeLink =
document.querySelector(`.toc a[href="#${id}"]`);

if(activeLink){
activeLink.classList.add("active");
}

}