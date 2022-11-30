function  average(numbers){
    let sum = 0;

    numbers.forEach(number =>{
        sum += number
    });

    const average = sum / numbers.length
    return average
}

console.log(average([10,28,3,7,5,4]))