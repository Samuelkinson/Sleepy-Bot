const roastEmbed = require('../../Embeds/RandomEmbeds/roastembed/RoastEmbed')
const SelfroastEmbed = require('../../Embeds/RandomEmbeds/roastembed/SelfRoastEmbed')
const fetch = require('node-fetch')

module.exports = {
    name: 'piada' ,
    aliases: ['r', 'humilha', 'roast'],
    permissions: ['SEND_MESSAGES'],
    cooldown: 5,
    description: 'Roasts the user',
    async execute(Client, msg, args, Discord) {
        
        if(args[0]){
            const mentionedMember = msg.mentions.users.first();
            if(!mentionedMember) return msg.channel.send({content: 'Não encontrei esse ser humano'})
            if(mentionedMember){
                fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
                    .then(res => res.json())
                    .then(json => {           
                    roastEmbed(Discord, Client, mentionedMember, json, msg)
                    })
            }   
        } else {                   
            const user = msg.author.username 
            fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
                .then(res => res.json())
                .then(json => {                             
                    SelfroastEmbed(Client, msg, args, Discord, user, json)
                })
        }
     }
}