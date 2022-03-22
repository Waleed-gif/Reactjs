const blogList = (blogs, title) => {
    // const blogList = (props) => {
    // const blogs = props.blogs;
    // const title = props.title;
    
    //console.log(props,blogs);
    return (
        <div className="blog-list">
                <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Content of the blog:<b> { blog.body } </b></p>
                    <p>Written by: { blog.author }</p>  
                </div>
            ))}  
        </div>

    );
}
 
export default blogList;