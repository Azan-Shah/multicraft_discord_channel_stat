# multicraft_discord_channel_status_updater ![GitHub release (latest by date)](https://img.shields.io/github/v/release/Azan-Shah/multicraft_discord_channel_stat)![GitHub Workflow Status](https://img.shields.io/github/workflow/status/Azan-Shah/multicraft_discord_channel_stat/CodeQL)![GitHub repo size](https://img.shields.io/github/repo-size/Azan-Shah/multicraft_discord_channel_stat)
discord bot for constant update of online players , status and resource consumption (cpu + ram usage) on your minecraft server using multicraft api and discord.js.

# SETUP:

npm install multicraft (https://www.npmjs.com/package/multicraft) and discord.js (https://discord.js.org/).

```
npm install discord.js
npm install multicraft
```

# HOW TO USE CONFIG.JS:

Create a file called "config.js" within your project folder. It will have this syntax:

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
# SNAPSHOT OF THIS BOT

STATUS AND ONLINE PLAYERS LIST

![](https://raw.githubusercontent.com/Azan-Shah/multicraft_discord_channel_stat/master/readme%20stuff/minecraft%201.PNG)


MINECRAFT SERVER CPU AND RAM USAGE

![](https://raw.githubusercontent.com/Azan-Shah/multicraft_discord_channel_stat/master/readme%20stuff/minecraft%202.PNG)

![](https://raw.githubusercontent.com/Azan-Shah/multicraft_discord_channel_stat/master/readme%20stuff/minecraft%203.PNG)
