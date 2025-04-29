var getName = function (name) {
    return name;
};
console.log(getName("Dinaxi"));
//Using multiple datatype
var formatData = function (id, name, values) {
    return "".concat(id, " - ").concat(name, " - ").concat(values.join(", "));
};
console.log(formatData(1, "ABC", [10, 20, 30]));
console.log(formatData(2, "APPLE", [50, 20, 30]));
console.log(formatData(3, "MANGO", [70, 90, 80]));
//using class
var Employee = /** @class */ (function () {
    function Employee(code, name) {
        var _this = this;
        this.display = function () { return console.log(_this.empCode + ' ' + _this.empName); };
        this.empName = name;
        this.empCode = code;
    }
    return Employee;
}());
var emp = new Employee(1, 'Ram');
emp.display();
