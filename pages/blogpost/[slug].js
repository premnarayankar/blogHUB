import { useRouter } from "next/router";
import React from "react";
import { data } from "../blogData/blogList";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  const blog = data.find((data) => data.title === slug);
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

export default slug;
