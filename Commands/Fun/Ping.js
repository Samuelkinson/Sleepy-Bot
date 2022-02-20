module.exports = {
  name: "ping",
  aliases: [],
  permissions: ["SEND_MESSAGES"],
  cooldown: 5,
  description: "Ping comando😴",
  premium: true,
  premiumguild: true,
  owner: true,
  execute(Client, msg, args, Discord) {
    msg.channel.send("A calcular o ping...").then((resultMessage) => {
      const ping = resultMessage.createdTimestamp - msg.createdTimestamp;
      msg.channel.send(
        `🏓Latency é ${ping}ms. API Latency é ${Math.round(Client.ws.ping)}ms`
      );
    });
  },
};
