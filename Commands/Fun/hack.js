const starthacking = require('../../Resources/hacklists')

module.exports = {
    name: 'hack' ,
    aliases: [],
    permissions: [],
    cooldown: 0,
    description: 'Hack a alguém bep bop😴',
    premium: false,
    premiumguild: false, 
    owner: false,
    
   async execute(Client, msg, args, Discord) {

    const user = msg.mentions.users.first();

    if(user == Client.users.cache.get(msg.author.id)){
      return msg.channel.send("Escolhe outra pessoa, tu já foste hackeado!")
    }
    if(!user){
        return msg.reply("Quem tenho de hackear?");
      }else{
        starthacking(Client, msg, args, Discord, user)
      }
    }
}