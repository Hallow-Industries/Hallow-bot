const fetch = require('node-fetch');
const Discord = require(`discord.js`);

module.exports = {
    name: 'meme',
    description: "sends a meme",
    async execute(message, args) {
        fetch(`https://meme-api.herokuapp.com/gimme`)
            .then(res => res.json())
            .then(async json => {
                const memeEmbed = new Discord.MessageEmbed()
                .setTitle(json.title)
                .setImage(json.url)
                .setFooter(`https://hallow.wtf`);

            message.channel.send(memeEmbed);
            })
        }
    }