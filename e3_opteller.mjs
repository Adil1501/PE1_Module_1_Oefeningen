// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



// Voeg hier je eigen code in
let jeGetal1 = parseFloat(await userInput.question('Geef een eerste getal om de som te berekenen. '));
let jeGetal2 = parseFloat(await userInput.question('Geef een tweede getal. '));
let som = jeGetal1 + jeGetal2

console.log('De som van de getal ' + jeGetal1 + ' en ' + jeGetal2 + ' is ' + som + '.');

process.exit();
