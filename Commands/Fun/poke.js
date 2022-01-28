const superagent = require("snekfetch")

module.exports = {
    name: 'poke' ,
    aliases: [],
    permissions: [],
    cooldown: 0,
    description: 'Dá poke em alguém',
    execute(Client, msg, args, Discord) {
        const user = msg.mentions.users.first();

        if(!user) return msg.channel.send('Preciso de uma pessoa!')
        if(msg.author === user) return msg.channel.send('Não te podes fazer isto!')

        superagent.get('https://nekos.life/api/v2/img/poke')
                .end((err, response) => {
              const embed = new Discord.MessageEmbed()
              .setTitle(user.username + " levou poke de " + msg.author.username)
              .setImage(response.body.url)
              .setColor("#ff748c")
              .setDescription((user.toString() + " levou poke de " + msg.author.toString()))
              .setFooter(`Poked`)
              .setURL(response.body.url);
            return msg.channel.send({embeds: [embed]}).then(msg.delete());

            }).catch((err) => msg.channel.send('Erro'));
    }
}