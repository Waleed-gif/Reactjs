import { useParams } from "react-router-dom";

const PostDetails = () => {
    const {id} = useParams();
    

    return ( 
        <div className="post-details">
        <h1>posts Details - {id}</h1>        
        </div>
     );
}
 
export default PostDetails;