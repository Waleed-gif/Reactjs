import { useNavigate } from "react-router-dom";
//navigate to different paths
//pass data also via state
const DashBoard = () => {
    const navigate = useNavigate();
    const data = {
        'name' : 'Waleed'
    }
    return ( 
        <>
            <p>Dashboard</p>
            <button onClick={() => {
                navigate('/logout', {state:data})
            }}>Log Out</button>
        </>
     );
}
 
export default DashBoard;