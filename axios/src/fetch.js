import React, { useEffect, useState } from 'react'
const url = 'http://localhost:8000/Blogs';
const FetchAPI = () => {
    const [data, setData] = useState([]);
    //Empty object Array
    const apiGet = () => {
        //fetch('https://jsonplaceholder.typicode.com/posts')
        fetch(url)
        .then(response => {
            console.log('resolved', response);
            return response.json();
        })
        .then(data => {
            console.log(data);
            setData(data);
        })
        .catch(err => {
            console.log('rejected', err);
        }); 
    }
    return (
        <div>
            <h1>Fetch API</h1>
            <button onClick={apiGet}>Fetch API</button>
            <br />
            <pre>{JSON.stringify(data, null, 2)}</pre>
            {/* js value to be converted, replacer and space */}
        </div>
    );
}

export default FetchAPI;