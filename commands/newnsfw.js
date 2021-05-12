const fetch = require('node-fetch');
const Discord = require(`discord.js`);

module.exports = {
    name: 'newnsfw',
    description: "sends nsfw",
    async execute(message, args) {
        const got = require('got'),
            {MessageEmbed} = require('discord.js');
        if(message.channel.nsfw) {

            got('https://www.reddit.com/r/nsfw/random/.json').then(response => {
                let content = JSON.parse(response.body),
                    image = content[0].data.children[0].data.url,
                    embed = new MessageEmbed()
                .setImage(image)
                .setTimestamp()
                .setFooter('tohi.dev')
                message.channel.send(embed);
            }).catch(console.log)
        }else{
            message.channel.send("This isn't an nsfw channel.");
        }
        }
    }