require("dotenv").config();
const { Client } = require("discord.js");
const client = new Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_TYPING"],
});
const PREFIX = "!";
const cooldown = 60; // 60 minutes
let cooldownString = "mitsuTalkedRecently";
let recentlyRan = []; // allows mitsu to talk every hour
let kyary;
client.users.fetch("237613696489226241").then((kyarydata) => {
    kyary = kyarydata.id;
    return kyary;
});

const mentionedYassin = ["yassin", "yasin", "y4ssin", "frostfire", "league", "of legends"];

const isSad = [
    "i'm sad",
    "I am sad",
    "im sad",
    "sadness",
    "i'm depressed",
    "im depressed",
    "are you depressed",
    "i am depressed",
    "i have depression",
    "i'm miserable",
    "im miserable",
    "i am miserable",
    "im melancholic",
    "i'm melancholic",
    "i am melancholic",
    "i'm s4d",
    "im sorrowful",
    "i'm sorrowful",
    "im s4d",
    "we are sad",
    "is sad",
];

/* slash commands --------------------------------------------------
client.commands = new Collection();
const commandFiles = fs.readdirSync("./commands").filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}
*/

//eggos command:if (CMD_NAME === "eggo") {
// messageCreated.reply(`"${"If you have a problem, throw money at it."}" - Eggo, 2021`);
//  }

/* slash commands -------------------------------------------------------------------
client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) return;
    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    console.log(
        `${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`
    );

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({
            content:
                "There was an error while executing that command.. please contact yassin",
            ephemeral: true,
        });
    }
});
*/

client.login(process.env.BOT_TOKEN);

client.on("ready", (c) => {
    console.log(`${c.user.tag} is ready.`);
    client.user.setPresence({
        activities: [{ name: "League of Legends", type: "PLAYING" }],
        status: "online",
    });
});

client.on("messageCreate", (messageSent) => {
    let alreadyRepliedAboutSadness = false;
    let alreadyRepliedAboutYassin = false;
    if (messageSent.author.bot) return;

    isSad.map((sadTerm) => {
        if (messageSent.content.toLowerCase().includes(sadTerm) && alreadyRepliedAboutSadness == false) {
            alreadyRepliedAboutSadness = true;
            messageSent.reply(`Sadge.`);
        } else {
            return;
        }
    });

    mentionedYassin.map((yassinTerm) => {
        if (messageSent.content.toLowerCase().includes(yassinTerm) && alreadyRepliedAboutYassin == false) {
            alreadyRepliedAboutYassin = true;
            messageSent.channel.send("I will let Yassin know about this.");
        } else {
            return;
        }
    });
});

/*
client.on("typingStart", (channel, user, data) => {
    if (channel.user.id === "184477182800822272") {
        if (recentlyRan.includes(cooldownString)) {
            return;
        } else {
            channel.channel.send(`Mitsu, I hope you got permission from <@${kyary}> to speak`);
            recentlyRan.push(cooldownString);

            setTimeout(() => {
                recentlyRan = recentlyRan.filter((string) => {
                    string !== cooldownString;
                });
            }, 1000 * cooldown);
        }
    }
});
*/
