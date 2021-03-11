
let fs = require('fs');
let path = require('path');


function display(file_arg)
{
    // for every file that is entered
    for(let i = 0 ; i < file_arg.length ; i++)
    {
        //check if the path input by th user is actually a file or not
        var stats = fs.statSync(file_arg[i]);
        if(stats.isFile()==true)
        {
            fs.stat(file_arg[i],function(err,stat){

                //if there is no error then read and display its content
                if(err==null)
                {
                    fs.readFile(file_arg[i],'utf8',function(err,data){
                        if(err) throw err;
                        console.log(data);
                    });
                }else if(err.code=='ENOENT')
                {
                    //file does not exist
                    console.log('File does not exists');
                }else{
                    console.log('Some other error: ',err.code);
                }
            });
        }
        else
        {
            console.log('Enter the valid file path');
            break;
        }
    }
}




module.exports = {
    displayfn : display
}