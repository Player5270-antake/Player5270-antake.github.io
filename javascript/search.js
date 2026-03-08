const input = document.getElementById("searchInput");
const results = document.getElementById("searchResults");

input.addEventListener("input", () => {

const keyword = input.value.toLowerCase();
results.innerHTML = "";

if(keyword.length === 0) return;

const filtered = searchData.filter(item =>
item.title.toLowerCase().includes(keyword)
);

filtered.forEach(item => {

const div = document.createElement("div");

div.innerHTML =
`<a href="${item.url}">${item.title}</a>`;

results.appendChild(div);

});

});