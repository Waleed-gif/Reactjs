import {useState} from 'react';


const Home = () => {
    const[name, setName] = useState('Waleed');
    const[age, setAge] = useState(20);
    
    const btn1 = () => {
        setName('Shehbaz');
        setAge(30);
    }
    return ( 
        <div className="home">
            <h1>Welcome to Content</h1>
            <p>{name} is {age} years Old</p>
            <button onClick={btn1}>Click</button>
            
        </div>
    );
}

export default Home;