// Importar biblioteca do Discord na VAR
const Discord = require("discord.js");

// Instancia um BOT da biblioteca Discord
const bot = new Discord.Client("");

// Token identificador do BOT PET Sistemas
const token = "NTAwNDI5NjMyOTQ5MTkwNjYy.W8Ebag.N6TTQcIELDTbdMU4iXtSXUwClYc";

// Logar e deixar Bot Online
bot.login(token);

// Comandos

bot.on("ready", () => {
    console.log("BOT Inicializado");
});

bot.on("message", msg => {
    if (msg.content == "PET"){
        msg.reply("Sistemas!");
        msg.reply("Estou Online 😉");
    }
})