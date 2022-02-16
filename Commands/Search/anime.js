const animeembed = require('../../Embeds/CommandEmbeds/SearchEmbeds/Anime_Manga/animeembed')

module.exports = {
    name: 'anime' ,
    aliases: [],
    permissions: [],
    cooldown: 0,
    description: 'Procura anime 😴',
    execute(Client, msg, args, Discord) {

        let query = args.join(' ');
        if(!query) return msg.channel.send('Preciso de um nome!')
        animeembed(Client, msg, args, Discord)
    }
}