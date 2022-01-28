module.exports = {
    name: 'ping',
    aliases:[],
    permissions: ['SEND_MESSAGES'],
    cooldown: 5,
    description: 'Ping command',
    execute(Client, msg, args, Discord){
        msg.channel.send('A calcular o ping...').then((resultMessage)=> {
            const ping = resultMessage.createdTimestamp - msg.createdTimestamp
            msg.channel.send(`🏓Latency is ${ping}ms. API Latency is ${Math.round(Client.ws.ping)}ms`);})
          
    }
}