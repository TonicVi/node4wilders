const chalk = require('chalk');

console.log(chalk.green('Hélène') + chalk.hex('#FF007F').bold(' Guillaume ') + chalk.blue.bgWhite('Marion') + ' ' + chalk.red.underline('Camille'));