import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Revision Session</h1>
            <div className="content">
                <Link to="/">Home</Link>
                <Link to="/create">Blog</Link>

            </div>
        </nav>
     );
}
export default Navbar;