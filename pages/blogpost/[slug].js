import React, { useEffect, useState } from "react";

const slug = (props) => {
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    setBlog(props.blog);
  }, []);

  return (
    <>
      {blog && (
        <div style={{ textAlign: "center" }}>
          <h1>Title of the page {blog.title}</h1>
          <p>{blog.description}</p>
        </div>
      )}
    </>
  );
};

export async function getServerSideProps(context) {
  // router is not needed for serverside rendering;
  const slug = context.query.slug;
  const data = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`);
  const blog = await data.json();
  return {
    props: { blog },
  };
}

export default slug;
