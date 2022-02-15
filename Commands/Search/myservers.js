module.exports = {
    name: 'sleepyservers' ,
    aliases: ['sleepsv', 'mysv'],
    permissions: [],
    cooldown: 0,
    description: 'Mostra os Sleepy Servers 😴',
    execute(Client, msg, args, Discord) {

     let embed = new Discord.MessageEmbed()
         .setColor('#37dc0c')
         .setTitle('🛐Sleepy Servers')
         .setDescription(`😴Estou em ${Client.guilds.cache.size} servidores!`) 
         .setFooter({
            text:`Sleepy Servers`,  
            iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
            })
         
      return msg.channel.send({embeds:[embed]}).then(msg.delete());

    }
}