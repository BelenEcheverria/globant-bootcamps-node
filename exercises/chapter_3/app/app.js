//TODO: revisar la forma en que escribe el JSON en el archivo, queda sin [ ... ]
const uui = require('uuid/v1');
const logger = require('./utils/logger');

function myFunction (){
    //let args = process.argv.slice(2); "The app should now be able to start with npm start" - como pasarle los parametros?
    var text = "Hello world!";
    var id = uui();
    logger.logger(text, id);
}

myFunction();

