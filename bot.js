const Discord = require('discord.js');
const { resolve } = require('path');
const config = require('./config.json');
const client = new Discord.Client();
const prefix = '!';
const api = require("multicraft").begin({
    url: config.url,
    user: config.user,
    key: config.key
});

async function update() {
        const response = await api.getServerStatus(126741);
        const profile = JSON.parse(response);
        const player = profile.data.onlinePlayers[0];
        const maxplayer = profile.data.maxPlayers;
        const channelId = '728516758666870855';
        const channel = client.channels.cache.get(channelId)
        const channelname = channel.name;

        if (player >= 1)
        {
            var nametemplate = `Online Players: ${player}/${maxplayer}`;
            if  (channelname !== nametemplate)
            {
                channel.setName(nametemplate);
            }
            else
            {
                console.log("Players More Than 0");
            };
        }
        else if (player <= 0)
        {
            var defaulttemplate = `Online Players: 0/${maxplayer}`;
            if  (channelname !== defaulttemplate)
            {
                channel.setName(defaulttemplate);
            }
            else
            {
                console.log("The Same Name/Value");
            };
        };

};

client.on("ready", () => {
    client.setInterval(update, 60000);
});

process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
client.login(config.token);