import { useState, useEffect} from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:3000/posts'); 
    // const [state,setState] = useState(false)
    // const handleClick  = ()=>{
    //     setState((prevState)=>!prevState)
    // }
    // useEffect(()=>{
    //         console.log('1st run')
    //         return  ()=>{
    //             console.log('clean up')
    //         }
    // },[state]);

    return (

        <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        {/* <BlogList blogs={blogs.filter(blog => blog.author === 'Waleed')} title="Filter Blogs" /> */}
        
        </div>
     );
}
 
export default Home;