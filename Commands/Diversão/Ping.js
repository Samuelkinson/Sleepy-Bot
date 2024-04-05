module.exports = {
  name: "ping",
  aliases: [],
  permissions: ["SEND_MESSAGES"],
  cooldown: 5,
  description: "Ping comando😴",
  premium: true,
  premiumguild: true,
  owner: true,
  execute(Client, msg, args, Discord) {
    msg.channel.send("A calcular o ping...").then((resultMessage) => {
      const ping = resultMessage.createdTimestamp - msg.createdTimestamp;
    let embed = new Discord.MessageEmbed()
    .setColor('#ff748c')
    .setTitle('🏓 Ping')
    .setImage(`https://i.pinimg.com/originals/47/91/e7/4791e79bd845379bbbe5f4972cc10174.gif`)
    .addFields(
    {name: '🏓Latência:', value: `${ping}ms`, inline: true},
    {name: '🏓Latência API:', value: `${Math.round(Client.ws.ping)}ms`, inline: true},
    )
    .setFooter({
    text: `Pong🏓`, 
    iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
    })
    msg.channel.send({embeds:[embed]})
    });

  },
};
