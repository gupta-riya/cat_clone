let fs = require('fs');

function numberNonEmpty(file_path)
{

    //split the data into array
    var list_content = fs.readFileSync(file_path, 'utf8').toString().split('\n');

    //initialize a file with empty data
    fs.writeFileSync(file_path,'',function(err,data)
    {
        if(err) throw err;
    });

    //keep a variable that increments every time the loop encounters a non empty line
    let i = 1;
    //looping 
    for(let num = 0 ; num < list_content.length-1 ; num++)
    {
        //if the length of the line is greater than 1 only then add a number in front of it 
        if(list_content[num].length > 1)
        {
            var newLine = i  + ". "+ list_content[num];
            //append the new line in the data
            fs.appendFileSync(file_path,newLine.toString()+"\n")
            i++;
        }
        else
        {
            fs.appendFileSync(file_path,"\n");
        }
    }
    
     console.log('All Non-Empty lines are numbered!!');

}

module.exports = {
    numberNonEmptyfn : numberNonEmpty
}