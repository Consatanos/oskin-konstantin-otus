const promisify = require('util').promisify;
const path = require('path');
const fs = require('fs');
const readdirp = promisify(fs.readdir);
const statp = promisify(fs.stat);

async function scan(directoryName, results = { 'files': [], 'folders': [] }) {
    let files = await readdirp(directoryName);

    for (let f of files) {
        let fullPath = path.join(directoryName, f);
        let stat = await statp(fullPath);

        if (stat.isDirectory()) {
            results.folders = [...results.folders, fullPath];
            await scan(fullPath, results);
        } else {
            results.files = [...results.files, fullPath];
        }
    }

    return results;
}

scan(process.argv[2]).then((files) => {
    console.log(files)
});
