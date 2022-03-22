import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [auther, setAuther] = useState('waleed');
    const [isPending, setIsPending] = useState(false );
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, auther};
        //console.log(blog);
        setIsPending(true);
        fetch('http://localhost:3000/Blogs', {
            method: 'POST',
            headers: {"Content-Type": "Application/json"},
            body: JSON.stringify(blog)
        }).then ( () => {
            console.log("new Blog Added!!");
            setIsPending(false);
            //history.go(-1);
            history.push('/');
        })
    }
    
    return ( 
        <div className="create">
            <h2>Add New Blog!!!</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                    <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label>Blog Body</label>
                    <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Blog Author:</label>
                    <select value={auther} onChange= {(e) => setAuther(e.target.value)}>
                        <option value="waleed">Waleed</option>
                        <option value="ali">Ali</option>
                        <option value="khizer">Khizer</option>
                    </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
                {/* <p>Title: {title}</p>
                <p>Body: {body}</p>
                <p>Author: {auther}</p> */}
            </form>
        </div>
    );
}
 
export default Create;