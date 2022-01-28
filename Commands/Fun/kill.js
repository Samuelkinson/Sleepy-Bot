
module.exports = {
    name: 'kill' ,
    aliases: ['murder', 'takecareof'],
    permissions: [],
    cooldown: 0,
    description: 'Sick of someone? Easy! Just kill them!',
    execute(Client, msg, args, Discord, cmd) {
        try{
            const mentionMember = msg.mentions.members.first();
            const member = msg.mentions.members.first() || msg.member
    
            let suicideembed = new Discord.MessageEmbed()
            .setColor('#ff748c')
            .setTitle(`\`${member.user.username}\` \*\*matou-se\*\* 💥`)
            .setThumbnail(`${member.user.displayAvatarURL({dynamic: true, size: 512})}`)
            .addFields(
            {name: 'Porque?', value: ':sob:', inline: true},
            )
            .setFooter(`${member.user.username} Vou sentir saudades`,  Client.user.displayAvatarURL({dynamic: true, format :'png'})) 
    
            if(args[0].toLowerCase() === 'me')return msg.channel.send({embeds:[suicideembed]}).then(msg.delete()); //Killed himself
            if(!mentionMember) return msg.channel.send({content:'Não encontrei'}).then(msg.delete()); //No name without identity   

         
            let killedembed = new Discord.MessageEmbed()
                .setColor('#ff748c')
                .setTitle(`\`${mentionMember.user.username}\` foi \*\* morto :knife: \*\*`)
                .setThumbnail(`${member.user.displayAvatarURL({dynamic: true, size: 512})}`)
                .addFields(
                {name: 'Quem?', value: ':zipper_mouth: ', inline: true},
                {name: 'Como?', value: ':face_with_monocle: ', inline: true},
                {name: 'Porque?', value: ':sleeping: ', inline: true},
                )
                .setFooter(`Não sei de nada`,  Client.user.displayAvatarURL({dynamic: true, format :'png'}))
            
             if(mentionMember) return msg.channel.send({embeds:[killedembed]}).then(msg.delete()); //Dude got killed
    

        } catch (err){
            return msg.channel.send({content:'Não encontrei'}).then(msg.delete());
        }
                   
}
}