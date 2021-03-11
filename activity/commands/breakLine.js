
let fs = require('fs');


function breakLine(file_path)
{
    fs.readFile(file_path,'utf-8',function(err,data){
        if(err) throw err;

        //replace multiple break lines with a single new line
        let newContent = data.replace(/\n\s*\n/g,'\n');

        fs.writeFile(file_path,newContent,'utf-8',function(err,data){
            if(err) throw err;
            console.log('Multiple break lines replaced!!');
        });
    });
}




module.exports = {

    breakLinefn : breakLine
}