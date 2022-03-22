import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'; 
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Posts from './PostLists';
import DashBoard from './Dashboard';
import Login from './Login';
import Logout from './Logout';
import PostDetails from './PostDetails';

function App() {
  let islogged = false
  let data = {
    'st' : 'User Not Logged in'
  }
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          {/* <Route path='/' element={<h1>Hello React Router</h1>} /> */}
          <Route  path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/posts/:id' element={<PostDetails />} />
          <Route path='/dashBoard' element={islogged ? <DashBoard /> : <Navigate to="/login" replace state={data}/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          
          <Route path='*' element={<h1>Error 404 Page not found!!!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
