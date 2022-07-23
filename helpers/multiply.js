const fs = require("fs");

const saveData = async (base = 5, list = false, until = 10) => {
  try {
    let output = "";
    for (let i = 1; i <= until; i++) {
      output += `${base} x ${i} = ${base * i}\n`;
    }

    if (list) {
      console.log("-----------");
      console.log(`Table of ${base}`);
      console.log("-----------");
      console.log(output);
    }

    fs.writeFileSync(`./outputs/table-${base}.txt`, output);
  } catch (err) {
    throw err;
  }

  return `File table-${base}.txt`;
};

module.exports = {
  saveData,
};
