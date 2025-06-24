// for (let index = 0; index < 10; index++) {
//     console.log(index)
// };

const carros = ['Ferrari', 'Tesla', 'Mercedes'];

//for
for(let i = 0; i < carros.length; i++){
    console.log(carros[i]);
};

for(let car of carros){
    console.log(car);
}

carros.forEach(function(car){
    console.log(car);
})

const person = {
    name: 'Jane',
    age: 20
};

for(property in person) {
    console.log(person[property]);
}

//while
let index = 0;

while (index < 10) {
    console.log('index é menor do que 10!');
    // index = index + 1
    // index += 1 
    index++;
}


