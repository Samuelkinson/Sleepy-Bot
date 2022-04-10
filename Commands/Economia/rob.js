const InventorySchema = require("../../Schemas/Inventory-Schema");
const failedmessage = require('../../Embeds/CommandEmbeds/Economy/failedrobembed')
const successfulmessage = require('../../Embeds/CommandEmbeds/Economy/successfulrobembed')
const Emojis = require('../../Resources/Emojis.json').Emojis

module.exports = {
    name: 'rob' ,
    aliases: ['assalto'],
    permissions: [],
    cooldown: 0,
    description: 'Rouba alguém',
    premium: false,
    premiumguild: false,
    owner: false,
    async execute(Client, msg, args, Discord) {
        const SleepyCoins = Client.emojis.cache.get(Emojis.SleepyCoin);  
        let target = msg.mentions.members.first();
        let thief = msg.author;
        if(!target) return msg.channel.send("Preciso de alguém para roubar");

        let theftamount = Math.floor(Math.random() * 151) + 10;
        const win = Math.floor(Math.random() * 9);   

        //Remove or fail target SleepyCoins
        InventorySchema.findOne(
            {
              id: target.user.id,
            },
            async (err, data) => {
            if (data) {  
                //Rob successful
                if (win === 1 ) { 
                    data.SleepyCoins =  data.SleepyCoins - theftamount;
                    successfulmessage(Client, msg, Discord, target, thief, theftamount);
                    //Add thief SleepyCoins
                    InventorySchema.findOne(
                      {
                        id: thief.id,
                      },async (err, data) => {
                          //Add thief SleepyCoins in old data
                          if(data){
                              data.SleepyCoins = data.SleepyCoins + theftamount;
                              await data.save()
                                
                           }else{
                              //Add thief SleepyCoins in new data
                              let newData = new InventorySchema({
                                  Nickname: thief.username,
                                  id: thief.id,
                                  SleepyCoins: theftamount,
                                  Inventory:{               
                                      [`PlaceHolder`]: 0
                                    }
                                });
                              newData.save();
                            }
                  })
                }else{
                    //Add failed theft
                    return failedmessage(Client, msg, Discord, target, thief)
                }
                data.save()
              } else{
                  //Add failed theft because of no data!
                return msg.channel.send(`${target} não tem ${SleepyCoins}, Sleepy Bot Police apanhou a tua fraca tentativa de roubo e estás preso!`)
              }
            }
          );
    }
}