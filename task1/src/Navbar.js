import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Header</h1>
            <div className="content">
            <Link to='/home'>Home</Link>
            <Link to='/posts'>Posts</Link> 
            {/* <Link to='/posts/:id'>Posts Details</Link>  */}
            <Link to='/registration'>Registration</Link> 
            <Link to='/'>Login</Link> 
            <Link to='/filter'>Filter</Link> 
            <Link to='/task'>Task</Link> 
            </div>

        </nav>   
        
     );
}
 
export default Navbar;