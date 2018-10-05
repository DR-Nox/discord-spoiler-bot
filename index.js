'use strict';

const SpoilerBot = require('discord-spoiler-bot');

let config = {
    token: 'you_secret_token_here',
};

let bot = new SpoilerBot(config);
bot.connect();
