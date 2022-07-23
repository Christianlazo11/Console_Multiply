const { saveData } = require("./helpers/multiply");
const argv = require("./config/argv");

saveData(argv.b, argv.l, argv.u)
  .then((resp) => console.log(resp))
  .catch((err) => console.log(err));
