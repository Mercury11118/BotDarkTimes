const { REST, SlashCommandBuilder, Routes, CommandInteraction, SlashCommandAssertions } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Réponds pong!'),
	new SlashCommandBuilder().setName('serveur').setDescription('Infos sur le serveur !'),
	new SlashCommandBuilder().setName('utilisateur').setDescription('Infos sur l utilisateur !'),
	new SlashCommandBuilder().setName('bonjour').setDescription('Dis bonjour'),
	new SlashCommandBuilder().setName('début').setDescription('Premier message de RedBot'),
	new SlashCommandBuilder().setName('aide').setDescription('permet d aider RedBot'),

]
	.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then((data) => console.log(`Successfully registered ${data.length} application commands.`))
	.catch(console.error);