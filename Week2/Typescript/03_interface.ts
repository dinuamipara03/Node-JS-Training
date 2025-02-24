interface User {
    username: string;
    email: string;
}

const newUser: User = {
    username: "john_doe",
    email: "john@example.com"
};

console.log(`User: ${newUser.username}, Email: ${newUser.email}`);

// Properties of Interfaces
// 1. Extending Properties
interface For_Array {
    var1: string;
}
interface For_List extends For_Array {
    var2: string;
}

//2. Read-Only Properties
interface For_class {
    readonly name: string;
    id: number;
}

//3. Optional Properties
interface For_function {
    (key: string, value?: string): void;
}


// Implementing an Interface in a Class

interface Animal {
    name: string;
    sound: () => void;
}

class Dog implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sound() {
        console.log(`${this.name} says: Woof!`);
    }
}

const myDog = new Dog("Buddy");
myDog.sound();