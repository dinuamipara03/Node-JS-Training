//Without specifying any of the types
var currDate = new Date();
var dateStr = currDate.toDateString();
console.log(dateStr);
//Manually Typing Date Object
var currDate1 = new Date();
var dateStr1 = currDate1.toDateString();
console.log(dateStr1);
var currentDate = new Date();
console.log(currentDate.toDateString());
var currDate2 = {
    today: new Date(),
};
console.log(currDate2.today.toDateString());
