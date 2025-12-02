import React, { useState } from "react";
import axios from "axios";

function PostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://dummyjson.com/posts/add", {
        title,
        body,
        userId: 1, // dummyjson requires a userId field
      });
      console.log(response.data); // optional: inspect response
      setMessage("Post Added!");
      setTitle("");
      setBody("");
    } catch (error) {
      console.error(error);
      setMessage("Error adding post");
    }
  };

  return (
    <div>
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
          />
        </div>

        <div>
          <label>Body: </label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Enter post body"
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default PostForm;