function rolandGarros(
    typeMatch?: number,
    typeLabel?: string,
    round?: number,
    roundLabel?: string,
    courtName?: string,
    durationInMinutes?: number
) {
    return console.log(typeMatch, typeLabel, round, roundLabel, courtName, durationInMinutes);
};

rolandGarros(3, 'Draws', 1, 'First Round', 'Philippe-Chatrier Court', 10)