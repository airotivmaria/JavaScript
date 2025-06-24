//function tradicional
// function sum(a, b){
//     return (a+b);
// }

//arrow function
const sumArrow = (a, b) => {
    return a+b;
}

//OU: quando a função só tem uma linha, pode se utilizar a seguinte sintaxe:

const sumArrow2 = (a, b) => a + b;

const valor = sumArrow2(12,3);
console.log(valor);
