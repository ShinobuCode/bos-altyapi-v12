const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
var oyun = [
        `${prefix}yardım | Shinobu Code`,
        "☯ | Shinobu Code | ☯"
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "https://www.instagram.com/shinobu.code" );
        }, 2 * 2500);
    
  console.log(`${client.user.username} Aktif, Komutlar Yüklendi!`);
  client.user.setStatus("online");
  console.log(`${client.guilds.size} Sunucu + ${client.users.size} Kullanıcı`);
};