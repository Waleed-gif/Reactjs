import { Link } from "react-router-dom";

const PostLists = ( {posts, title}) => {
    return ( 
        <div className="post-list">
        <h1>{title}</h1>        
        {posts.map((post) => (
            <div className="post-preview" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        <h1>{post.title}</h1>
                        <p>Content for this Post: {post.Body}</p>
                        <h3>Written by: {post.auther}</h3>
                    </Link>
            </div>
        ))}
        </div>
     );
}
 
export default PostLists;