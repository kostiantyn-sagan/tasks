const get = require('fetch').fetchUrl;

const url = 'https://pokeapi.co/api/v2/pokemon/';

class Countries {
    constructor(url) {
        this.url = url;
    }

    send(id) {
        const urlIsString = typeof this.url === 'string';
        const idIsNumber = typeof id === 'number';
        const url = `${this.url}${id}`;
        
        return new Promise((resolve, reject) => {
            if (!urlIsString) throw new Error('URL must be of type string');
            if (!idIsNumber) throw new Error('ID for get request must be of type number');
            
            get(url, (error, meta, body) => {
                if (meta.status === 200) resolve(JSON.parse(body))
            
                reject(`We have error, status code: ${meta.status}`);
            })
        })
    }
}

 export const countries = new Countries(url);