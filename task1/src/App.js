import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Posts from './Posts';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'; 
import PostDetails from './PostDetails';
import Registration from './registration';
import Register from './register';
import Error from './Error';
import Filter from './filter';
import Task from './task';

function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes> 
        <Route path='/home' element={<Home/>}/>
        <Route path='/posts' element={<Posts />}/>
        <Route path='/registration' element={<Registration />}/>
        <Route path='/' element={<Register />}/>
        <Route path='/posts/:id' element={<PostDetails />}/>
        <Route path='/error' element={<Error />} />
        <Route path='/filter' element={<Filter />} />
        <Route path='/task' element={<Task />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
