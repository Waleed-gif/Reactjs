const getToDo = (callback) => {

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText)
            callback(undefined, data);
        } else if(request.readyState === 4){
            callback('Could not fetch data', undefined);
        }
    });
    
    // type of request, endpoint of request
    // method and URL requested pointn
    // request.open('GET','https://jsonplaceholder.typicode.com/todos');
    request.open('GET', 'obj.json');
    request.send();
};

console.log(1);
console.log(2);

getToDo((err, data) => {
    //console.log('Call Back is fired');
    //console.log(err, data);
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});
console.log(3);
console.log(4);