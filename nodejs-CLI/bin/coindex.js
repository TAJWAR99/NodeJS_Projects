#!/usr/bin/env node
const package = require("../package.json")
const program = require("commander")

//console.log('Hello')

//run coindex -V
program
.version(package.version)
.command('key', 'Manage API key -- https://nomics.com')
.parse(process.argv)

// console.log(process.argv)


//sudo npm install -g
//sudo npm link
//sudo npm install commander inquirer configstore axios colors