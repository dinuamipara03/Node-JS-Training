//Without specifying any of the types
const currDate = new Date();
const dateStr: string = currDate.toDateString();
console.log(dateStr);

//Manually Typing Date Object
const currDate1: Date = new Date();
const dateStr1: string = currDate1.toDateString();
console.log(dateStr1);

// Using type alias to type the date object
type myDate = Date;
const currentDate: myDate = new Date();
console.log(currentDate.toDateString());

// Using interface to type the date object
interface dateInterface {
    today: Date;
}
const currDate2: dateInterface = {
    today: new Date(),
}
console.log(currDate2.today.toDateString());

