const {  MessageEmbed } = require("discord.js");

const clien = require('nekos.life');
const {sfw} = new clien();
module.exports.run = async(client, message, args) => {


    message.channel.startTyping()


    let persona = message.mentions.members.first()
    if(!persona) return message.channel.send("menciona a alguien :(")
    if(message.author.id === persona.id) return message.channel.send("No puedes bakearte a ti mismo :(")
    if(persona.id === "725877650870239254") return message.channel.send("Te voy acusar con mi mama")


    
  let imagen = await sfw.baka().then(juas => {
        const embed = new MessageEmbed()
          .setDescription(`${message.author.username } le dijo baka a ${persona} uwu`)
          .setImage(juas.url)
          .setColor("RANDOM");
      
message.channel.send({embed});
      })

    message.channel.stopTyping()
}

module.exports.help = {
    name: "baka",
    aliases: []
  }