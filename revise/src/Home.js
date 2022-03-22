import {useState} from 'react';
const Home = () => {
    
    const [name, setName] = useState('Waleed'); 
    const [marks, setMarks] = useState(3.4);
    const [dept, setDept] = useState('CS') ;

    const handle =() => {
        setName('Saad');
        setMarks(3.7);
        setDept('Chemmistry');

    }
    
    return ( 
        <div className="home">
        <p>{name} has secured {marks} CGPA</p>
        <p>{dept}</p>
        <button onClick={handle}>Click Here</button>
        </div>
     );
}
 
export default Home;