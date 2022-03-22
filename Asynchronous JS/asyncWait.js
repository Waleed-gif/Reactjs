//async and await
const getToDo = async () => {
    const response = await fetch('obj.json');
    
    if(response.status !== 200){
        throw new Error('Canot fetch the data ');
    }
    const data = await response.json();
    return data;
};

getToDo()
    .then(data => console.log('resolved:',data))
    .catch(err => console.log('rejected', err.message));