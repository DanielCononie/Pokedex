// const API_LINK = 'https://pokeapi.co/api/v2/pokemon/1'
// const IMG_PATH = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

const root = document.querySelector('.inner-root')
const search = document.querySelector('.search')

let pokemonArray = [];
// let pokemon = {
//     name:"",
//     id:"",
//     image:"",
//     type:""
// } 
let promises = []

returnPokemon();



function returnPokemon() {

    pokemonArray = []
    for(let i = 1; i < 600; i++)
    {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`
        fetch(url).then(res => res.json()).then((data) => {

            const pokemon = {
                name: data.name,
                id: data.id,
                image: data.sprites.front_default,
                type: data.types.map( item => item.type.name).join(',')
            }

            pokemon.name = data.name
            pokemon.id = data.id
            pokemon.image = data.sprites.front_default
            pokemon.type = data.types.map( item => item.type.name).join(',')

            pokemonArray.push(pokemon)


            const div_card = document.createElement('div')
            div_card.setAttribute('class', 'divCard')


            const name = document.createElement('p')
            name.setAttribute('class', 'name')
            
            const image = document.createElement('img')
            image.setAttribute('class', 'pokemon-image')

            const type = document.createElement('p')
            type.setAttribute('class', 'type')

            name.innerText = `${pokemon.id}, ${pokemon.name}`
            image.src = `${pokemon.image}`
            type.innerText=`Type: ${pokemon.type}`

            root.appendChild(div_card)
            div_card.appendChild(name)
            div_card.appendChild(image)
            div_card.appendChild(type)

        })
    }

}
console.log(pokemonArray)
// Grabs data from API, renders results, then stores objects of pokemon inside an array
function searchResult() {
    root.innerHTML = '';
    const searchItem = search.value
    
    for(let i = 0; i<pokemonArray.length; i++)
        {
            if(searchItem === pokemonArray[i].name)
            {
                //Render the pokemon on the screen with div_card, etc.
                console.log(pokemonArray[i].name)
                root.innerHTML += `<div class="divCard">
                <p class="name">${pokemonArray[i].name}</p>
                <img src="${pokemonArray[i].image}" class="pokemon-image">
                <p class="type"> Type: ${pokemonArray[i].type}</p></div>`;

            }
        }  
}

function backHome() {
    root.innerHTML = '';
    returnPokemon();
}

function renderRegion() {
    return 0;
}