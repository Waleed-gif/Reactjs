//import {useState, useEffect} from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Lists = () => {
     // write oneline code and fetch the endpoint results
    const {data: blogs, isPending, error} = useFetch('http://localhost:3000/Blogs');

 
    return(
        <div className="list">
        {error && <div>{error}</div>}
        {isPending && <div>Loading ...</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );

}
 
export default Lists;