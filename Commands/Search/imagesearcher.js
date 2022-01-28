var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer: {
      headless: true
    }
  });

  module.exports = {
      name: 'searchimage' ,
      aliases: ['foundpic', 'pic', 'searchpic'],
      permissions: [],
      cooldown: [],
      description: 'Sends an image to a discord text channel',

      async execute(Client, msg, args) {
        
        try {
        const image_query = args.join(' ');
        if(!image_query) return msg.channel.send({content:'Preciso de uma palavra'});

        const image_results = await google.scrape(image_query, 1);
        msg.channel.send({content: image_results[0].url});
         }catch(err) {
          
          msg.channel.send({content:`Não consegui encontrar`});
      }
  }
}