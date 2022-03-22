import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
    const { id } = useParams(); 
    const { data: blog, error, isPending} = useFetch('http://localhost:3000/Blogs/' + id);
    const history = useHistory();

    const handleClick= () =>{
        fetch('http://localhost:3000/Blogs/'+ blog.id, {
            method: 'DELETE'
        }).then(()=> {
                history.push('/');
        })
    }
    
    return (  
        <div className="blog-details">
            {/* <h2>Blog Details - {id}</h2> */}
{/* Loading msg if true  and error if false*/}
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Author: { blog.auther }</p>
                    <div>{ blog.Body }</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;