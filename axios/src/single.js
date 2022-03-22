import { useParams } from "react-router-dom";

const Single = () => {
    const {id} = useParams()
    return ( 
        <>
            <h2>Posts Details - {id} </h2>
        </>
     );
}
 
export default Single;