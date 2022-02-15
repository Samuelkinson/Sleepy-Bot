module.exports = {
    name: 'dice' ,
    aliases: ['dado'],
    permissions: [],
    cooldown: 0,
    description: 'Rola o Dado😴',
    execute(Client, msg, args, Discord) {

        function dice() {
            var answers = ["1", "2", "3", "4", "5", "6"]
            return answers[Math.floor(Math.random()*answers.length)];
        }
          
        var embed = new Discord.MessageEmbed()
        .setDescription(":game_die: O dado rolou " + `${dice()}` + "! :game_die:")
        .setColor("#ff748c")
          
        return msg.channel.send({embeds: [embed]}).then(msg.delete());
        
        }
    }
  