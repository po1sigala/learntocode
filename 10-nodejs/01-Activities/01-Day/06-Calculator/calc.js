var operator=process.argv[2];
var numOne = parseFloat(process.argv[3]);
var numb2 = parseFloat(process.argv[4]);

if (operator=== "-"){
    console.log(numOne-numb2);
}else if
    (operator==="+"){
        console.log(numOne+numb2);
    } else if
    (operator==="/"){
        console.log(numOne/numb2);
    }else if
    (operator==="*"){
        console.log(numOne*numb2);
    }
    else if(operator==="%"){
        console.log(numOne%numb2);
    }