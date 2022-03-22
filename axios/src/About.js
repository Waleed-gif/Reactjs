import React, { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';

const About = () => {
    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();


    useEffect(() => {
        //console.log('1');
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(res.data);
            setName(res.data.name);
            setMoves(res.data.moves.length);
        }
        getData();
    });
    return (
        <div className="select">
            <h1>You Choose <span style={{color: 'blue'}}>{num} Value</span> </h1>
            <h1>Name of Character is <span style={{color: 'blue'}}>{name} Value</span> </h1>
            <h1>And have <span style={{color: 'blue'}}>{moves} moves</span></h1>
            <select value={num} onChange={(e) => setNum(e.target.value) }>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="25">25</option>
                <option value="260">260</option>
            </select>
        </div>
    );
};
 
export default About;
