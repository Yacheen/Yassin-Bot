/* slash commands ----------------------------------------------------
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder().setName("user").setDescription("describes the user"),
    async execute(interaction) {
        await interaction.reply({
            content: `username:${interaction.user.username} `,
            ephemeral: true,
        });
    },
};
*/
