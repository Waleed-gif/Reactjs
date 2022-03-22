import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [pwd, setPwd] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(localStorage.getItem("Name"));
        if(name === localStorage.getItem("Name")){
            localStorage.setItem("token","dummy token");
             navigate("/home")
         }else{
             navigate("/")
             alert("User Name Doesn't Match");
      }  
    };
    

  return (
     <div className="create">
    <form>
      <label>Username: </label>
      <input
        type="text"
        value={name}
        placeholder="enter a username"
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <label>password: </label>
        <input
          type="password"
          value={pwd}
          placeholder="enter a password"
          onChange={(e) => setPwd(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Login</button>
    </form>
     </div>
  );
}
export default Register;