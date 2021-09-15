const fs = require("fs/promises");

const program = require("commander");

program.command("mkdir <name>").action(async (name) => {
  await fs.mkdir(name);
});

program.command("rmdir <path>").action(async (path) => {
  await fs.rmdir(path);
});

program.command("mkfile <path> <content>").action(async (path, content) => {
  await fs.writeFile(path, content);
});

program.command("removefile <path>").action(async (path) => {
  await fs.unlink(path);
});

program.command("readfile <path>").action(async (path) => {
  await fs.readFile(path, "utf-8");
});

program.command("appendfile <path> <content>").action(async (path, content) => {
  await fs.appendFile(path, content);
});

program.parse(process.argv);
