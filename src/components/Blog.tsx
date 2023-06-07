import { Link } from "react-router-dom";
const posts = [
    {
        id: 1,
        title: "First Blog Post",
        filename: "post1.html",
        // Additional post data
    },
    {
        id: 2,
        title: "Second Blog Post",
        filename: "second-blog-post",
        // Additional post data
    },
    // Add more blog post objects as needed
];
const Blog = () => {
    return (
        <div>
            <h1>Blog</h1>
            {posts.map((post) => (
                <div key={post.filename}>
                    <a href={`/src/posts/${post.filename}`}>
                        <h2>{post.title}</h2>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Blog;
