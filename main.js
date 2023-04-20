const root = document.querySelector('.inner-root')
const search = document.querySelector('.search')

let pokemonArray = [];

let promises = []

returnPokemon();

function returnPokemon() {

    pokemonArray = [];
    const promises = [];
    let pokemon = {}
    for(let i = 1; i < 494; i++)
    {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`
        promises.push(fetch(url).then((res) => res.json()));
    }

    Promise.all(promises).then( results => {
        pokemon = results.map((data) => ({
                name: data.name,
                id: data.id,
                image: data.sprites.front_default,
                type: data.types.map( item => item.type.name).join(',')
        }))
        pokemonArray = pokemon
        pokemon.forEach(element => {
            const div_card = document.createElement('div')
            div_card.setAttribute('class', 'divCard')

            const name = document.createElement('p')
            name.setAttribute('class', 'name')
            
            const image = document.createElement('img')
            image.setAttribute('class', 'pokemon-image')

            const type = document.createElement('p')
            type.setAttribute('class', 'type')

            name.innerText = `${element.id}: ${element.name}`
            image.src = `${element.image}`
            type.innerText=`Type: ${element.type}`

            if(type.innerText.includes("grass"))
            {
                div_card.style.background="linear-gradient(to top, white, rgb(103, 215, 103))"
                
            }

            if(type.innerText.includes("fire"))
            {
                div_card.style.background="linear-gradient(to top, white, rgb(224, 132, 75))"
            }

            if(type.innerText.includes("water"))
            {
                div_card.style.background="linear-gradient(to top, white, lightblue, blue)"
            }

            if(type.innerText.includes("grass,poison"))
            {
                div_card.style.background="linear-gradient(to top, white, rgb(208, 10, 208),green)"
            }

            else if(type.innerText.includes("poison") || type.innerText.includes("ghost"))
            {
                div_card.style.background="linear-gradient(to top, white, rgb(208, 10, 208))"
            }

            if(type.innerText.includes("bug,poison"))
            {
                div_card.style.background="linear-gradient(to top, white, yellow,rgb(208, 10, 208))"
            }

            if(type.innerText.includes("bug") && !(type.innerText.includes("poison")))
            {
                div_card.style.background="linear-gradient(to top, white, yellow)"
            }

            if(type.innerText.includes("steel"))
            {
                div_card.style.background="linear-gradient(to top, white, gray)"
            }

            if(type.innerText.includes("psychic") || type.innerText.includes("fairy"))
            {
                div_card.style.background="linear-gradient(to top, white, pink, pink)"
            }

            if(type.innerText.includes("ground") || type.innerText.includes("rock"))
            {
                div_card.style.background="linear-gradient(to top, white, brown)"
            }

            if(type.innerText.includes("electric"))
            {
               div_card.style.background="linear-gradient(to top, white, rgb(210, 210, 2))"
            }

            if(type.innerText.includes("ice"))
            {
               div_card.style.background="linear-gradient(to top, white, rgb(124, 201, 220))"
            }

            if(type.innerText.includes("flying") && !(type.innerText.includes("fire")))
            {
               div_card.style.background="linear-gradient(to top, white, rgb(124, 201, 220),rgb(124, 201, 220))"
            }

            if(type.innerText.includes("fighting"))
            {
               div_card.style.background="linear-gradient(to top, white,  rgb(152, 5, 5))"
            }

            if(type.innerText.includes("dragon"))
            {
               div_card.style.background="linear-gradient(to top, white,  rgb(4, 122, 200))"
            }

            if(type.innerText.includes("dark"))
            {
               div_card.style.background="linear-gradient(to top, black, white, black)"
               div_card.style.color="white"
            }

            root.appendChild(div_card)
            div_card.appendChild(name)
            div_card.appendChild(image)
            div_card.appendChild(type)

        })
        
        
    })

}

// Grabs data from API, renders results, then stores objects of pokemon inside an array
function searchResult() {
    root.innerHTML = '';
    const divCard = document.getElementsByClassName('divCard')
    let searchItem = search.value

    const type = document.getElementsByClassName("type")
    
    for(let i = 0; i<pokemonArray.length; i++)
        {
            searchItem = searchItem.toLowerCase();

            if(pokemonArray[i].name.includes(searchItem))
            {
                //Render the pokemon on the screen with div_card, etc.

                root.innerHTML += `<div class="divCard">
                <p class="name">${pokemonArray[i].name}</p>
                <img src="${pokemonArray[i].image}" class="pokemon-image">
                <p class="type"> Type: ${pokemonArray[i].type}</p></div>`;
                
                console.log(pokemonArray[i].type)
                
                if(pokemonArray[i].type.includes("grass"))
                {
                    divCard[0].style.background='linear-gradient(to top, white, rgb(103, 215, 103))'
                }

                if(pokemonArray[i].type.includes("fire"))
                {
                    divCard[0].style.background='linear-gradient(to top, white, orange)'
                }

                if(pokemonArray[i].type.includes("water"))
                {
                    divCard[0].style.background='linear-gradient(to top, white, blue)'
                }

                if(pokemonArray[i].type.includes("bug") && !(pokemonArray[i].type.includes("poison")))
                {
                    divCard[0].style.background='linear-gradient(to top, white, yellow)'
                }

                if(pokemonArray[i].type.includes("poison") && !(pokemonArray[i].type.includes("grass"))) 
                {
                    divCard[0].style.background='linear-gradient(to top, white, purple)'
                }
            
                if(pokemonArray[i].type.includes("steel")) 
                {
                    divCard[0].style.background='linear-gradient(to top, white, gray)'
                }

                if(pokemonArray[i].type.includes("psychic") || pokemonArray[i].type.includes("fairy")) 
                {
                    divCard[0].style.background='linear-gradient(to top, white, pink, pink)'
                }

                if(pokemonArray[i].type.includes("ground") || pokemonArray[i].type.includes("rock")) 
                {
                    divCard[0].style.background='linear-gradient(to top, white, brown)'
                }

                if(pokemonArray[i].type.includes("electric")) 
                {
                    divCard[0].style.background='linear-gradient(to top, white, yellow)'
                }

                if(pokemonArray[i].type.includes("ice")) 
                {
                    divCard[0].style.background='linear-gradient(to top, white, blue)'
                }

                if(pokemonArray[i].type.includes("flying") && !(pokemonArray[i].type.includes("fire"))) 
                {
                    divCard[0].style.background='linear-gradient(to top, white, rgb(124, 201, 220))'
                }

                if(pokemonArray[i].type.includes("fighting")) 
                {
                    divCard[0].style.background="linear-gradient(to top, white,  rgb(152, 5, 5))"
                }

                if(pokemonArray[i].type.includes("dragon")) 
                {
                    divCard[0].style.background="linear-gradient(to top, white,  rgb(4, 122, 200))"
                }

                if(pokemonArray[i].type.includes("dark")) 
                {
                    divCard[0].style.background='linear-gradient(to top, black, white, black)'
                    divCard[0].style.color='white'
                }
            }
        }  
}

function backHome() {
    root.innerHTML = '';
    returnPokemon();
}

function renderKanto() {
    root.innerHTML = '';
    console.log("Kanto")

    const divCard = document.getElementsByClassName('divCard')

    for(let i = 0; i < 151; i++)
    {
        root.innerHTML += `<div class="divCard">
        <p class="name">${pokemonArray[i].id} : ${pokemonArray[i].name}</p>
        <img src="${pokemonArray[i].image}" class="pokemon-image">
        <p class="type"> Type: ${pokemonArray[i].type}</p></div>`;

        if(pokemonArray[i].type.includes("grass"))
            {
                divCard[i].style.background='linear-gradient(to top, white, rgb(103, 215, 103))'
            }

            if(pokemonArray[i].type.includes("fire"))
            {
                divCard[i].style.background='linear-gradient(to top, white, orange)'
            }

            if(pokemonArray[i].type.includes("water"))
            {
                divCard[i].style.background='linear-gradient(to top, white, blue)'
            }

            if(pokemonArray[i].type.includes("bug") && !(pokemonArray[i].type.includes("poison")))
            {
                divCard[i].style.background='linear-gradient(to top, white, yellow)'
            }

            if(pokemonArray[i].type.includes("poison") && !(pokemonArray[i].type.includes("grass"))) 
            {
                divCard[i].style.background='linear-gradient(to top, white, purple)'
            }
            if(pokemonArray[i].type.includes("steel")) 
            {
                divCard[i].style.background='linear-gradient(to top, white, gray)'
            }

            if(pokemonArray[i].type.includes("psychic") || pokemonArray[i].type.includes("fairy")) 
            {
                divCard[i].style.background='linear-gradient(to top, white, pink, pink)'
            }

            if(pokemonArray[i].type.includes("ground") || pokemonArray[i].type.includes("rock")) 
            {
                divCard[i].style.background='linear-gradient(to top, white, brown)'
            }

            if(pokemonArray[i].type.includes("electric")) 
            {
                divCard[i].style.background='linear-gradient(to top, white, yellow)'
            }

            if(pokemonArray[i].type.includes("ice")) 
            {
                divCard[i].style.background='linear-gradient(to top, white, blue)'
            }

            if(pokemonArray[i].type.includes("flying") && !(pokemonArray[i].type.includes("fire"))) 
            {
                divCard[i].style.background='linear-gradient(to top, white, rgb(124, 201, 220))'
            }

            if(pokemonArray[i].type.includes("fighting")) 
            {
                divCard[i].style.background="linear-gradient(to top, white,  rgb(152, 5, 5))"
            }

            if(pokemonArray[i].type.includes("dragon")) 
            {
                divCard[i].style.background="linear-gradient(to top, white,  rgb(4, 122, 200))"
            }

            if(pokemonArray[i].type.includes("dark")) 
            {
                divCard[i].style.background='linear-gradient(to top, black, white, black)'
                divCard[i].style.color='white'
            }            
    }
}

function renderJohto() {
    root.innerHTML = '';
    console.log("Johto")
    const divCard = document.getElementsByClassName('divCard')

    for(let i = 151; i < 251; i++)
    {
        let j = i - 151
        root.innerHTML += `<div class="divCard">
        <p class="name">${pokemonArray[i].id}: ${pokemonArray[i].name}</p>
        <img src="${pokemonArray[i].image}" class="pokemon-image">
        <p class="type"> Type: ${pokemonArray[i].type}</p></div>`;

        if(pokemonArray[i].type.includes("grass"))
        {
            divCard[j].style.background='linear-gradient(to top, white, rgb(103, 215, 103))'
        }

        if(pokemonArray[i].type.includes("fire"))
        {
            divCard[j].style.background='linear-gradient(to top, white, orange)'
        }

        if(pokemonArray[i].type.includes("water"))
        {
            divCard[j].style.background='linear-gradient(to top, white, blue)'
        }

        if(pokemonArray[i].type.includes("bug") && !(pokemonArray[i].type.includes("poison")))
        {
            divCard[j].style.background='linear-gradient(to top, white, yellow)'
        }

        if(pokemonArray[i].type.includes("poison") && !(pokemonArray[i].type.includes("grass"))) 
        {
            divCard[j].style.background='linear-gradient(to top, white, purple)'
        }
        if(pokemonArray[i].type.includes("steel")) 
        {
            divCard[j].style.background='linear-gradient(to top, white, gray)'
        }

        if(pokemonArray[i].type.includes("psychic") || pokemonArray[i].type.includes("fairy")) 
        {
            divCard[j].style.background='linear-gradient(to top, white, pink, pink)'
        }

        if(pokemonArray[i].type.includes("ground") || pokemonArray[i].type.includes("rock")) 
        {
            divCard[j].style.background='linear-gradient(to top, white, brown)'
        }

        if(pokemonArray[i].type.includes("electric")) 
        {
            divCard[j].style.background='linear-gradient(to top, white, yellow)'
        }

        if(pokemonArray[i].type.includes("ice")) 
        {
            divCard[j].style.background='linear-gradient(to top, white, blue)'
        }

        if(pokemonArray[i].type.includes("flying") && !(pokemonArray[i].type.includes("fire"))) 
        {
            divCard[j].style.background='linear-gradient(to top, white, rgb(124, 201, 220))'
        }

        if(pokemonArray[i].type.includes("fighting")) 
        {
            divCard[j].style.background="linear-gradient(to top, white,  rgb(152, 5, 5))"
        }

        if(pokemonArray[i].type.includes("dragon")) 
        {
            divCard[j].style.background="linear-gradient(to top, white,  rgb(4, 122, 200))"
        }

        if(pokemonArray[i].type.includes("dark")) 
        {
            divCard[j].style.background='linear-gradient(to top, black, white, black)'
            divCard[j].style.color='white'
        }        

    }
}

function renderHoenn() {
    root.innerHTML = '';
    console.log("Hoenn")

    const divCard = document.getElementsByClassName('divCard')

    for(let i = 251; i < 386; i++)
    {
        let j = i - 251
        root.innerHTML += `<div class="divCard">
        <p class="name">${pokemonArray[i].id}: ${pokemonArray[i].name}</p>
        <img src="${pokemonArray[i].image}" class="pokemon-image">
        <p class="type"> Type: ${pokemonArray[i].type}</p></div>`;

        if(pokemonArray[i].type.includes("grass"))
        {
            divCard[j].style.background='linear-gradient(to top, white, rgb(103, 215, 103))'
        }

        if(pokemonArray[i].type.includes("fire"))
        {
            divCard[j].style.background='linear-gradient(to top, white, orange)'
        }

        if(pokemonArray[i].type.includes("water"))
        {
            divCard[j].style.background='linear-gradient(to top, white, blue)'
        }

        if(pokemonArray[i].type.includes("bug") && !(pokemonArray[i].type.includes("poison")))
        {
            divCard[j].style.background='linear-gradient(to top, white, yellow)'
        }

        if(pokemonArray[i].type.includes("poison") && !(pokemonArray[i].type.includes("grass"))) 
        {
            divCard[j].style.background='linear-gradient(to top, white, purple)'
        }
        if(pokemonArray[i].type.includes("steel")) 
        {
            divCard[j].style.background='linear-gradient(to top, white, gray)'
        }

        if(pokemonArray[i].type.includes("psychic") || pokemonArray[i].type.includes("fairy")) 
        {
            divCard[j].style.background='linear-gradient(to top, white, pink, pink)'
        }

        if(pokemonArray[i].type.includes("ground") || pokemonArray[i].type.includes("rock")) 
        {
            divCard[j].style.background='linear-gradient(to top, white, brown)'
        }

        if(pokemonArray[i].type.includes("electric")) 
        {
            divCard[j].style.background='linear-gradient(to top, white, yellow)'
        }

        if(pokemonArray[i].type.includes("ice")) 
        {
            divCard[j].style.background='linear-gradient(to top, white, blue)'
        }

        if(pokemonArray[i].type.includes("flying") && !(pokemonArray[i].type.includes("fire"))) 
        {
            divCard[j].style.background='linear-gradient(to top, white, rgb(124, 201, 220))'
        }

        if(pokemonArray[i].type.includes("fighting")) 
        {
            divCard[j].style.background="linear-gradient(to top, white,  rgb(152, 5, 5))"
        }

        if(pokemonArray[i].type.includes("dragon")) 
        {
            divCard[j].style.background="linear-gradient(to top, white,  rgb(4, 122, 200))"
        }

        if(pokemonArray[i].type.includes("dark")) 
        {
            divCard[j].style.background='linear-gradient(to top, black, white, black)'
            divCard[j].style.color='white'
        }         
    }
}

function renderSinnoh() {
    root.innerHTML = '';
    console.log("Sinnoh")

    const divCard = document.getElementsByClassName('divCard')
    for(let i = 386; i < 494; i++)
    {
        let j = i - 386
        root.innerHTML += `<div class="divCard">
        <p class="name">${pokemonArray[i].id}: ${pokemonArray[i].name}</p>
        <img src="${pokemonArray[i].image}" class="pokemon-image">
        <p class="type"> Type: ${pokemonArray[i].type}</p></div>`;

        if(pokemonArray[i].type.includes("grass"))
        {
            divCard[j].style.background='linear-gradient(to top, white, rgb(103, 215, 103))'
        }

        if(pokemonArray[i].type.includes("fire"))
        {
            divCard[j].style.background='linear-gradient(to top, white, orange)'
        }

        if(pokemonArray[i].type.includes("water"))
        {
            divCard[j].style.background='linear-gradient(to top, white, blue)'
        }

        if(pokemonArray[i].type.includes("bug") && !(pokemonArray[i].type.includes("poison")))
        {
            divCard[j].style.background='linear-gradient(to top, white, yellow)'
        }

        if(pokemonArray[i].type.includes("poison") && !(pokemonArray[i].type.includes("grass"))) 
        {
            divCard[j].style.background='linear-gradient(to top, white, purple)'
        }
        if(pokemonArray[i].type.includes("steel")) 
        {
            divCard[j].style.background='linear-gradient(to top, white, gray)'
        }

        if(pokemonArray[i].type.includes("psychic") || pokemonArray[i].type.includes("fairy")) 
        {
            divCard[j].style.background='linear-gradient(to top, white, pink, pink)'
        }

        if(pokemonArray[i].type.includes("ground") || pokemonArray[i].type.includes("rock")) 
        {
            divCard[j].style.background='linear-gradient(to top, white, brown)'
        }

        if(pokemonArray[i].type.includes("electric")) 
        {
            divCard[j].style.background='linear-gradient(to top, white, yellow)'
        }

        if(pokemonArray[i].type.includes("ice")) 
        {
            divCard[j].style.background='linear-gradient(to top, white, blue)'
        }

        if(pokemonArray[i].type.includes("flying") && !(pokemonArray[i].type.includes("fire"))) 
        {
            divCard[j].style.background='linear-gradient(to top, white, rgb(124, 201, 220))'
        }

        if(pokemonArray[i].type.includes("fighting")) 
        {
            divCard[j].style.background="linear-gradient(to top, white,  rgb(152, 5, 5))"
        }

        if(pokemonArray[i].type.includes("dragon")) 
        {
            divCard[j].style.background="linear-gradient(to top, white,  rgb(4, 122, 200))"
        }

        if(pokemonArray[i].type.includes("dark")) 
        {
            divCard[j].style.background='linear-gradient(to top, black, white, black)'
            divCard[j].style.color='white'
        }            
    }
}