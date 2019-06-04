function loggerFunction (args){
    args.forEach(function (val, index, array) {
        console.log(index + ': ' + val);
    });
    let d = new Date();
    var datestring = "Day: " + d.getDate()  + " Month: " + (d.getMonth()+1) + " Year: " + d.getFullYear() + " Hour: " +
    d.getHours() + ":" + d.getMinutes();
    console.log (datestring);
}

function myFunction (){
    let args = process.argv.slice(2);
    loggerFunction (args);
}

//TODO: revisar si esta bien llamar a la funcion asi, o si es de otra forma
myFunction()

/*TODO revisar 
comando: node app.js --msg="Demo MSG" 
imprime: --msg=Demo MSG
deberia imprimir: "Demo MSG" - ¿en Windows usar otro comando?
*/

