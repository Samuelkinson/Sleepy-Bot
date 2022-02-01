module.exports =(Client, msg, args, Discord) =>{

    const iq = Math.floor(Math.random() * 226);
    const embedauthor = new Discord.MessageEmbed()
        .setTitle("🧠 Teste de QI:")
        .setDescription("💡 " + msg.author.username + " QI: `" + iq + "`")
        .setColor(`#ff748c`)

    msg.channel.send({embeds:[embedauthor]}).then(msg.delete());

}
        