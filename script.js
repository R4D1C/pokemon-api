const searchBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokeID = document.getElementById("pokemon-id");
const pokeWeight = document.getElementById("weight");
const pokeHeight = document.getElementById("height");
const pokeTypes = document.getElementById("types");
const pokeHp = document.getElementById("hp");
const pokeAttack = document.getElementById("attack");
const pokeDefense = document.getElementById("defense");
const pokeSpecialAttack = document.getElementById("special-attack");
const pokeSpecialDefense = document.getElementById("special-defense");
const pokeSpeed = document.getElementById("speed");
const pokeImage = document.getElementById("pokemon-img-container");
const api = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";

const printStats = async () => {
    const searchInp = document.getElementById("search-input").value.toLowerCase();
    const pokeUrl = api + (isNaN(searchInp) ? searchInp : Number(searchInp));
    try {
        fetch(pokeUrl)
            .then(resp => resp.ok ? resp.json() : alert("Pokémon not found"))
            .then(data => {
                const {name,id} = data;
                const dataStats = data.stats;
                const dataTypes = data.types;
                pokemonName.innerText = name;
                pokeID.innerText = `#${id}`;
                pokeHp.innerText = dataStats[0].base_stat;
                pokeAttack.innerText = dataStats[1].base_stat;
                pokeDefense.innerText = dataStats[2].base_stat;
                pokeSpecialAttack.innerText = dataStats[3].base_stat;
                pokeSpecialDefense.innerText = dataStats[4].base_stat;
                pokeSpeed.innerText = dataStats[5].base_stat;
                pokeHeight.innerText = "Height: " + data.height;
                pokeWeight.innerText = "Weight: " + data.weight;
                pokeImage.innerHTML = `<img id="sprite" src="${data.sprites.front_default}">`;
                pokeTypes.innerHTML = "";
                dataTypes.forEach(el => {
                    pokeTypes.innerHTML += `<div class="type ${el.type.name}-type">${el.type.name}</div>`
                });
            })
    } catch (err) {
        console.log(err)
    }
}

searchBtn.addEventListener("click", printStats)


/* const fetchData = async () => {
    const searchInp = document.getElementById("search-input").value.toLowerCase();

    try {
        const res = await fetch(api);
        const data = await res.json();
        const findedPokemon = data.results.find(pokemon => pokemon.name.includes(searchInp));

        if (findedPokemon) {
            const redirectPokemon = api + isNaN();
            console.log(redirectPokemon)
            return redirectPokemon
        } else {
            return null
        }
    } catch (err){
        console.log(err);
    }
} 
    
QUE ESTÚPIDO, SI LA API BUSCA SOLA, PARA QUE HICE ESTA FUNCIÓN QUE BUSCA DENTRO DE LA MISMA???

*/