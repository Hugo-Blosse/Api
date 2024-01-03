const BlogList = ( {blogs, title, handleDelete}) => {
    // const blogs = props.blogs;
    // const title = props.title;
    //const handleDelete = props.handleDelete;


    return (
        <div className="home">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.name }</h2>
                    <p>Written by {blog.name}</p>
                    <button onClick={() => handleDelete(blog.id)}>delete blog</button>
                </div>
            ))}
        </div>
    )
}

export default BlogList;