const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    //console.log(request, request.readyState);
    if(request.readyState === 4 && request.status === 200){
        console.log(request.responseText);
} else if(request.readyState === 4){
    console.log('Could not fetch the data')
}
});

// type of request, endpoint of request
// method and URL requested pointn
request.open('GET','https://jsonplaceholder.typicode.com/todos');
request.send();
