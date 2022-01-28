const superagent = require('superagent')


module.exports = {
    name: 'dadjokes' ,
    aliases: ['dadjoke'],
    permissions: [],
    cooldown: 0,
    description: 'Piadas de pai',
    async execute(Client, msg, args, Discord) {
        
        await superagent
        .get('http://icanhazdadjoke.com/')
        .set('Accept', 'application/json')
        .end((err, response) => {

        let jEmbed = new Discord.MessageEmbed()
        .setTitle("Piada de pai")
        .setDescription(response.body.joke)
        .setColor("#ff748c");
        msg.channel.send(({embeds:[jEmbed]})).then(msg.delete());
		})
    }
}

  