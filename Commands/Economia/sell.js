const InventorySchema = require('../../Schemas/Inventory-Schema');
const items = require('../../Resources/EconomyItems');
const capitalize = require('../../Resources/capitalize').Capitalize;
const Emojis = require('../../Resources/Emojis.json').Emojis;

module.exports = {
    name: 'sell' ,
    aliases: ['vender',],
    permissions: [],
    cooldown: 0,
    description: `Vender itens por Sleppy's😴`,
    premium: false,
    premiumguild: false,
    owner: false,
    async execute(Client, msg, args, Discord) {

    const SleepyEmoji = Client.emojis.cache.get(Emojis.SleepyCoin);
        
    if(!args[0]) return msg.channel.send('Preciso de um item!')

    const itemtoselljoin = args.join(" ");
    const itemtosell = itemtoselljoin.toLowerCase();

    const validitem = !!items.find((val) => val.item.toLowerCase() === itemtosell)
    if(!validitem) return msg.channel.send('Este item não está dísponível!')
      
    const OriginalitemPrice = items.find((val) => val.item.toLowerCase() === itemtosell).price
    const itemPrice = OriginalitemPrice - (OriginalitemPrice * 0.10) 

    InventorySchema.findOne({
        id: msg.author.id,
    },
        async (err, data) => {
            if(!data){
                return msg.channel.send(`Não podes vender itens que não tens!`)
            }else{
            if(data.Inventory){ 
                const hasitem = Object.keys(data.Inventory).includes(itemtosell);
                if(!hasitem)return msg.channel.send(`Não tens este item!`)
                   
                if(data.Inventory[itemtosell] <= 0){ return msg.channel.send(`Não tens quantidade suficiente!`)
                }else
                {  
                    data.Inventory[itemtosell]--;
                    data.SleepyCoins = data.SleepyCoins + itemPrice
                }     
                await InventorySchema.findOneAndUpdate({id: msg.author.id},data)
            }
            msg.channel.send(`Vendes-te **1** \`${capitalize(itemtosell)}\` por \`${itemPrice}\`${SleepyEmoji}`)
            }
        })
    }
} 