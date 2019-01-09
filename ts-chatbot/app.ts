import * as restify from 'restify';
import * as builder from 'botbuilder';

import dialog from './dialog'

var server = restify.createServer();

const connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

const bot = new builder.UniversalBot(connector, dialog);
server.post('/api/messages', (bot.connector('*') as builder.ChatConnector).listen());


server.listen(process.env.PORT || 3978, function () {
    console.log('%s listening to %s', server.name, server.url);
});










