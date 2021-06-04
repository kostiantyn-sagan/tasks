export const get = require('fetch').fetchUrl;
export const url = 'https://pokeapi.co/api/v2/pokemon/1';

export function send() {
    return new Promise((resolve, reject) => {
        get(url, (error, meta, body) => {
            if (meta.status === 200) resolve(JSON.parse(body))
            reject(`We have error, status code: ${meta.status}`);
})
    })
}