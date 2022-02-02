module.exports = async (Client, msg, args, Discord, user) => {

    function wait(ms){
        let start = new Date().getTime();
        let end = start;
        while(end < start + ms) {
          end = new Date().getTime();
       }
     }
    //Lists
    const hacked = msg.mentions.users.first() 
    const member = msg.mentions.members.first() //To get Thumbnail

    const passlist =[
        "amo a minha familia 2020",
        "sou rico",
        "portugalbigmoney",
        "proprioshrek",
        "12356",
        "NerfsleepyBot",
        "birrelis é vida",
        "VAPO VAPO VAPO",
        "Rapilukz é um bot",
        "Rogério o cão drogado ñ vai meter a ronda",
        "JOJO",
        "Miau miau",
        "Never gonna give you up!",
        "GusKeN is magisk"
    ]

    const maillist = [
        "bigmoney",
        "pvp4k",
        "monognar",
        "otpbirrelis",
        "ricosemdinheiro",
        "el_chapo",
        "rogerio",
        "lovesSam",
        "magisksmurf",
        "miaumiau",
        "omaisfofinho"

    ]

    const msglist1 = [
    'Dinheiro é tudo',
    'Shrek é life',
    'Hacker para por favor',
    'Para de clicar em "guardar como" as minhas NFTS do macaco',
    'Anime é para weebs',
    'Eu sou um Weeb',
    'Birrelis é vida Birrelis é tudo',
    'Roger.io é bué lindo',
    'teu pai é bué trouxa batia bue pungo a ver o programa do gouxa',
    ]

    const msglist2 = [
    'O mais Fofinho',
    'Error bip bop',
    'Ice tea de manga fixi fixi',
    'Mono gnar na casa',
    'Lol é um bom jogo',
    'Adoro videos do Tiagovski',
    'Como crescer cabelo',
    'Estou Calvo',
    'teu pai pensa que eu nao vi batia bue pungo a ver tvi',
    ]

    const msglist3 = [
    'Baza só no pingaras',
    'Rocket league melhor jogo',
    'Osu é bué fixe',
    'Uso OperaGX e sou infeliz',
    'Uso maça trincada',
    'Usuários de Android pá',
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    'Tira a lingua da tomada',
    'Tás bué Inácio',
    'Para de trollar',
    'Seu Mimoso',
    'Trabalho para Big Mimoso™'

    ]

    const iplist = [
        "84.131.68.131",
        "210.114.199.223",
        "49.93.89.131",
        "228.79.90.199",
        "53.101.108.12",
        "211.9.148.241",
        "81.109.119.10",
        "234.149.24.160",
        "221.65.53.206",
        "221.70.5.116",
        "12.99.235.182",
        "122.93.113.56",
        "101.17.202.244",
        "130.61.182.149",
        "195.35.226.241",
        "231.49.108.240",
        "209.85.103.113",
        "166.15.104.116",
        "31.29.148.109",
        "159.253.186.104",
        "206.55.238.213",
        "1.242.175.116",
        "73.127.133.147",
        "133.253.68.108",
        "42.65.42.93"
    ]

    let passwordlist = (passlist[Math.floor(Math.random() * passlist.length)]);
    let emaillist = (maillist[Math.floor(Math.random() * maillist.length)]);
    let messagelist1 = (msglist1[Math.floor(Math.random() * msglist1.length)]); 
    let messagelist2 = (msglist2[Math.floor(Math.random() * msglist2.length)]); 
    let messagelist3 = (msglist3[Math.floor(Math.random() * msglist3.length)]);
    let randomiplist = (iplist[Math.floor(Math.random() * iplist.length)]);

    //Most used Messages Embed
        let embedmsglist = new Discord.MessageEmbed()
        .setTitle(`Mensagens mais usadas de **${hacked.username}**:`)
        .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
        .addFields(
            {name: `🥇`, value: `${messagelist1}`, inline: false},
            {name: `🥈`, value: `${messagelist2}`, inline: false},
            {name: `🥉`, value: `${messagelist3}`, inline: false},
        )
        .setFooter({
          text: `O hack foi terminado`,
        });
    const prompt = await msg.channel.send(`Hacking ${user ? hacked.username : hacked} agora...`);

        await wait(2700);
        await prompt.edit('Encontrando login discord ...');
        await wait(2700);
        await prompt.edit(`Encontrado o:\n**Email**: \`${hacked.username}${emaillist}@gmail.com\`\n**Password**: \`${passwordlist}\``);
        await wait(3700); 
        await prompt.edit(`Injetando vírus no discriminador #${hacked.discriminator}`);
        await wait(3700);
        await prompt.edit('Vírus injetado');
        await wait(3700); 
        await prompt.edit('A procura do endereço IP...'); 
        await wait(4000);
        await prompt.edit(`Ip de ${hacked.username} Encontrado **${randomiplist}**`);
        await wait(6700); 
        await prompt.edit('Bots a spammar o email...');
        await wait(4700); 
        await prompt.edit('Vender informações ao facebook...');
        await wait(3700); 
        await prompt.edit('Informações vendidas');
        await wait(1700);  
        await prompt.edit('A encontrar as dms');
        await wait(1700);
        await prompt.edit('Listagem das mensages mais usadas...');
        await wait(1000);  
        await msg.channel.send({embeds: [embedmsglist]}).then(msg.delete());
        await prompt.delete();
        await wait(4700); 
        
    await prompt.delete
}