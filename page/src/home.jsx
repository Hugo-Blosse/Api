import { useState, useEffect } from "react";
import BlogList from "./bloglist";

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog => blog.id !== id));
        setBlogs(newBlogs);
    }

    useEffect(() => {
        fetch('https://localhost:7113/user')
          .then(res => {
            return res.json();
          })
          .then(data => {
            setBlogs(data);
          })
      }, [])

    return (
        <div className="home">
            {blogs && <BlogList blogs = {blogs} title="Blogi" handleDelete={handleDelete}/>}
            <button onClick={() => setName('luigi')}>change name</button>
            <p>{name}</p>
        </div>
    );
  }
//<BlogList blogs = {blogs.filter((blog) => blog.author === "mario")} title="Mario's blogs" />
export default Home;