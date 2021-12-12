const btn = document.getElementById("search-btn");
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const api = "https://api.dictionaryapi.dev/api/v2/entries/en/";

function playSound() {
    sound.play();
}

btn.addEventListener('click', () => {
    const input  = document.getElementById("input").value;
    
    fetch(`${api}${input}`)
     .then((response) => response.json())
     .then((data) =>{
        console.log(data);
        result.innerHTML = `
        <h3>${input}</h3>
        <button onclick="playSound()"></button>
        <p>${data[0].meanings[0].definitions[0].definition}</p>
        <p>${data[0].meanings[0].definitions[0].example}</p>`
        sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`)
     })
     .catch(() => {
        result.innerHTML = '?';
    });
})