const Configstore = require('configstore')
const package = require('../package.json')

class KeyManager{
    constructor(){
        this.conf = new Configstore(package.name)
    }

    setKey(){
        this.conf.set('apiKey',key)
        return key
    }

    getKey(){
        const key = this.conf.get('apiKey')
        if(!key){
            throw new Error('API Key not found')
        }
        return key
    }

    deleteKey(){
        const key = this.conf.get('apiKey')
        if(!key){
            throw new Error('API Key not found')
        }

        this.conf.delete('apiKey')
        return
    }
}

module.exports = KeyManager