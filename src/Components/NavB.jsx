import React, { useState, useEffect } from "react";
import axios from "axios";

const NavB = () => {
  const [name, setName] = useState("");
  const [posts, setPosts] = useState([]);
  const [searchedPosts, setSearchedPosts] = useState([]);

  useEffect(() => {
    axios.get("http://49.13.2.10:4000/todos/").then((response) => {
      setPosts(response.data);
    });
  }, []);

  const handleSearch = () => {
    if (name.trim() === "") {
      setSearchedPosts(posts);
    } else {
      const filteredPosts = posts.filter((post) =>
        post.name.toLowerCase().includes(name.toLowerCase())
      );
      setSearchedPosts(filteredPosts);
    }
  };

  return (
    <>
      <div className="NavB">
        <h2>TODO LIST 📫</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name to search"
        />
        <button onClick={handleSearch}>Search</button>
        {searchedPosts.map((post) => {
          return (
            <div className="post-card" key={post.id}>
              <h2 className="post-title">{post.name}</h2>
              <p className="post-body">{post.description}</p>
              <div className="button">
                <div className="delete-btn">Delete</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NavB;
