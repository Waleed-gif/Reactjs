import { Link } from "react-router-dom";

const blogList = ({blogs, title}) => {

    return ( 
        <div className="blog-list">
            <h2>{title} </h2>
        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                <h2>Title: {blog.title}</h2>
                <p>Content: {blog.body}</p>
                <p>Writter: {blog.author}</p>
                {/* <button onClick={() => handleDelete(blog.id)}>Delete</button> */}
                </Link>
            </div>
        ))}
        </div>
     );
}
 
export default blogList;