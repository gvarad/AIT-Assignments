const prompt2 = require('prompt-sync')({sigint: true});
function add(a,b)
{
    console.log('Addition of a and b:',a+b);
}

function sub(a,b)
{
    console.log('Subtraction of a and b:',a-b);
}
function mul(a,b)
{
    console.log('Multiplication of a and b:',a*b);
}
function div(a,b)
{
    console.log('Division of a and b:',a/b);
}
const a = parseInt(prompt2('Enter first number: '));
const b = parseInt(prompt2('Enter second number: '));
console.log('1.Addition\n 2.Subtraction\n 3.Multiplication\n 4. Division\n 5.Exit');

do 
{
    var ch = parseInt(prompt2("Enter your choice of OPERATION:"));
    switch(ch)
    {            
            case 1: add(a,b);
                    break;
            
            case 2: sub(a,b);
                    break;

            case 3: mul(a,b);
                    break;

            case 4: div(a,b);
                    break;  
                        
            case  5:console.log("Thank You!!!");
                break;
            
    }
        
}while(ch!=5);

