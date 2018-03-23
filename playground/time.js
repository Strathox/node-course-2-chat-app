var moment = require('moment');



// date.add(2, 'year');
// console.log(date.format('MMM Do, YYYY'));
//date.add(3, 'hour');
var createdAt = 1234;
var date =  moment(createdAt);

console.log(date.format('LT'));
console.log(date.format('h:mm a'));
