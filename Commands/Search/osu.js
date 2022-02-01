const nodeosu = require('node-osu')
const osuembed = require('../../Embeds/RandomEmbeds/Really_Random_Embeds/osuembed')
const configosu = require('../../config.json').osuapikey
const osu = new nodeosu.Api(configosu, { // Set your API Key in config.json
    resAsError: true // Reject on not found instead of returning nothing. (default: true)
  })

module.exports = {
    name: 'osu' ,
    aliases: [],
    permissions: [],
    cooldown: 0,
    description: 'Osu command',
    async execute(Client, msg, args, Discord) {

        const user = args.join(' ') 
        try {
            const osuUser = await osu.getUser({ u: user })
            osuembed(Client, msg, Discord, osuUser)
        } catch (error) {
            return msg.channel.send('Player not found')
        }
        
         
    }       
}
