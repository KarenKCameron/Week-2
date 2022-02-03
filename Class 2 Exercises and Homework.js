// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)
const me = {
  firstName:  'Karen',
  lastName:  'Cameron',
  'favorite food': 'Fajitas',
  bestFriend: {
      firstName: 'Mat',
      lastName: 'Cameron',
      'favorite food': 'Cheeseburgers',
  }
}

// 2. console.log best friend's firstName and your favorite food
console.log(`Best friend's name: ${me.bestFriend.firstName}`);
console.log(`My favorite food: ${me['favorite food']}`);
// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X
const ticTacToe = [
  ['-','O','-'],
  ['-','X','O'],
  ['X','-','X']
];

// 4. After the array is created, 'O' claims the top right square.
// Update that value.
ticTacToe[0].pop();
ticTacToe[0].push('O');1

// 5. Log the grid to the console.
console.log(`Click carrot button to expand and view Tic Tac Toe Array:`)
console.log(ticTacToe);

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
const regex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
console.log(`Email validation regex: ${regex}`);
console.log(`Does myEmail and other test emails validate on https://rubular.com/?  Yes`)
const myEmail = 'foo@bar.baz';
const globalRegex = new RegExp('foo*', 'g')
console.log(regex.test(myEmail));
// expected output: true

console.log(globalRegex.lastIndex);
// expected output: 0

console.log(globalRegex.test(myEmail));
// expected output: true

console.log(globalRegex.lastIndex);
// expected output: 9

console.log(globalRegex.test(myEmail));
// expected output: false

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignDate = new Date('1/21/2019');
console.log(`Assignment Date: 
${assignDate}`);

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.
const dateDue = assignDate.setDate(assignDate.getDate() + 7);
assignDate.setHours(0,0,0,0);
const dueDate = new Date(dateDue);
console.log(`Due Date: 
${dueDate}`);

// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
const day = dueDate.getDate();
const month = dueDate.getMonth();
const htmlMonth = '0' + (month + 1);
const year = dueDate.getFullYear();
const formatMonth = months[month];
const htmlTimeTag = `<time datetime="${year}-${htmlMonth}-${day}">${formatMonth} ${day}, ${year}</time>`;
// 10. log this value using console.log
console.log(htmlTimeTag)