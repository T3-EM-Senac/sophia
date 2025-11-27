function searchMusic() {
const input = document.getElementById("searchInput").value.trim();
const results = document.getElementById("results");


results.innerHTML = "";
if (!input) {
results.innerHTML = `<p>Digite algo para buscar.</p>`;
return;
}


const fakeResults = [
`Resultado para "${input}": Música encontrada!`,
`Outra faixa relacionada a "${input}".`
];


fakeResults.forEach(r => {
const item = document.createElement("div");
item.className = "result-item";
item.textContent = r;
results.appendChild(item);
});
}