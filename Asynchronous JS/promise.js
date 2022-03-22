const getToDo = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
    
        request.addEventListener('readystatechange', () => {
            //console.log(request, request.readyState);
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText)
                resolve(data);
            } else if(request.readyState === 4){
                reject('error getting resource');
            }
        });
        request.open('GET', resource);
        request.send();   
    });
};

getToDo('obj.json').then(data => {
    console.log('promise resolved: ', data);
    return getToDo('obj2.json');
}).then(data => {
    console.log('Promise 2 resolved: ', data);
    return getToDo('obj3.json');
}).then(data => {
    console.log('Promise 3 resolved: ',data)
}).catch(err => {
    console.log('promise rejected: ',err);
});


//Promise example with some dummy data
// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         resolve('Data is fetched');
//         //reject('Some is Error on its way');
//     });
// };
// getSomething().then(data => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });
