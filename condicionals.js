//if
const sum = 1+1;

if(sum === 2) {
    console.log('Sum is 2!');
} else if (sum === 3){
    console.log('Sum is 3!')
} else {
    console.log('Sum is not 2!');
}

const sum1 = 2+2;
const sum2 = 3+3;

// && - and 
// || - ou

if(sum1 === 4 && sum2 === 6){
    console.log('Sum1 is 4 and sum2 is 6!');
}

if(sum1 === 4 || sum2 === 6){
    console.log('Sum1 is 4 and sum2 is 6!');
}



if (sum === 2) {
    number = 2;
} else {
    number = 4;
}

//mesma coisa que acima
let number = sum === 2 ? 2 : 4;


//switch
const car = 'Mercedes';
switch(car){
    case 'Mercedes':
        console.log('Mercedes é o carro');
        break;
    case 'Ferrari':
        console.log('Ferrari é o carro');
        break;
    case 'Tesla':
        console.log('Tesla é o carro');
        break;
}
