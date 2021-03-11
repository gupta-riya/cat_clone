
let fs = require('fs');

function numberAll(file_path)
{

    //split the data into array
    var list_content = fs.readFileSync(file_path, 'utf8').toString().split('\n');

    //initialize a file with empty data
    fs.writeFileSync(file_path,'',function(err,data)
    {
        if(err) throw err;
    });

    //keep a variable that increments every time the loop encounters a new line
    let i = 1;
    //looping
    for(let num = 0 ; num < list_content.length-1 ; num++)
    {
        // add a number in front of every line 
        var newLine = i  + ". "+ list_content[num];
        fs.appendFileSync(file_path,newLine.toString()+"\n")
        i++;
    }
    
     console.log('All lines are numbered!!');

}
module.exports = {
    numberAllfn : numberAll
}