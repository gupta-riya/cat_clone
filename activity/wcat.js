const fs = require('fs');
const { numberNonEmptyfn } = require('./commands/numberNonEmpty');

let input  = process.argv.slice(2);
let cmd = input[0];

/*commands to consider

1- node wcat.js filepath => displays content of the file in the terminal 
2- node wcat.js filepath1 filepath2 filepath3... => displays content of all files in the terminal(contactinated form) in the given order.
3- node wcat.js -s filepath => convert big line breaks into a singular line break
4- node wcat.js -n filepath => give numbering to all the lines 
5- node wcat.js -b filepath => give numbering to non-empty lines

*/

//if the filepath is correct, content of file is printed
displayfnObj = require("./commands/display");
breakLinefnObj = require("./commands/breakLine");
numberAllfnObj = require("./commands/numberAll");
numberNonEmptyfnObj = require("./commands/numberNonEmpty");


if(cmd=='-s'){

    //last input is send to the function so that even if mix operation is added in the input then 
    //also only first operation is carried out with the last input as file path
    breakLinefnObj.breakLinefn(input[input.length-1]);
}else if(cmd=='-n'){

    numberAllfnObj.numberAllfn(input[input.length-1]);

}else if(cmd=='-b'){

    numberNonEmptyfnObj.numberNonEmptyfn(input[input.length-1]);

}else{

    let stats = fs.statSync(cmd);

    if(stats.isFile())
    {
        displayfnObj.displayfn(input);
    }
    else
    {
        console.log("Wrong command");
    }
}



