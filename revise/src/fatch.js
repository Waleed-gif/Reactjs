//reserve the outputting org file
import {useState, useEffect} from "react";
import BlogList from "./BlogList";


const Lists = () => {
    const [blogs, setBlogs] = useState([
        {title: 'First Blog', body: 'Content line or the actual blog', author: 'Waleed', id:1},
        {title: 'Second Blog', body: 'Content line or the actual blog', author: 'Saad', id:2},
        {title: 'Third Blog', body: 'Content line or the actual blog', author: 'GM', id:3}
    ]);
    const [marks, setMarks]= useState(3.4);
    useEffect(() =>{
        console.log("useEffect Function is running");
        console.log(marks);
    },[]);
    
    const handleDelete= (id) => {
        const newBlogs= blogs.filter(blog => blog.id !==id);
        setBlogs(newBlogs);
    }
    return(
        <div className="list">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Saad')} title="Saad's Blog" />
            <button onClick={()=> setMarks(3.7)}>Click</button>
            <p>{marks}</p>
        </div>
    );
}
 
export default Lists;