const getToDo = (resource,callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        //console.log(request, request.readyState);
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText)
            callback(undefined, data);
        } else if(request.readyState === 4){
            callback('Could not fetch data', undefined);
        }
    });
// type of request, endpoint of request
// method and URL requested pointn
//request.open('GET','https://jsonplaceholder.typicode.com/todos');
    request.open('GET', resource);
    request.send();   
};

getToDo('obj.json', (err, data) => {
    console.log(data);
    getToDo('obj2.json', (err,data) =>
    {
        console.log(data);
        getToDo('obj3.json', (err, data) => {
            console.log(data);
        })
    })
});
