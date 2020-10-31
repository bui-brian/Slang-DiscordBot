const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'NzUyMDYxNDMwODAyNjc3ODMx.X1SJyQ.jy50bfg5FMULuXgzhcmjDBpb2hM';

const PREFIX = '!';

client.on('ready', () => {
    console.log('This bot is online!');
})

client.on('message', msg => {
    let args = msg.content.substring(PREFIX.length).split(' ');

    switch(args[0]) {
        case 'commands':
            msg.channel.send('This is a list of commands:');
            msg.channel.send('\"!sweaty\"');
            msg.channel.send('\"!clout\"');
            msg.channel.send('\"!flex\"');
            msg.channel.send('\"!baddie\"');
            msg.channel.send('\"!cracked\"');
        break;

        case 'sweaty':
            const embed1 = new Discord.MessageEmbed()
            .setTitle('Sweaty')
            .addField('Definition', 'Adjective to describe people when they \'try too hard\'')
            .addField('Example', 'Daniel is sweaty when he\'s playing CoD')
            .addField('Synonyms', 'Try hard, Sweat, Sweater')
            .addField('Urban Dictionary', 'https://www.urbandictionary.com/define.php?term=sweaty');
            msg.channel.send(embed1);
        break;

        case 'clout':
            const embed2 = new Discord.MessageEmbed()
            .setTitle('Clout')
            .addField('Definition', 'Being famous and having influence')
            .addField('Example', 'Raphael Pepino has no clout')
            .addField('Synonyms', 'Clout Chaser')
            .addField('Urban Dictionary', 'https://www.urbandictionary.com/define.php?term=clout');
            msg.channel.send(embed2);
        break;

        case 'flex':
            const embed3 = new Discord.MessageEmbed()
            .setTitle('Flex')
            .addField('Definition', 'To purposely brag or show off')
            .addField('Example', 'David stop flexing on us')
            .addField('Synonyms', 'Show off')
            .addField('Urban Dictionary', 'https://www.urbandictionary.com/define.php?term=Flex');
            msg.channel.send(embed3);
        break;

        case 'baddie':
            const embed4 = new Discord.MessageEmbed()
            .setTitle('Baddie')
            .addField('Definition', 'Adjective to describe women who are very attractive')
            .addField('Example', 'That girl over there is a baddie')
            .addField('Synonyms', 'Bad')
            .addField('Urban Dictionary', 'https://www.urbandictionary.com/define.php?term=Baddie');
            msg.channel.send(embed4);
        break;

        case 'cracked':
            const embed5 = new Discord.MessageEmbed()
            .setTitle('Cracked')
            .addField('Definition', 'Adjective to describe something or someone that is very good at doing something')
            .addField('Example', 'Tommy is cracked at Brawlhalla')
            .addField('Synonyms', 'Goated, Godly')
            .addField('Urban Dictionary', 'https://www.urbandictionary.com/define.php?term=Cracked');
            msg.channel.send(embed5);
        break;
    }
})

client.login(token);
