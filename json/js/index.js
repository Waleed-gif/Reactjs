// javascript for index.html
const renderPosts = async () => {
    let url = 'http://localhost:3000/posts';

    const res = await fetch(url);
    const posts = await res.json();
    //console.log(posts);
    let temp = '';
    posts.forEach(post => {
        temp += `
        <div class"post">
            <h2>${post.title}</h2>
            <p>ID of Posts is: ${post.id}</p>
            <p>$</p>
        </div>
        `;
    });
}
window.addEventListener("DOMContentLoaded", () => renderPosts());
 