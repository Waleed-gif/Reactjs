import  { useState }  from 'react';
import { Link } from 'react-router-dom';


const Posts = () => {
    const [posts, setPosts] = useState([
        {
            id: 1, 
            title: 'First Posts', 
            body: 'First Post... Compare Student Housing Options From a Wide Range of Flats, Dorms, Studios, Halls & More! Fully Furnished Premium Student Housing Near Major Schools & Universities. Book Now! Flexible Cancellations. No Hidden Cost. No Booking Charges. Exclusive Offers. Flexible Tenancies. Free of Cost Service. Types: Ensuite, Studio, Standard, Twodio, Threedio, Dorms, Twin Ensuite, Non Ensuite', 
            author: 'WALEED'
        },
        {
            id: 2, 
            title: 'Second Posts', 
            body: 'Second Post... Compare Student Housing Options From a Wide Range of Flats, Dorms, Studios, Halls & More! Fully Furnished Premium Student Housing Near Major Schools & Universities. Book Now! Flexible Cancellations. No Hidden Cost. No Booking Charges. Exclusive Offers. Flexible Tenancies. Free of Cost Service. Types: Ensuite, Studio, Standard, Twodio, Threedio, Dorms, Twin Ensuite, Non Ensuite', 
            author: 'Khizer'
        },
        {
            id: 3, 
            title: 'Third Posts', 
            body: 'Third Post... Compare Student Housing Options From a Wide Range of Flats, Dorms, Studios, Halls & More! Fully Furnished Premium Student Housing Near Major Schools & Universities. Book Now! Flexible Cancellations. No Hidden Cost. No Booking Charges. Exclusive Offers. Flexible Tenancies. Free of Cost Service. Types: Ensuite, Studio, Standard, Twodio, Threedio, Dorms, Twin Ensuite, Non Ensuite', 
            author: 'Ali'
        }
    ]);

    

    return(
        <div className="posts">
            <h1>All Posts...!</h1>
                
                {posts.map((post) => (
                    <div className="post-preview" key={post.id}>
                    
                    <Link to={`/posts/${post.id}`}>
                        <h2>Title: {post.title}</h2>
                        <p>Written By: {post.author}</p>
                    </Link>
                    </div>
                ))}
        </div>
        
     );
     
    }

 
export default Posts; 