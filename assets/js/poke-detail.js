const pokemonDetail = document.getElementById('pokemonDetail');
const loadDetail = document.getElementById('loadDetail');
const loadMore = document.getElementById('loadMore')


const maxRecords1 = 1100
const limit1 = 6
let offset1 = 0;

function convertPokemonDetail(pokemon) {
    return `<section id="pokemonDetail" class="contentDT ${pokemon.type}">
                <div class="headerDT">
                    <div>
                        <a href="index.html">
                            <p class="voltar"> <<< </p>
                        </a>
                        <span class="nameDT">${pokemon.name}</span>
                    </div>

                    <p>
                        <span class="numberDT">#${pokemon.number}</span>
                    </p>
                </div>

                <div class="pokemonView">

                    <span class="arrow">
                        
                    </span>

                    <img src="${pokemon.photo}" alt="${pokemon.name}">

                    <span class="arrow">
                        
                    </span>                

                </div>
                <div class="pokeStatus">

                    <ol class="typeColor types">
                    ${pokemon.types.map((type) => 
                        `<li class="${type} type">${type}</li>`).join('')}
                    </ol>

                    <p class="infoTitle">about</p>

                    <div class="pokeAbout">
                        <div class="weight">
                            <div class="aboutInfo">
                               
                                <p>${pokemon.weight} kg</p>
                            </div>
                            <p class="p">weight</p>
                        </div>

                        

                        <div class="height">
                            <div class="aboutInfo">
                                <img src="assets/imagens/height.png" alt="">
                                <p>${pokemon.height} m</p>
                            </div>
                            <p class="p">height</p>
                        </div>

                       

                        <div class="moves">
                            <ol>
                            ${pokemon.abilities.map((ability) => 
                                `<li>${ability}</li>`).join('')}
                            </ol>
                            <p class="pp">moves</p>
                        </div>
                    </div>

                    <p class="infoTitle">Base Stats</p>

                        <div class="stats" ${pokemon.type}>
                            <div class="stats_name">
                                <ol>
                                    <li>HP</li>
                                    <li>ATK</li>
                                    <li>DEF</li>
                                    <li>SATK</li>
                                    <li>SDEF</li>
                                    <li>SPD</li>
                                </ol>
                            </div>

                            <img class="divisor" src="assets/imagens/frame1.png" alt="">

                            <div class="stats_value">
                                <ol>
                                ${pokemon.stats.map((stat) => 
                                    `<li>${stat}</li>`).join('')}
                                    
                                </ol> 
                            </div>

                            <div class="container-barra">
                                <div class="barra ${pokemon.type}"></div>
                                <div class="barra ${pokemon.type}"></div>
                                <div class="barra ${pokemon.type}"></div>
                                <div class="barra ${pokemon.type}"></div>
                                <div class="barra ${pokemon.type}"></div>
                                <div class="barra ${pokemon.type}"></div>
                            </div>
                        </div>

                </div>
            </section>`
}

function loadPokemonDetail(id) {
    
    pokeApi.getPokemons(id-1, 1).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonDetail).join('');
        pokemonDetail.innerHTML += newHtml;
    })

    
    pokemonList.style.display = "none"
    loadMoreButton.style.display = "none"
}
loadPokemonDetail();
pokemonDetail.addEventListener('click', () => {
    loadPokemonDetail();
})

loadMore.addEventListener('click', () => {
    offset1 += limit1
    const qtdRecordsWithNexPage = offset1 + limit1

    if (qtdRecordsWithNexPage >= maxRecords1) {
        const newLimit = maxRecords1 - offset1
        loadPokemonDetail(offset1, newLimit)

        
    } else {
        loadPokemonDetail(offset1, limit1)
    }
})