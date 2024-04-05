const joinVoiceChannel = require("@discordjs/voice");
const ytdl = require('ytdl-core');

module.exports = {
    name: "play",
    aliases: ["ytplay"],
    permissions: [],
    cooldown: 8,
    description: "Play 😴",
    premium: false,
    premiumguild: false,
    owner: false,
    async execute(Client, msg, args, Discord) {

        const channel = msg.member.voice.channel;
        if(!channel) return msg.channel.send('Nothing!')

        const connection = joinVoiceChannel.joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
        });
        const stream = ytdl('https://www.youtube.com/watch?v=dQw4w9WgXcQ', { filter: 'audioonly' });
        console.log(stream)
  }
}
