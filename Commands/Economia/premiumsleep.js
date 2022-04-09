const locations = require('../../Embeds/CommandEmbeds/Economy/Locationrandom')
const iten = require('../../Embeds/CommandEmbeds/Economy/Itempercentage')
const InventorySchema = require('../../Schemas/Inventory-Schema');
const capitalize = require('../../Resources/capitalize').Capitalize;

module.exports = {
  name: "premiumsleep",
  aliases: ['psleep','pdormir', 'pmimir'],
  permissions: [],
  cooldown: 0,
  description: `Dorme para ganhar itens `,
  premium: true,
  premiumguild: false,
  owner: false,
  async execute(Client, msg, args, Discord) {

      const luckyitem = iten(Client)
      msg.channel.send(`Adormeceste **${locations()}** e recebeste **${capitalize(luckyitem.itename)} ${luckyitem.itenemoji}**`); //Por embed aqui!

     InventorySchema.findOne(
      {
        id: msg.author.id,
      },
      async (err, data) => {
          if(data){
              const hasitem = Object.keys(data.Inventory).includes(luckyitem.itename);
               if(!hasitem){
               data.Inventory[luckyitem.itename] = 1 ;
               } else{
               data.Inventory[luckyitem.itename]++; 
               }   
               await InventorySchema.findOneAndUpdate({id: msg.author.id},data)
      }else{
        let newdata = new  InventorySchema({
          Nickname:msg.author.username,
          id: msg.author.id,
          SleepyCoins : 0,
          Inventory:{
              [`PlaceHolder`]: 0,
              [luckyitem.itename]: 1
              }
            }) 
            newdata.save() 
      }
    }) 
  }
}
