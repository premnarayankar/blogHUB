import React, { useState } from "react";

const CreateBlog = () => {
  const [blogForm, setBlogForm] = useState({
    id: 0,
    title: "",
    description: "",
    author: "",
  });

  const chnageHandler = (e) => {
    setBlogForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/createblog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogForm),
    });

    setBlogForm({
      id: 0,
      title: "",
      description: "",
      author: "",
    });
  };

  return (
    <div className="container">
      <h1 className="display-1 text-center my-4">Create Blog</h1>
      <form method="POST" action="" onSubmit={handleSubmit}>
        <div className="my-2">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            className="form-control"
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            value={blogForm.title}
            onChange={(e) => chnageHandler(e)}
            required
          />
        </div>
        <div className="my-2">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            name="description"
            id="description"
            placeholder="Description"
            rows={3}
            value={blogForm.description}
            onChange={(e) => chnageHandler(e)}
            required
          />
        </div>
        <div className="my-2">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            className="form-control"
            type="text"
            id="author"
            name="author"
            placeholder="Author name"
            value={blogForm.author}
            onChange={(e) => chnageHandler(e)}
            required
          />
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CreateBlog;
