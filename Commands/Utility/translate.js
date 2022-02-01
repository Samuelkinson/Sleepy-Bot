const translate = require('translate-google')
const Prefix = require('../../config.json').prefix

module.exports = {
    name: 'tt' ,
    aliases: [],
    permissions: [],
    cooldown: 0,
    description: `Translates to all languages `,
    async execute(Client, msg, args, Discord) {   
        
    try{
        if (args.length < 2) {
            msg.reply(`Wrong format: An example would be ${Prefix}tt korean "any-language-text"`);
        } else {
           
            let translateTo = args[0].toLowerCase(); //Language to Translate to
            let text = args.slice(1).join(' '); //Text to Translate

            translate(text, {to : translateTo}).then(res => {
                msg.channel.send(res)
            }).catch(err => {
                msg.channel.send('An error has occured')
                
            })    
            
        }
        }catch(err){
        return msg.channel.send({content: `Try ${Prefix}tt korean "any-language-text"`})}
    } 
}
