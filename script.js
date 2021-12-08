const btn = document.getElementById("search-btn");
const result = document.getElementById("result");
const api = "https://api.dictionaryapi.dev/api/v2/entries/en/";

btn.addEventListener('click', () => {
    const input  = document.getElementById("input").value;
    
    fetch(`${api}${input}`)
     .then((response) => response.json())
     .then((data) =>{
        console.log(data);
        result.innerHTML = `
        <h3>${input}</h3>
        <p>${data[0].meanings[0].definitions[0].definition}</p>
        <p>${data[0].meanings[0].definitions[0].example}</p>`
     })
     .catch(() => {
        result.innerHTML = '?';
    });
})