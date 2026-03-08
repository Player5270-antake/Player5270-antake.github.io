const tocList = document.getElementById("tocList");
const sections = document.querySelectorAll("section");

sections.forEach(section => {

const id = section.id;
const title = section.querySelector("h2").textContent;

const li = document.createElement("li");
const link = document.createElement("a");

link.href = "#" + id;
link.textContent = title;

li.appendChild(link);
tocList.appendChild(li);

});