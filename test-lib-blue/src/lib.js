const chalk = require("chalk");

const blueReport = `
CPU: ${chalk.blue("90%")}
RAM: ${chalk.blue("40%")}
DISK: ${chalk.blue("70%")}
`;

const interval = chalk.blue.inverse.bold("Yay for orange colored text!");

module.exports = {
  sayCpuReport() {
    return blueReport;
  },
  sayInterval() {
    return interval;
  },
};
