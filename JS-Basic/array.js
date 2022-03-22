const arr = [1,2,3];
const marks = ['Waleed', 1, 2, 3, 4, 5, 6, 7, 8];
//Addition in last & first index
//marks.push(10);
//marks.unshift('Shehbaz');
//removal from last & first index
//marks.pop();
//marks.shift();
//marks.reverse();
//marks.splice(2,5); start from 2 index & count to 5
//console.log(marks);

let obj = [
    {name: "waleed", subject: "Computer Science", id:1},
    {name: "Saad", subject: "Chemistry", id:2},
    {name: "Ali", subject: "Physics", id:3}
];
obj = obj.concat(arr);
console.log(obj);
console.log(obj.name);