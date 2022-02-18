const {inspect} = require('util')

module.exports = {
    name: 'eval' ,
    aliases: [],
    permissions: [],
    cooldown: 0,
    description: `Console.log() no chat do discord`,
    premium: false,
    premiumguild: false, 
    owner: true,
    async execute(Client, msg, args, Discord) {

    const code = args.join(" ")
    if(!code) return msg.channel.send('Dá-me código!')
    if (args.join(" ").toLowerCase().includes("token")) return msg.channel.send(`Por razões de segurança não dá`);
    if (args.join(" ").toLowerCase().includes("process.env")) return msg.channel.send(`Por razões de segurança não dá`);
       

    try {
        const result = await eval(code)
        let output = result
        if(typeof result !== 'string'){
            output = inspect(result)
        }
        msg.channel.send(`\`\`\`js\n${output}\n\`\`\``)
    } catch (error) {
        console.log(error)
        msg.channel.send(`É demasiado longo para mostrar!`)
    }
    }
}