const roastEmbed = require('../../Embeds/RandomEmbeds/RoastEmbed')
const fetch = require('node-fetch')
module.exports = {
    name: 'piada' ,
    aliases: ['r', 'humilha', 'roast'],
    permissions: ['SEND_MESSAGES'],
    cooldown: 5,
    description: 'Roasts the user',
    async execute(Client, msg, args, Discord) {
        const Delay = 2000
        if(args[0]){
            const mentionedMember = msg.mentions.users.first();
            if(!mentionedMember) return msg.channel.send({content: 'Não encontrei esse ser humano'})
            if(mentionedMember){
                fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
                    .then(res => res.json())
                    .then(json => {           
                       msg.channel.send({content: `Arranjando a melhor forma de insultar... ` }).then(m =>{
                            setTimeout(() => {
                                m.delete();
                                roastEmbed(Discord, Client, mentionedMember, json, msg)
                            }, Delay);
                        })
                    })
            }
        }else{                   
            const user = msg.author.username 
            fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
                .then(res => res.json())
                .then(json => {           
                    msg.channel.send({content: `Arranjando a melhor forma de insultar... ` }).then(m =>{
                        setTimeout(() =>{
                            m.delete();
                            let SeftRoastEmbed = new Discord.MessageEmbed()
                            .setTitle(`\`${user}\` decidiu ser humilhado`)
                            .setColor('#ff748c')
                            .setDescription(json.insult)
                            .setFooter(Client.user.tag, Client.user.displayAvatarURL({dynamic: true, format: 'png', size: 1024})) 
                            .setTimestamp()

                            msg.channel.send({embeds: [SeftRoastEmbed]})
                        }, Delay)
                    })
                })
        
        }
     }
}