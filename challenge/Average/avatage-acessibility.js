function average(...numbers){
    const sum = numbers.reduce((accum, num)=> accum + num , 0)

    return sum / numbers.length
}

console.log(average(10,28,3,7,5,4))