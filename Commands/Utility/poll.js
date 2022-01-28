module.exports = {
    name: 'poll' ,
    aliases: [],
    permissions: [],
    cooldown: 5,
    description: 'Starts a poll',
    async execute(Client, msg, args, Discord) {
        
        let theDescription = args.slice(0).join(` `)

        if(!theDescription) return msg.reply({content:`Preciso que escrevas algo!`})

        const embed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setTitle(`Poll`)
        .setDescription(theDescription)
        .setFooter(`Poll started by: `+ msg.author.username +'#'+ msg.author.discriminator) 

        let msgEmbed = await msg.channel.send({embeds:[embed]}).then(msg.delete());    // 👎/👍 ✅/❌  And deletes user msg
        await msgEmbed.react('✅') 
        await msgEmbed.react('❌')
    }
}