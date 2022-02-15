const ytsr = require("ytsr")
const youtubeembed = require('../../Embeds/RandomEmbeds/Really_Random_Embeds/youtubeembed')

module.exports = {
    name: 'youtube' ,
    aliases: ['ytsr', 'ytsearch', 'yt'],
    permissions: [],
    cooldown: 0,
    description: 'Procura no Youtube😴',
    async execute(Client, msg, args, Discord) {

        let query = args.join("")
        if(!query) return msg.channel.send("Preciso de palavras!")

        const res = await ytsr(query).catch(e => {
            return msg.channel.send('Sem resultados')
        })

        const video = res.items.filter(i => i.type === "video")[0];
        if(!video) return msg.channel.send('Sem resultados')
        youtubeembed (Client, msg, args, Discord, video)
    }
}