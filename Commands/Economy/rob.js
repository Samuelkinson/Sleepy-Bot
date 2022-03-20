const SleepyCoinsSchema = require("../../Schemas/SleepyCoins-Shema");
const failedmessage = require('../../Embeds/CommandEmbeds/Economy/failedrobembed')
const successfulmessage = require('../../Embeds/CommandEmbeds/Economy/successfulrobembed')

module.exports = {
    name: 'rob' ,
    aliases: ['assalto'],
    permissions: [],
    cooldown: 30,
    description: 'Rouba alguém',
    premium: false,
    premiumguild: false,
    owner: false,
    async execute(Client, msg, args, Discord) {

        let target = msg.mentions.members.first();
        let thief = msg.author;
        if(!target) return msg.channel.send("Preciso de alguém para roubar");

        let theftamount = Math.floor(Math.random() * 150) + 10;
        const  win = Math.floor(Math.random() * 2);  

        SleepyCoinsSchema.findOne(
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
                    SleepyCoinsSchema.findOne(
                        {
                          id: thief.id,
                        },async (err, data) => {
                            //Add thief SleepyCoins in old data
                            if(data){
                                data.SleepyCoins = data.SleepyCoins + theftamount;
                                await data.save()
                                
                            }else{
                                //Add thief SleepyCoins in new data
                                let newData = new SleepyCoinsSchema({
                                    Nickname: thief.username,
                                    id: thief.id,
                                    SleepyCoins: theftamount,
                                  });
                                  newData.save();
                                }
                        });
                    
                }else{
                    //Add failed theft
                    return failedmessage(Client, msg, Discord, target, thief)
                }
                data.save()
                
              } else{
                  //Add failed theft because of no data!
                msg.channel.send(`${target} não tem Sleepy Coins, Sleepy Bot Police apanhou a tua fraca tentativa de roubo e estás preso!`)
              }
            }
          );
    }
}