const btn = document.getElementById("search-btn");
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const api = "https://api.dictionaryapi.dev/api/v2/entries/en/";

function playSound() {
    sound.play();
}

btn.addEventListener('click', async () => {
    const input  = document.getElementById("input").value;
    
    await fetch(`${api}${input}`)
     .then((response) => response.json())
     .then((data) =>{
        console.log(data);
        let html = `<h3>${input}</h3>`;
        html += `<button onclick="playSound()"></button>`
        data[0].meanings.forEach((obj, index) => {
            if(obj.definitions.length > 0){
                obj.definitions.forEach((a,b) => {
                    html += `<p>${a.definition}</p>`
                })
            }
        })
        result.innerHTML = `
        ${html}
        <p>${data[0].meanings[0].definitions[0].example}</p>`
        sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`)
     })
     .catch(() => {
        result.innerHTML = '?';
    });
})