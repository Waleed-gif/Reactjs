import { Link } from "react-router-dom";

const BlogList = ({blogs,title,handleDel}) => {   
  
    return (
        <div className="blog-list">
            <h2> {title} </h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                    <h1>Title: {blog.title}</h1>
                    <p>Auther: {blog.auther}</p>
                </Link>
                    {/* <button onClick={() => handleDel(blog.id)}>Remove Blog</button> */}
                </div>
            ))}
        </div>
     );
}
export default BlogList;

