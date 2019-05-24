type BotMaster = { botname: string, numero: number } | { botname: string, numero: string }

function getBot(): BotMaster[] {
    let bots = [
        { botname: "Renato", numero: 1 },
        { botname: "Renato 123", numero: "123" }
    ];

    return bots;
}

console.log(getBot());