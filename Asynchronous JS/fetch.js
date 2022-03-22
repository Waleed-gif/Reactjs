//how array work with the Fetch API
// got error when network not supporting in it.

fetch('obj.json').then(response => {
    console.log('resolved', response);
    return response.json();
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log('rejected', err);
});