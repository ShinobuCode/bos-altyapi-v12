const Discord = require('discord.js');

exports.run = async (client, message) => {
      message.delete()
      message.channel.send("Shinobu Code")
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['test'],
    permLevel: 0,
  };
  
  exports.help = {
    name: "shinobu",
    description: "shinobu",
    usage: "shinobu",
  };