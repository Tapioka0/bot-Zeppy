const {  MessageEmbed } = require("discord.js");
const marsnpm = require("marsnpm");

module.exports.run = async(client, message, args) => {


    message.channel.startTyping()


    let user = message.mentions.users.first();
    let url = await marsnpm.bored(); 
    
   
    if(!user){
        const embed = new MessageEmbed()
        .setDescription(`${message.author.username} Se Aburre`)
      .setColor("RANDOM")
        .setImage(url);
         
      message.channel.send(embed);
    } else {
      if(user.id === "725877650870239254") return message.channel.send("No quiero ...")
        const embed = new MessageEmbed()
        .setDescription(`${message.author.username} Le comparte su aburricion ${user}`)
      .setColor("RANDOM")
        .setImage(url);
         
      message.channel.send(embed);


    }

    message.channel.stopTyping()
}

module.exports.help = {
    name: "bored",
    aliases: []
  }