const InventorySchema = require('../../Schemas/Inventory-Schema');
const items = require('../../Resources/EconomyItems');
const capitalize = require('../../Resources/capitalize').Capitalize;
const Emojis = require('../../Resources/Emojis.json').Emojis;

module.exports = {
    name: 'buy' ,
    aliases: ['comprar', ],
    permissions: [],
    cooldown: 0,
    description: `Comprar itens por Sleppy's😴`,
    premium: false,
    premiumguild: false,
    owner: false,
    async execute(Client, msg, args, Discord) {

        const SleepyEmoji = Client.emojis.cache.get(Emojis.SleepyCoin);
        if(!args[0]) return msg.channel.send('Preciso de um item!')

        const itemtobuyjoin = args.join(" ");
        const itemtobuy = itemtobuyjoin.toLowerCase();

        const validitem = !!items.find((val) => val.item.toLowerCase() === itemtobuy)
        if(!validitem) return msg.channel.send('Este item não está dísponível!')
      
        const itemPrice = items.find((val) => val.item.toLowerCase() === itemtobuy).price

        
        InventorySchema.findOne({
            id: msg.author.id,
        },
            async (err, data) => {
                if(!data){
                    return msg.channel.send(`Não tens Sleepy's${SleepyEmoji}`)
                }else{
                if(data.SleepyCoins < itemPrice) return msg.channel.send(`Precisas de ${itemPrice}, apenas tens \`${data.SleepyCoins}\` ${SleepyEmoji}`)
                if(data.Inventory){ 
                   const hasitem = Object.keys(data.Inventory).includes(itemtobuy);
                    if(!hasitem){
                    data.Inventory[itemtobuy] = 1 ;
                    } else{
                    data.Inventory[itemtobuy]++; 
                    }   
                    await InventorySchema.findOneAndUpdate({id: msg.author.id},data)
                }
                msg.channel.send(`Compras-te **1** \`${capitalize(itemtobuy)}\` por \`${itemPrice}\`${SleepyEmoji}`)
                data.SleepyCoins = data.SleepyCoins - itemPrice
                await data.save()
               } }
        )
        }
    }