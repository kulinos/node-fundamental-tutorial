const { readFile, writeFile } = require('fs')



readFile('./content/test.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const firstFile = result;

    readFile('./content/test2.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
        }
        const secondFile = result;
        writeFile('./content/test-test2.txt', `${firstFile},  ${secondFile}`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Done!');
        }
        )
    })

})
