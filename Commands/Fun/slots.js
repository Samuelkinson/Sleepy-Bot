const slots = require('../../Embeds/RandomEmbeds/Really_Random_Embeds/slotsembed')

module.exports = {
    name: 'slots' ,
    aliases: [],
    permissions: [],
    cooldown: 0,
    description: 'Joga slots😴',
    execute(Client, msg, args, Discord) {

  	slots(Client, msg, args, Discord)

	}
}
