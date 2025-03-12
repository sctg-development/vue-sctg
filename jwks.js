import fs from 'fs';

function listDir(dir) {
    fs.readdir(dir, (err, files) => {
        files.forEach(file => {
            console.log(file);
        });
    });
}


async function getJwks() {
    // eslint-disable-next-line no-undef
    console.log(`retrieve https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`)
    const https = await import('https')
    // eslint-disable-next-line no-undef
    const url = `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`;
    return new Promise((resolve, reject) => {
        https.get(url, res => {
            let data = '';
            res.on('data', chunk => {
                data += chunk;
            });
            res.on('end', () => {
                data = JSON.parse(data);
                // eslint-disable-next-line no-undef
                data.domain = process.env.AUTH0_DOMAIN;
                resolve(data);
            })
        }).on('error', err => {
            console.log(err.message);
            reject(err);
        })
    });
}

(async () => {
    const jwks = await getJwks();
    fs.writeFile('./jwks.json',
    JSON.stringify(jwks),
    'utf8', function (err) {
        listDir('.');
        if (err) return console.log(err);
    });
})();
