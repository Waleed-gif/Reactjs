import { useState, useEffect} from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {
        // console.log('Use Effect runs');
        // console.log(blogs);
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
            .then(res => {
                //console.log(res);
                if(!res.ok){
                    throw Error('Could not fetch the data');
                }
                return res.json();
            })
            .then(data => {
                //console.log(data);
                setData(data);
                setIsPending(false);
            })
            .catch(err => {
                if(err.name === 'AbortError'){
                    console.log('Fetch aborted');
                }else{
                    setIsPending(false);
                    setError(err.message);
                }
            });
        },1000);
        return() => abortCont.abort();
    }, [url]);

    return {data, isPending, error}
}
 
export default useFetch;