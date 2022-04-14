const InventorySchema = require('../../Schemas/Inventory-Schema');
const Emojis = require('../../Resources/Emojis.json');
const Capitalize = require('../../Resources/capitalize').Capitalize
const itemsemoji = require('../../Resources/EconomyItems');

module.exports = {
    name: 'inventory' ,
    aliases: ['inventario', 'inv'],
    permissions: [],
    cooldown: 0,
    description: `Comprar itens por Sleppy's😴`,
    premium: false,
    premiumguild: false,
    owner: false,
    async execute(Client, msg, args, Discord) {

    const SleepyInv = Client.emojis.cache.get(Emojis.Economy.SleepyInv);
    const SleepyEmoji = Client.emojis.cache.get(Emojis.Emojis.SleepyCoin);
    const member = msg.mentions.members.first() || msg.member;
    InventorySchema.findOne(
        {
            id: member.id,
        },
        async (err, data) => {
            if(!data) return msg.channel.send(`Inventário vázio!`)  
                
            let items = data.Inventory
            let embed = new Discord.MessageEmbed()
                .setColor('#5d8aa8')
                .setTitle(` ${SleepyInv} Inventário`) 
                .setImage(`https://art.pixilart.com/1d0aa0bc2478ee2.png`) 
                .addField(`Sleepy's`, `\`${data.SleepyCoins}\` ${SleepyEmoji}`)
                .setFooter({
                    text: `Compra aqui os tens itens!`, 
                    iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
                    }) 
                    Object.entries(items).forEach(([name, quantity]) => {
                        if(name === 'PlaceHolder') return undefined;
                        if(quantity >= 1) return embed.addField(`✅${Capitalize(name)}:`, `**${quantity}** `, true) 
                        embed.addField(`❌${Capitalize(name)}:`, `**${quantity}** `, true) 
                      })    

            return msg.channel.send({embeds:[embed]})  
        })
    }
}
