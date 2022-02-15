const mangaembed = require('../../Embeds/RandomEmbeds/Anime_Manga/mangaembed')

module.exports = {
    name: 'manga' ,
    aliases: [],
    permissions: [],
    cooldown: 0,
    description: 'Procura manga 😴',
    execute(Client, msg, args, Discord) {

        let query = args.join(' ');
        if(!query) return msg.channel.send('Preciso de um nome!')
        mangaembed(Client, msg, args, Discord)     
    }
}
