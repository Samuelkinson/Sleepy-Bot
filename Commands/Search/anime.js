const {get} = require("request-promise-native")


module.exports = {
    name: 'anime' ,
    aliases: [],
    permissions: [],
    cooldown: 0,
    description: 'Procura o teu anime favorito',
    execute(Client, msg, args, Discord) {

        let query = args.join(' ');
        if(!query) return msg.channel.send('Preciso de um nome!')

        let option = {
            url: `https://kitsu.io/api/edge/anime?filter[text]=${args.join(" ")}`,
            method: `GET`,
            headers:{
                'Content-Type': "application/vnd.api+json",
                'Accept': "application/vnd.api+json",    
            }, 
            json: true

        }
        msg.channel.send('A procura do teu anime...').then(msg =>{
            get(option).then(mat =>{
                 /* console.log(mat.data[0])  */ //Kitsu.io api

                            
                let embed = new Discord.MessageEmbed()
                    .setColor('#37dc0c')
                    .setTitle(mat.data[0].attributes.titles.en_jp)
                    .setDescription(mat.data[0].attributes.synopsis)
                    .setThumbnail(mat.data[0].attributes.posterImage.original)
                    //Fields 
                    .addField('📺Tipo:', mat.data[0].attributes.showType, true) 
                    .addField('📰Publicado.', `${mat.data[0].attributes.startDate} **ATÉ** ${mat.data[0].attributes.endDate ? mat.data[0].attributes.endDate: "N/A"}`, true )//Start end Date/ if end date null then return N/A instead
                    .addField('⌚Estado:', mat.data[0].attributes.status, true)
                    .addField('😴Nº de episódios:', `${mat.data[0].attributes.episodeCount ? mat.data[0].attributes.episodeCount: "N/A"}`, true)
                    .addField('⏭Próximo episódio:', `${mat.data[0].attributes.nextRelease ? mat.data[0].attributes.nextRelease: "N/A"}`, true)
                    .addField('⏳ Duração:', `${mat.data[0].attributes.episodeLength ? mat.data[0].attributes.episodeLength: "N/A"}`, true)
                    .addField('⭐Ranking:', `${mat.data[0].attributes.ratingRank}`, true)
                    .addField('⭐Média do Rating:', `${mat.data[0].attributes.averageRating}`, true)
                    .addField('🔞Age Rating/NSFW', `${mat.data[0].attributes.ageRating}/${mat.data[0].attributes.nsfw}`, true) 

                    .setFooter(`Informações vindas de kitsu.io 😴 `,  Client.user.displayAvatarURL({dynamic: true, format :'png'})) 
                msg.channel.send({embeds:[embed]})  

            }).catch(err => {
              return msg.channel.send(`Não encontrei: **${args.join(" ")}**!`)
          
            })
        })
    }
}