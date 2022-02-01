module.exports =(Client, msg, args, Discord) =>{

    const iq = Math.floor(Math.random() * 226);
    const mentionMember = msg.mentions.members.first();
    const embedmentionmember = new Discord.MessageEmbed()
        .setTitle("🧠 Teste de QI:")
        .setDescription("💡 " + mentionMember.user.username + " QI: `" + iq + "`") 
        .setColor(`#ff748c`)

    return msg.channel.send({embeds:[embedmentionmember]}).then(msg.delete());    
}