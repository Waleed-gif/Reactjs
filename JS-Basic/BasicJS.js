// const nam = "Waleed";
// const age =22;
//template String
// const hello = (`My name is ${ nam } and I am ${age} years old.`);
// console.log(hello);
//  const s = 'Waleed Shehbaz, Ali Saad, Ghulam Mohiodin';
//  console.log(s.length);            //length of string
//  console.log(s.toUpperCase());     //Change of Case
//  console.log(s.substring(0,6).toUpperCase());
//  console.log(s.split(', '));

const todos = [
    {id:1, text: 'Take out Trash', isCompleted: true},
    {id:2, text: 'Meeting with Boss', isCompleted: true},
    {id:3, text: 'Dentist Appt', isCompleted: false}
];
// const n = todos.length;
// //console.log(todos[0].text);
// for(let i=0; i < n; i++){
//     console.log(todos[i].text);
// }


//forEach, map, filter
//For Each Loop
// todos.forEach(function(todo){
//     console.log(todo.text);
// });

//Map
// const todoText = todos.map(function(todo){
//     return todo.text;
// });
// console.log(todoText);

//Filter
// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true;
// });
// console.log(todoCompleted);
// Arrow Function
// const addNum = (num1 = 1, num2 = 1) => num1+num2;
const addNum = num1 => num1+5;
console.log(addNum(10));
