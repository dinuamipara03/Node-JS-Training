let animals = ['cat', 'dog', 'lion', 'wolf', 'deer'] 
      
    console.log("Simple for:")
    for(let i = 0; i < animals.length; i++) { 
        // Prints i-th element of the array 
        console.log(animals[i]); 
    } 

    console.log("For...of:")
    for(let i of animals) { 
        // Print each element of the array 
        console.log(i); 
    } 

    console.log("For...in:")
    for(let i in animals) { 
        // Print each element of the array 
        console.log(i, animals[i]); 
    }



    let i: number = 2;
    console.log("while:")
    while (i < 4) {
        console.log( "Block statement execution no." + i )
        i++;
    }



    let j: number = 2;
    console.log("do...while:")
    do {
        console.log("Block statement execution no." + j )
        j++;
    } while ( j < 4)