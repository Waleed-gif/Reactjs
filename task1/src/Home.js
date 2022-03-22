import {Navigate} from 'react-router-dom'

const Home = () => {
    
    function auth(){
        if(localStorage.getItem("token")){
            return true;
            // return <Navigate to='/home'/>
        }else{
            return false;
            // return <Navigate to='/'/>
            }
        }
    const data = auth();
    if(data === false)
    {
        return <Navigate to='/' />
    }
    return (
            <div className="create">
                <h2>Login Successfully...!!!</h2>
            </div>            
            )   
}
export default Home;