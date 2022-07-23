const { boolean } = require("yargs");

const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Number to multiply",
  })
  .option("l", {
    alias: "list",
    type: boolean,
    default: false,
    describe: "Shows the multiplication table",
  })
  .option("u", {
    alias: "until",
    type: "number",
    default: 10,
    describe: "Indicates how far to multiply",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "Base must be a number";
    }
    return true;
  }).argv;

module.exports = argv;
