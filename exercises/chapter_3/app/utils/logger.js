const fs = require ('fs');

// PROMISES
function logger(text, id) {
    var json = new Object();
    json.sessionId = id;
    json.msg = text + " " + new Date().toDateString();
    new Promise(function (resolve, reject) {
        fs.appendFile('log.json', JSON.stringify(json), (error) => {
            if (error) {
                reject(error);
            }
            else {
                resolve();
            }
        });
    }).catch(function (error) {
        console.log('Failure!');
        throw error;
    }).then(function () {
        console.log('Success!');
    });
}

/* CALLBACKS
function logger (text, id){
    var json = new Object();
    json.sessionId = id;
    json.msg = text + " " + new Date().toDateString();
    fs.appendFile('log.json', JSON.stringify(json), (error) => { 
        if (error) {
            throw err;
        } else {
            console.log ("Success!");
        }
    });
}

*/

exports.logger = logger;
