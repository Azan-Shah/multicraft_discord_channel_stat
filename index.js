const Discord = require('discord.js');
const { resolve } = require('path');
const config = require('./config.js');
const roundTo = require('round-to');
const client = new Discord.Client();
const api = require("multicraft").begin({
    url: config.url,
    user: config.user,
    key: config.key
});

async function usage() {
    const response = await api.getServerResources(config.serverid);
    const profile = JSON.parse(response);
    const cpu = profile.data.cpu;
    const ram = parseFloat(profile.data.memory).toFixed(1).split('.').join("");
    client.user.setActivity(`CPU:${cpu}% RAM:${ram}0mb`, { type: "WATCHING"});
}

async function update() {
        const response = await api.getServerStatus(config.serverid);
        const profile = JSON.parse(response);
        const status = profile.data.status;
        const player = profile.data.onlinePlayers[0];
        const maxplayer = profile.data.maxPlayers;
        const channelid_status = config.status_voice_channel;
        const channelId_players = config.player_voice_channel;
        const channel_info1 = client.channels.cache.get(channelid_status); // Get Info About Voice Channel
        const channel_info2 = client.channels.cache.get(channelId_players); // Get Info About Voice Channel
        const channelname2 = channel_info1.name; // Get Name from JSON response of Voice Channel Info
        const channelname = channel_info2.name; // Get Name from JSON response of Voice Channel Info

        if  (status === `online`)  // check if the status of the server is online
        {
             var statustemplate = `Status: ${status}`; // current status of the server
             if  (channelname2 !== statustemplate)
             {
                channel_info1.setName(statustemplate);    // update channel name to the latest 
             };   
        if (player >= 1)  // check if players is more than 1
        {
            var nametemplate = `Online Players: ${player}/${maxplayer}`;  // current player of the server
            if  (channelname !== nametemplate)
            {
                channel_info2.setName(nametemplate);  // update channel name to the latest 
            };
        }
        else if (player <= 0)  // check if players is less than 0
        {
            var defaulttemplate = `Online Players: 0/${maxplayer}`;
            if  (channelname !== defaulttemplate)
            {
                channel_info2.setName(defaulttemplate);    // update channel name to the latest 
            };
        };
        }
        else if (status === `offline`)       // check if the status of the server is offline
        {
            var offlinetemplate = `Status: ${status}`;
            if  (channelname !== nametemplate)
            {
                channel_info1.setName(offlinetemplate);   // update channel name to the latest 
            };
        };

};


client.on("ready", () => {
    api.getServerStatus(config.serverid).then((response) => {
        const profile = JSON.parse(response);
        console.log("Minecraft Server is " + profile.data.status);
      });   // check the status of minecraft server

    client.setInterval(usage, 10000); // run usage function every 10 seconds
    client.setInterval(update, 30000); // run update function every 30 seconds
});

process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
client.login(config.token);
