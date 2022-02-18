const axios = require('axios');
const answerembed = require('../../Embeds/CommandEmbeds/SearchEmbeds/urbanembed')

module.exports = {
    name: 'urban' ,
    aliases: [],
    permissions: [],
    cooldown: 0,
    description: 'Dicionário em inglês 😴',
    premium: false,
    premiumguild: false, 
    owner: false,
    async execute(Client, msg, args, Discord) {

        let query = args.join(' ');
        if(!query) return msg.channel.send('Preciso de uma palavra!')
        query = encodeURIComponent(query);
        const {data: {list}} = await axios.get(`https://api.urbandictionary.com/v0/define?term=${query}`)
        const [answer] = list 
       
            answerembed(Client, msg, args, Discord, answer)    
    }
}

