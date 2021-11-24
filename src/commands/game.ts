import {
    ButtonInteraction,
    CommandInteraction,
    MessageButton,
    MessageActionRow,
    Snowflake,
    User,
    GuildMember,
} from "discord.js";
import { ButtonComponent, Discord, Slash, SlashOption } from "discordx";


var _interaction: CommandInteraction;
@Discord()
class game {
    @Slash("new")
    async newGame(
        interaction: CommandInteraction
    ) {
        await interaction.deferReply();

        const suddenDeathBtn = new MessageButton()
            .setLabel("Sudden Death")
            .setEmoji("💀")
            .setStyle("SECONDARY")
            .setCustomId("sudden-death-btn");

        const reverseBtn = new MessageButton()
            .setLabel("Reverse")
            .setEmoji("🔄")
            .setStyle("SECONDARY")
            .setCustomId("reverse-btn");

        const variableBtn = new MessageButton()
            .setLabel("Variable")
            .setEmoji("🔀")
            .setStyle("SECONDARY")
            .setCustomId("variable-btn");

        const row = new MessageActionRow().addComponents([variableBtn, suddenDeathBtn, reverseBtn]);
        _interaction = interaction;
        await interaction.editReply({
            content: `Choose game mode:`,
            components: [row],
        });
    }

    @ButtonComponent("variable-btn")
    mybtn(interaction: ButtonInteraction) {
        // interaction.message.content = "hello"
        const suddenDeathBtn = new MessageButton()
            .setLabel("Sudden Death")
            .setEmoji("💀")
            .setStyle("SECONDARY")
            .setCustomId("sudden-death-btn");

        const reverseBtn = new MessageButton()
            .setLabel("Reverse")
            .setEmoji("🔄")
            .setStyle("SECONDARY")
            .setCustomId("reverse-btn");

        const variableBtn = new MessageButton()
            .setLabel("Variable")
            .setEmoji("🔀")
            .setStyle("PRIMARY")
            .setCustomId("variable-btn");

        const row = new MessageActionRow().addComponents([variableBtn, suddenDeathBtn, reverseBtn]);
        console.log(_interaction);
        console.log('\n', interaction);
        _interaction.editReply({
            content: `Choose game mode:`,
            components: [row],
        });
    }

    @ButtonComponent("sudden-death-btn")
    suddenDeath(interaction: ButtonInteraction) {
        // interaction.message.content = "hello"
        const suddenDeathBtn = new MessageButton()
            .setLabel("Sudden Death")
            .setEmoji("💀")
            .setStyle("PRIMARY")
            .setCustomId("sudden-death-btn");

        const reverseBtn = new MessageButton()
            .setLabel("Reverse")
            .setEmoji("🔄")
            .setStyle("SECONDARY")
            .setCustomId("reverse-btn");

        const variableBtn = new MessageButton()
            .setLabel("Variable")
            .setEmoji("🔀")
            .setStyle("SECONDARY")
            .setCustomId("variable-btn");

        const row = new MessageActionRow().addComponents([variableBtn, suddenDeathBtn, reverseBtn]);
        _interaction.editReply({
            content: `Choose game mode:`,
            components: [row],
        });
    }

    @ButtonComponent("reverse-btn")
    reverse(interaction: ButtonInteraction) {
        // interaction.message.content = "hello"
        const suddenDeathBtn = new MessageButton()
            .setLabel("Sudden Death")
            .setEmoji("💀")
            .setStyle("SECONDARY")
            .setCustomId("sudden-death-btn");

        const reverseBtn = new MessageButton()
            .setLabel("Reverse")
            .setEmoji("🔄")
            .setStyle("PRIMARY")
            .setCustomId("reverse-btn");

        const variableBtn = new MessageButton()
            .setLabel("Variable")
            .setEmoji("🔀")
            .setStyle("SECONDARY")
            .setCustomId("variable-btn");

        const row = new MessageActionRow().addComponents([variableBtn, suddenDeathBtn, reverseBtn]);
        _interaction.editReply({
            content: `Choose game mode:`,
            components: [row],
        });
    }
}
