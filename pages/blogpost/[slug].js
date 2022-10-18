import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const slug = () => {
  const [blog, setBlog] = useState(null);
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    fetch(`http://localhost:3000/api/getBlog?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
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

export default slug;
