const Emojis = require('../../Resources/Emojis.json')

module.exports = {
    name: 'emoji' ,
    aliases: [],
    permissions: [],
    cooldown: 0,
    description: 'Mostrar todos os emojis do bot!',
    premium: false,
    premiumguild: false,
    owner: true,
    async execute(Client, msg, args, Discord) {

    const SleepyCoins = Client.emojis.cache.get(Emojis.Emojis.SleepyCoin);  
    msg.channel.send(`${SleepyCoins}Sleepy Coins emoji`)   
    console.log(Emojis)   
    }
}