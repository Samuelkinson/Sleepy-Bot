module.exports = {
    name: 'useravatar' ,
    aliases: ['uavatar', 'avatar'],
    permissions: [],
    cooldown: 0,
    description: '',
   async execute(Client, msg, args, Discord) {

        if (!msg.mentions.users.size) {     
            let embed = new Discord.MessageEmbed()
            
              .setColor("#a35ecc")
              .setAuthor(msg.author.username + "'s Avatar", msg.author.displayAvatarURL)
              .setImage(msg.author.displayAvatarURL({size: 4096, dynamic: true}))  
            
           await msg.channel.send({embeds: [embed]}) 
        }
    
        const avatarList = msg.mentions.users.map(user => {
            return `${user.username},${user.displayAvatarURL({size: 4096, dynamic: true})}`;
        });
    
        for (var i = 0; i < avatarList.length; i++) {
            let Username = avatarList[i].split(',')[0];
            let AvatarURL = avatarList[i].split(",").pop();
    
            let embed = new Discord.MessageEmbed()
              .setColor("#a35ecc")
              .setAuthor(Username + "'s Avatar", AvatarURL)
              .setImage(AvatarURL)
            
              await msg.channel.send({embeds: [embed]}) 
        }
    }
}