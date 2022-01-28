const Discord = require('discord.js');
const myIntents = new Discord.Intents();
myIntents.add(
  Discord.Intents.FLAGS.GUILDS,
  Discord.Intents.FLAGS.GUILD_MESSAGES,
  Discord.Intents.FLAGS.DIRECT_MESSAGES,
  Discord.Intents.FLAGS.GUILD_MEMBERS,
  Discord.Intents.FLAGS.GUILD_INVITES,
  Discord.Intents.FLAGS.GUILD_INTEGRATIONS,
)

const Client = new Discord.Client({ intents: myIntents });
const DBconnection = require('./MongoConnection')
require('dotenv').config()

DBconnection();


// Create new Discord Collection
Client.commands = new Discord.Collection();
Client.events = new Discord.Collection();

//Handlers
['command_handler', 'event_handler'].forEach(handler => {
  require(`./Handlers/${handler}`)(Client, Discord)
})


Client.login(process.env.TOKEN); //login bot using token 


