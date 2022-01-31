const suicideembed = require("../../Embeds/RandomEmbeds/Kill_Embeds/suicideembed");
const killedembed = require("../../Embeds/RandomEmbeds/Kill_Embeds/killembed");

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
            
            if(args[0].toLowerCase() === 'me') return suicideembed(Client, msg, args, Discord, cmd, member) ; //Killed himself
            if(!mentionMember) return msg.channel.send({content:'Não encontrei'}).then(msg.delete()); //No name without identity   
             if(mentionMember) return killedembed(Client, msg, args, Discord, cmd, member,  mentionMember) ; //Dude got killed

        } catch (err){
            return msg.channel.send({content:'Não encontrei'}).then(msg.delete());
        }              
    }
}