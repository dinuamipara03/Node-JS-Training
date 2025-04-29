let getName = (name: string): string => {
    return name;
};

console.log(getName("Dinaxi"));


//Using multiple datatype
let formatData = (id: number, name: string, values: number[]): string => {
    return `${id} - ${name} - ${values.join(", ")}`;
};

console.log(formatData(1, "ABC", [10, 20, 30]));   
console.log(formatData(2, "APPLE", [50, 20, 30]));
console.log(formatData(3, "MANGO", [70, 90, 80])); 

//using class
class Employee {
    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
        this.empName = name;
        this.empCode = code;
    }

    display = () => console.log(this.empCode +' ' + this.empName)
}
let emp = new Employee(1, 'Ram');
emp.display();