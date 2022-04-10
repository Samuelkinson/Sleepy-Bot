const InventorySchema = require('../../Schemas/Inventory-Schema');
const Emojis = require('../../Resources/Emojis.json').Emojis;
module.exports = {
  name: "leaderboard",
  aliases: [],
  permissions: [],
  cooldown: 0,
  description: `Leaderboard de quem tem mais Sleepy's😴`,
  premium: false,
  premiumguild: false,
  owner: false,
  async execute(Client, msg, args, Discord) {

    const member = msg.mentions.members.first() || msg.member;
    const SleepyEmoji = Client.emojis.cache.get(Emojis.SleepyCoin);  
    const mysort = {SleepyCoins: -1}
    let i = 0 
    let h = 0
    let globaldata = await InventorySchema.find({}).sort(mysort)
    
    //Dar fix!
    if(globaldata.length >= 9)  leaderboardlenght = 9
    if(globaldata.length < 9) leaderboardlenght = parseInt(globaldata.length) 

 let embed = new Discord.MessageEmbed()
   .setColor(' #5d8aa8')
   .setTitle('Tabela de Liderança!')
   .setImage(`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fart.pixilart.com%2Ffe863df79c712da.png&f=1&nofb=1`)
   
   
    while (i < leaderboardlenght) {
      embed.addField(`${i + 1}) ${globaldata[i].Nickname}:`,  `\`${globaldata[i].SleepyCoins}\`${SleepyEmoji}`,true)
      i++;
    }

    while (h < globaldata.length) {
      if(globaldata[h].id === member.id){embed.setFooter({
        text: `${h + 1}) ${member.user.username}: ${globaldata[h].SleepyCoins}`, 
        iconURL: Client.user.displayAvatarURL({dynamic: true, format :'png'})
         })} 
      h++;
    }

    return msg.channel.send({embeds:[embed]});
  }
}