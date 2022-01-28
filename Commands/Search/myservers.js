module.exports = {
    name: 'sleepyservers' ,
    aliases: ['sleepsv', 'mysv'],
    permissions: [],
    cooldown: 0,
    description: 'Mostra os meus servidores',
    execute(Client, msg, args, Discord) {

     let embed = new Discord.MessageEmbed()
         .setColor('#37dc0c')
         .setTitle('Os meus servidores')
         .setDescription(`Estou em ${Client.guilds.cache.size} servidores!`) 
         .setFooter(`Sleepy Servers`,  Client.user.displayAvatarURL({dynamic: true, format :'png'}))
      return msg.channel.send({embeds:[embed]}).then(msg.delete());

    }
}