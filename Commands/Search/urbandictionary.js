const axios = require('axios')

module.exports = {
    name: 'urban' ,
    aliases: [],
    permissions: [],
    cooldown: 0,
    description: '',
    async execute(Client, msg, args, Discord) {

        let query = args.join(' ');
        if(!query) return msg.channel.send('Preciso de uma palavra!')

        query = encodeURIComponent(query);

        const {data: {list}} = await axios.get(`https://api.urbandictionary.com/v0/define?term=${query}`)

        const [answer] = list 
        try {
            let embed = new Discord.MessageEmbed()
            .setColor('#37dc0c')
            .setTitle(answer.word)
            .setURL(answer.permalink)
            .addField('Definição', trim(answer.definition))
            .addField('Exemplo', trim(answer.example))
            /* .addField('Ratings')  */
            .addFields(
                {name: `Rating:`, value: `${answer.thumbs_up}👍`, inline: true},
                {name: `Rating:` , value: `${answer.thumbs_down}👎`, inline: true},
                )
            .setFooter(`Usei o Urban Dictionary`,  Client.user.displayAvatarURL({dynamic: true, format :'png'}))
            msg.channel.send({embeds:[embed]})



        }catch(err) {
          
            msg.channel.send({content:`Não consegui encontrar`});
        }
          
            

    }
}

function trim(input){
    return input.lenght > 1024 ? `${string.slic(0, 1020)} ...`: input;
}

