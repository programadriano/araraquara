import * as builder from 'botbuilder';

interface IResults {
    response: string;
}

export default [
    (session: builder.Session) => {
        builder.Prompts.text(session, 'Qual é o seu nome?');
    },
    (session: builder.Session, results: IResults) => {
        session.endConversation(`Olá tudo bem , ${results.response}`);
    }
]