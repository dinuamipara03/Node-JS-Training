let animals = ['cat', 'dog', 'lion', 'wolf', 'deer'] 
 //for     
    console.log("Simple for:")
    for(let i = 0; i < animals.length; i++) { 
        // Prints i-th element of the array 
        console.log(animals[i]); 
    } 
//for..of
    console.log("For...of:")
    for(let i of animals) { 
        // Print each element of the array 
        console.log(i); 
    } 
//or..in
    console.log("For...in:")
    for(let i in animals) { 
        // Print each element of the array 
        console.log(i, animals[i]); 
    }
//while
    let i: number = 2;
    console.log("while:")
    while (i < 4) {
        console.log( "Block statement execution no." + i )
        i++;
    }
//do..while
    let j: number = 2;
    console.log("do...while:")
    do {
        console.log("Block statement execution no." + j )
        j++;
    } while ( j < 4)
//foreach
    let arr: number[] = [11, 89, 23, 7, 98]; 

    // printing each element
    arr.forEach((value: number) => {
        console.log(value);
    });
