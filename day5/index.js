const fs = require("fs");

const program = require("commander");

// const x = process.argv[2];
// if (x === "create-dir") {
//   fs.mkdir(process.argv[3], (err) => {
//     console.log(err);
//   });
// }

// node index.js mkdir data
program.command("mkdir <dirname>").action((dirname) => {
  fs.mkdir(dirname, (err) => {
    console.log(err);
  });
});

//node index.js rmdir data
program.command("rmdir <path>").action((path) => {
  fs.rmdir(path, (err) => {
    console.log(err);
  });
});

//node index.js mkfile data/text.txt hello
program.command("mkfile <path> <content>").action((path, content) => {
  fs.writeFile(path, content, (err) => {
    console.log(err);
  });
});

//node index.js removefile data/text.txt
program.command("removefile <path>").action((path) => {
  fs.unlink(path, (err) => {
    console.log(err);
  });
});

//node index.js readfile data/text.txt
program.command("readfile <path>").action((path) => {
  fs.readFile(path, "utf-8", (err) => {
    console.log(err);
  });
});

//node index.js movefile data/text.txt data2/text.txt
program.command("movefile <oldpath> <newpath>").action((oldpath, newpath) => {
  fs.rename(oldpath, newpath, (err) => {
    console.log(err);
  });
});

//node index.js appendfile data/text.txt world
program.command("appendfile <path> <content>").action((path, content) => {
  fs.appendFile(path, content, (err) => {
    console.log(err);
  });
});

program.parse(process.argv);
