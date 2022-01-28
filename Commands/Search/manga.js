const {get} = require("request-promise-native")


module.exports = {
    name: 'manga' ,
    aliases: [],
    permissions: [],
    cooldown: 0,
    description: 'Procura o teu manga favorito',
    execute(Client, msg, args, Discord) {

        let query = args.join(' ');
        if(!query) return msg.channel.send('Preciso de um nome!')

        let option = {
            url: `https://kitsu.io/api/edge/manga?filter[text]=${args.join(" ")}`,
            method: `GET`,
            headers:{
                'Content-Type': "application/vnd.api+json",
                'Accept': "application/vnd.api+json",    
            }, 
            json: true

        }
        msg.channel.send('A procura do teu manga...').then(msg =>{
            get(option).then(mat =>{
                 /*  console.log(mat.data[0])   */

                            
                let embed = new Discord.MessageEmbed()
                    .setColor('#37dc0c')
                    .setTitle(mat.data[0].attributes.titles.en_jp)
                    .setDescription(mat.data[0].attributes.synopsis)
                    .setThumbnail(mat.data[0].attributes.posterImage.original)
                    //Fields 
                     .addField('📺Tipo:', mat.data[0].attributes.mangaType, true) 
                    .addField('📰Publicado.', `${mat.data[0].attributes.startDate} **ATÉ** ${mat.data[0].attributes.endDate ? mat.data[0].attributes.endDate: "N/A"}`, true )//Start end Date/ if end date null then return N/A instead
                    .addField('⌚Estado:', mat.data[0].attributes.status, true)
                    .addField('📚Nº de Volumes:', `${mat.data[0].attributes.volumeCount ? mat.data[0].attributes.volumeCount: "N/A"}`, true)
                    .addField('⏭Próximo capítulo:', `${mat.data[0].attributes.nextRelease ? mat.data[0].attributes.nextRelease: "N/A"}`, true)
                    .addField('📔 Nº de capítulos:', `${mat.data[0].attributes.chapterCount ? mat.data[0].attributes.chapterCount: "N/A"}`, true)
                    .addField('⭐Ranking:', `${mat.data[0].attributes.ratingRank}`, true)
                    .addField('⭐Média do Rating:', `${mat.data[0].attributes.averageRating}`, true)
                    .setFooter(`Informações vindas de kitsu.io 😴 `,  Client.user.displayAvatarURL({dynamic: true, format :'png'})) 
                msg.channel.send({embeds:[embed]})  

            }).catch(err => {
              return msg.channel.send(`Não encontrei: **${args.join(" ")}**!`)
          
            })
        })
    }
}