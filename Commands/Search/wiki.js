const {Wikipedia} = require("ultrax")
module.exports = {
    name: 'wiki' ,
    aliases: [],
    permissions: [],
    cooldown: 0,
    description: '',
    async execute(Client, msg, args, Discord) {

        let query = args.join("")
        if(!query) return msg.channel.send("Preciso de palavras!")

        const res = new Wikipedia({
            message: msg,
            color: "#37dc0c",
            query: query
    })

    res.fetch()

    }
}