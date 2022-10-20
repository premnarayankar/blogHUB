import React, { useState } from "react";

const contact = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    desc: "",
  });

  const chnageHandler = (e) => {
    setContactForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactForm);
    fetch("http://localhost:3000/api/postcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactForm),
    });

    setContactForm({
      name: "",
      email: "",
      phone: "",
      desc: "",
    });
  };

  return (
    <div className="container px-5">
      <h1 className="display-1 text-center">Contact us</h1>
      <form method="POST" action="" onSubmit={handleSubmit}>
        <div className="my-2">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={contactForm.name}
            onChange={(e) => chnageHandler(e)}
            required
          />
        </div>
        <div className="my-2">
          <label htmlFor="email" className="form-label">
            Name
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={contactForm.email}
            onChange={(e) => chnageHandler(e)}
            required
          />
        </div>
        <div className="my-2">
          <label htmlFor="number" className="form-label">
            Phone No
          </label>
          <input
            className="form-control"
            type="number"
            id="number"
            name="phone"
            placeholder="Phone No"
            value={contactForm.phone}
            onChange={(e) => chnageHandler(e)}
            required
          />
        </div>
        <div className="my-2">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            name="desc"
            id="desc"
            placeholder="Description"
            rows={3}
            value={contactForm.desc}
            onChange={(e) => chnageHandler(e)}
            required
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default contact;
