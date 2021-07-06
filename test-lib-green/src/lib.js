const chalk = require("chalk");

const greenReport = `
CPU: ${chalk.green("90%")}
RAM: ${chalk.green("40%")}
DISK: ${chalk.green("70%")}
`;

const interval = chalk.green.inverse.bold("Yay for green colored text!");

module.exports = {
  sayCpuReport() {
    return greenReport;
  },
  sayInterval() {
    return interval;
  },
};
