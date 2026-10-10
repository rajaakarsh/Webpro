let array = [1,13,5,7,11];

let newArr = []
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    newArr.push(element**2)
}

console.log(newArr);
