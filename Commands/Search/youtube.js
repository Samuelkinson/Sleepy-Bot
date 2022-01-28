const ytsr = require("ytsr")

module.exports = {
    name: 'youtube' ,
    aliases: ['ytsr', 'ytsearch'],
    permissions: [],
    cooldown: 0,
    description: '',
    async execute(Client, msg, args, Discord) {

        let query = args.join("")
        if(!query) return msg.channel.send("Preciso de palavras!")

        const res = await ytsr(query).catch(e => {
            return msg.channel.send('Sem resultados')
        
        })
        const video = res.items.filter(i => i.type === "video")[0];
        if(!video) return msg.channel.send('Sem resultados')

        let embed = new Discord.MessageEmbed()
                .setColor('#37dc0c')
                .setTitle(video.title)
                .setImage(video.bestThumbnail.url)
                .setAuthor(video.author.name)
                .addField("Views", video.views.toLocaleString(), true)
                .addField("Duração", video.duration, true)
                .setDescription(video.url)
                .setFooter(`Youtube Search!`,  Client.user.displayAvatarURL({dynamic: true, format :'png'}))
                msg.channel.send({embeds:[embed]})
    }
}