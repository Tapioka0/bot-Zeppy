const {  MessageEmbed } = require("discord.js");

const clien = require('nekos.life');
const {nsfw} = new clien();
module.exports.run = async(client, message, args) => {


    message.channel.startTyping()

    if (message.channel.nsfw === true) {
        let user = message.mentions.users.first()
        if(!user){

        
      let imagen = await nsfw.kuni().then(juas => {
            const embed = new MessageEmbed()
              .setTitle("")
              .setImage(juas.url)
              .setColor("RANDOM");
          
    message.channel.send({embed});
          })
        }else {
            message.delete()
            let imagen = await nsfw.kuni().then(juas => {
                  const embed = new MessageEmbed()
                    .setDescription(`${message.author.username} le lame la concha a ${user}`)
                    .setImage(juas.url)
                    .setColor("RANDOM");
                
          message.channel.send({embed});
                })


        }
      
      }else{
        message.channel.send("Este no es un canal NSFW")
      }


    message.channel.stopTyping()
}

module.exports.help = {
    name: "kuni",
    aliases: []
  }