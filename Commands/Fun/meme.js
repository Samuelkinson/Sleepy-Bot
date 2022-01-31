const fetch = require('node-fetch')

module.exports = {
    name: 'meme' ,
    aliases: ['memes', 'rir'],
    permissions: [],
    cooldown: 0,
    description: 'Sends a meme',
    async execute(Client, msg, args, Discord) {
        fetch('https://meme-api.herokuapp.com/gimme')
            .then(res => res.json())
            .then(async json => {

                 const memeEmbed = new Discord.MessageEmbed()
                    .setColor('#ff748c')
                    .setTitle(json.title)
                    .setImage(json.url)
                    .addFields(
                        {name: 'Pediu o meme:', value: `${msg.author.tag}`, inline: true}, 
                        {name: 'Link:', value: `${json.postLink}`, inline: true},
                        )
                    .setFooter({
                        text:`Subreddit r/${json.subreddit} `
                    })

                 let message = await msg.channel.send(`A procura de um meme...`)
                 message.edit({embeds:[memeEmbed]}).then(msg.delete());
        }
            )
   
    }
}