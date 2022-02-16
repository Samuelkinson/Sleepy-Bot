const fetch = require('node-fetch');
const githubembed = require('../../Embeds/RandomEmbeds/Really_Random_Embeds/githubembed')

module.exports = {
    name: 'github' ,
    aliases: [],
    permissions: [],
    cooldown: 0,
    description: '',
    async execute (Client, msg, args, Discord) {

        const name = args.join(' ')
        if(!name) return msg.reply('Preciso de um utilizador.') // If no user
        const url = `https://api.github.com/users/${name}` // Link From BOT Will Get Info

        let response
        try{
            response = await fetch(url).then(res => res.json())
            
            githubembed(Client, msg, args, Discord, response)
        }
        catch(err) {
            console.log(err)
            return msg.reply('Não encontrei esse utilizador')
        }
    }  
  }
