// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;



    const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply(`Pong!`);
	} else if (commandName === 'serveur') {
		await interaction.reply(`Nom du serveur : ${interaction.guild.name}\nTotal membres: ${interaction.guild.memberCount}`);
	} else if (commandName === 'utilisateur') {
		await interaction.reply(`Infos utilisateur :\nPseudo : ${interaction.user.username}\nIdentifiant : ${interaction.user.id}\nTag : ${interaction.user.tag}`);
	} else if (commandName === 'début') {
		await interaction.reply('Premier Message de RedBot :tada:');
	} else if (commandName === 'aide') {
		await interaction.reply(`RedBot a besoin d'idées pour s'améliorer.`);
    }})

// Login to Discord with your client's token
client.login(token);