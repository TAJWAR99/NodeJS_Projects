const color = require("colors")
const inquirer = require("inquirer")
const KeyManager = require("../lib/KeyManager")

const keys = {
    set(){
        console.log('Hello from set')
    },
    // async set(){
    //     const keyManager = new KeyManager()
    //     const input = await inquirer.prompt([
    //         {
    //             type: 'input',
    //             name: 'key',
    //             message: 'Enter API key'.green + 'https://nomics.com'
    //         }
    //     ])
    //     const key = keyManager.setKey(input.key)

    //     if(key){
    //         console.log('Hello from set')
    //     }
    // },
    show(){
        console.log('Hello from show')
    },
    remove(){
        console.log('Hello from remove')
    }
}

module.exports = keys