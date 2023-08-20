#!/usr/bin/env node

const inquirer = require("inquirer");
const simpleGit = require("simple-git");

const git = simpleGit();

const commands = {
  init: async () => {
    const answers = await inquirer.prompt([
      {
        type: "list",
        name: "template",
        message: "Choose a template:",
        choices: ["default"],
      },
    ]);

    const templates = {
      default: "https://github.com/sanjorcool/sanjorcool.git",
    };

    const templateURL = templates[answers.template];

    const targetDirectory = process.cwd(); // Current working directory

    console.log("Cloning template...");
    git.clone(templateURL, targetDirectory, [], (err) => {
      if (err) {
        console.error("Error cloning template:", err);
      } else {
        console.log("Template cloned successfully!");
      }
    });
  },
};

const [, , command, ...args] = process.argv;

if (commands[command]) {
  commands[command](args);
} else {
  console.error("Unknown command:", command);
}
