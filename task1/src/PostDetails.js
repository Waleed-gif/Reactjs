import  { useState, useEffect }  from 'react';
import { useParams } from "react-router-dom";

const PostDetails = () => {    
    const { id } = useParams();   
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
    //console.log(posts.id);
    const data = () =>{
        //console.log(id);
        return posts.filter(post => `${post.id}` === id);
    };
    const post = data();
    useEffect(() => {
        let post = data();
        console.log(post);
        
    },[])
    return ( 
        <div className="create">
            <h2>Blogs Details</h2>
                <p>{id}</p>
                {/* <h1>{data.title}</h1> */}
                {post.map((post) => (
                    <div className="post-preview" key={id}>
                        <h2>Title: {post.title}</h2>
                        <p>Title: {post.body}</p>
                        <h4>Written By: {post.author}</h4>
                    </div>
                ))}
        </div>
     );
}
export default PostDetails;