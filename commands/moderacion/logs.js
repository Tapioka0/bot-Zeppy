const {  MessageEmbed } = require("discord.js");
//const db = require("quick.db")


module.exports.run = async(client, message, args) => {

return message.channel.send("en mantenimiento")
   if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send("No tienes permiso")
          }


   let canal = message.mentions.channels.first()
   db.set(`kanal_${message.guild.id}`, canal.id)
   message.channel.send("Canal establecido con exito")

}
module.exports.help = {
    name: "logs",
    aliases: []
  }