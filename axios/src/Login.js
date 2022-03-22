//import { useLocation } from "react-router-dom";
//import { useHistory } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [isPending, setIsPending] = useState(false);
    //const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const post = {user, email};
        console.log(post);
        setIsPending(true);

        fetch('http://localhost:3000/login',{
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(post)
        }).then(() => {
            console.log('User Login');
            setIsPending(false);
        });

        
    }

    return ( 
        <div className="create">
            <h2>LOG IN...!</h2>
           <form onSubmit={handleSubmit}>
            <label>Enter UserName</label>
            <input 
                type="text"
                required 
                value={user} 
                onChange={e => setUser(e.target.value)}/>
            <label>Enter Email</label>
            <input 
                type="email" 
                required
                value={email} 
                onChange={e => setEmail(e.target.value)}
            />
            {!isPending && <button>Log in</button>}
            {isPending && <button disabled>New User Login...</button>}
            </form>
            <p>{user}</p>
            <p>{email}</p>
        </div>
     );
}
 
export default Login;