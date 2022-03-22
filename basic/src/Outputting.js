import {useState} from 'react';
import BlogList from './BlogList';

const Outputting = () => {
    const [blogs, setBlogs] = useState([
        {title: 'First Blog', body: 'The content regarding the blogs', author: 'Waleed', id:1},
        {title: 'Second Blog', body: 'The content regarding the blogs', author: 'Ali Saad', id:2},
        {title: 'Third Blog', body: 'The content regarding the blogs', author: 'Mohiodin', id:3},
    ]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All blogs!"/>
            <BlogList blogs={blogs.filter((blogs) => blogs.author === 'Ali Saad')} title="Saad's blogs!"/>
            
            {/* blogs ={blogs} is a prop and we get it on blogList page */}
        </div>
    );
}
 
export default Outputting;