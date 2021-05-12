const fetch = require('node-fetch');
const Discord = require(`discord.js`);

module.exports = {
    ownerOnly: true,
    name: 'votd',
    description: "sends votd",
    async execute(message, args) {
        if(message.author.id !== "247140905578921985") return message.channel.send("You do not have permission to run this command.");
        else{
            message.delete(message);
            fetch(`https://tohi.dev/votd.json`)
            .then(res => res.json())
            .then(async json => {
                const votdEmbed = new Discord.MessageEmbed()
                .setTitle('Verse of the day')
                .setDescription(json.verse.details.text)
                .setFooter(`Verse: ${json.verse.details.reference}  Version: ${json.verse.details.version}`);

            message.channel.send(votdEmbed);
            }).catch(console.log)
        }
        }
    }