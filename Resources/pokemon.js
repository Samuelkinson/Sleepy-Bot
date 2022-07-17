//Vai pokeapi e pega os dados de todos os pokemons
const fetch = require('node-fetch');

module.exports = {
    Pokemon: async function getPokemon(pokemon) {
        response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(res => res.json());
        return response;
}
}