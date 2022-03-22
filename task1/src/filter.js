import {useState, useEffect} from 'react'
const Filter = () => {
//    const arr = [1,2,3,4,5,6];
//always return value when the arrow function is true
    //const newArr = arr.filter(a => a%2 === 0);
//return whole values of the array but assigns true or false along with it
    // const newArr = arr.map(a => a%2 === 0);
    // console.log(newArr);
//reduce accepts 2 arug and return 1 primitive value or object
    // const sum = arr.reduce((num1, num2)=>{
    //     // console.log(num1, num2);
    // return num1+num2;
    // })
//All methods in one
    // const newArr = arr
    // .filter(a => a%2 === 0)
    // .map(a => a*a)
    // .reduce((a,b) => a+b);
    // console.log(newArr);
//Object of Arrays
    // const order = [
    //     { id:1, price: 10},
    //     { id:3, price: 40},
    //     { id:2, price: 50},
    //     { id:3, price: 60},
    //     { id:3, price: 70},
    //     { id:2, price: 200},
    // ]  
    // const arr =  order
    // .filter(a => a.id === 1)
    // .map(a => a.price)
    // .reduce((a,b) => a+b);
//push value in array after filter  
const data = () => {
    const newArray = [        
        { id:1, price: 10},
        { id:2, price: 40},
        { id:3, price: 10},
        { id:1, price: 60},
        { id:5, price: 70},
        { id:6, price: 10},
        { id:6}
    ];  
    const arr1= [];
    newArray.map((item)=>{
        if(item.price>10){
            arr1.push(item)
        }
    });
    return arr1;
}
// console.log(post);
//const post = data();
    useEffect(() => {
        const post = data();
        console.log(post);
    },[])

const [count, setCount] = useState(10);
const [theme, setTheme] = useState('Start');
    const decrementCount = () =>{
        if(count <= 0 ){
            return;
        }else{
            // if(count-9 > 0)
            // setCount(count -10);
            setCount(count -1)
            setTheme('Reducing...')
        }
    }
    const incrementCount = () =>{
            setCount(count +1);
            setTheme('Increasing...');
    }
 
    return ( 
    <div className='create'>
            <h1>Filter Methods</h1>
            <span>  { count }  </span> <br />
            <span>  { theme }  </span> <br />
            <button onClick={decrementCount}> Decreament </button>
            <button onClick={incrementCount}> Increament </button>
    </div>
    );
}
 
export default Filter;