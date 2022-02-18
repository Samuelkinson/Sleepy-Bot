const getPokemon = require('../../Resources/pokemon')
const pokemonembed = require('../../Embeds/CommandEmbeds/SearchEmbeds/pokemon')

module.exports = {
    name: 'pokémon' ,
    aliases: ['pk', 'pokemon', 'pkinfo'],
    permissions: [],
    cooldown:[],
    description: '',
    premium: false,
    premiumguild: false, 
    owner: false,
    async execute(Client, msg, args, Discord) {

        const pokemon = msg.content.toLowerCase().split(" ")[1]; 
        if(!args[0])return msg.channel.send({content:'Preciso de um pokémon'});
        const pokeData = await getPokemon.Pokemon(pokemon)
        try {
            pokemonembed(Client, msg, args, Discord, pokeData)
        }
        catch(err) {
            console.log(err)
            msg.channel.send({content:`Não encontrei ${pokemon}.`}); 
        }
    }
}
