const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () =>{
    //console.log(request, request.readyState);
    if(request.readyState === 4){
        console.log(request.responseText);
    }
});

// type of request, endpoint of request
// method and URL requested pointn
request.open('GET','https://jsonplaceholder.typicode.com/todos/1');
request.send();
