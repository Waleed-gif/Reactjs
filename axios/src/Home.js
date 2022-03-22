import { useEffect, useState } from "react";
import PostLists from "./PostLists";

const Posts = () => {

    const [posts, setPosts] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    // let {category, id} = useParams();
    // let [SearchPharams, setSearchPharams] = useSearchParams();
    // console.log(SearchPharams);
    // //gives URL value
    // console.log(SearchPharams.get('price'));
    useEffect(() => {
        const absortCont = new AbortController();
        setTimeout(() => {
            fetch('http://localhost:3000/posts', {signal: absortCont.signal})
                .then(res => {
                    if(!res.ok){
                        throw Error('Could Not Fetch Data');
                    }
                    return res.json();
                })
                .then(data => {
                    //console.log(data);
                    setPosts(data);
                    setIsPending(false);
                })
                .catch(err => {
                    //console.log(err.message);
                    if(err.name === 'AbortError'){
                        console.log('Fetch Absorted')
                    }else{
                    setError(err.message);
                    setIsPending(false);
                    }
                })

        }, 1000);
        return () => absortCont.abort();
    }, []);

    return ( 
        <div className="home">
           {isPending && <div>Loading...</div>}
           {error && <div>{error}</div>} 
            
            {posts && <PostLists posts={posts} title="All Posts!!!" />}
        </div>
            
     );
}

export default Posts;