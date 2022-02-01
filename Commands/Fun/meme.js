const fetch = require('node-fetch')
const memeEmbed = require('../../Embeds/RandomEmbeds/Really_Random_Embeds/memeembed')

module.exports = {
    name: 'meme' ,
    aliases: ['memes', 'rir'],
    permissions: [],
    cooldown: 0,
    description: 'Sends a meme',
    async execute(Client, msg, args, Discord) {

        fetch('https://meme-api.herokuapp.com/gimme')
            .then(res => res.json())
            .then(async json => {

                 return memeEmbed(Client, msg, args, Discord, json)
        }
            )
   
    }
}