# multicraft_discord_channel_status_updater
discord bot for constant update of online players , status and resource consumption (cpu + ram usage) on your minecraft server using multicraft api and discord.js.

SETUP:

npm install multicraft (https://www.npmjs.com/package/multicraft) , discord.js (https://discord.js.org/) and round-to (https://www.npmjs.com/package/round-to).

```
npm install discord.js
npm install multicraft
npm install round-to
```

IMPORTANT

make sure to replace your node_modules\multicraft with node_modules\multicraft on this repo/zip that you downloaded as you can refer on this gif


![](https://raw.githubusercontent.com/Azan-Shah/multicraft_discord_channel_stat/master/readme%20stuff/replace.gif)

HOW TO USE CONFIG.JSON:

Create a file called "config.json" within your project folder. It will have this syntax:

```
{
  "url": "multicraft url api call link here",
  "user": "multicraft user here",
  "key": "multicraft api key here",
  "token": "discord bot token here"
  "serverid": "multicraft server id here",
  "status_voice_channel": "discord voice channel for status here",
  "player_voice_channel": "discord voice channel for players here" 
}
```
SNAPSHOT OF THIS BOT

STATUS AND ONLINE PLAYERS LIST

![](https://raw.githubusercontent.com/Azan-Shah/multicraft_discord_channel_stat/master/readme%20stuff/minecraft%201.PNG)


MINECRAFT SERVER CPU AND RAM USAGE

![](https://raw.githubusercontent.com/Azan-Shah/multicraft_discord_channel_stat/master/readme%20stuff/minecraft%202.PNG)

![](https://raw.githubusercontent.com/Azan-Shah/multicraft_discord_channel_stat/master/readme%20stuff/minecraft%203.PNG)
