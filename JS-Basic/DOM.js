console.log("Introduction to DOM");
let a = document;
//a = document.all;
//a = document.body;
Array.from(a).forEach(function(elememt){
    console.log(elememt);
})
//a = document.links[0].href;
a = document.links[1].text;
//a = document.images[0];
console.log(a);