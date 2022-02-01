module.exports = (Client, msg, args, Discord, user, response) =>{

    const embed = new Discord.MessageEmbed()
              .setTitle(user.username + " levou poke de " + msg.author.username)
              .setImage(response.body.url)
              .setColor("#ff748c")
              .setDescription((user.toString() + " levou poke de " + msg.author.toString()))
              .setFooter({
                  text: `Poked`,
                })
              .setURL(response.body.url);
     return msg.channel.send({embeds: [embed]}).then(msg.delete());

}