import React, { useEffect, useState } from "react";
import * as fs from "fs";

const Slug = (props) => {
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    setBlog(props.blog);
  }, []);

  function createMarkup(c) {
    return { __html: c };
  }

  return (
    <>
      {blog && (
        <div className="container">
          <h1 className="display-1 my-5 text-center">{blog.title}</h1>
          <p>{blog.description}</p>
          <div dangerouslySetInnerHTML={createMarkup(blog.htmlContent)}></div>
        </div>
      )}
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  let blog = await fs.promises.readFile(`blogData/${slug}.json`, "utf-8");
  return {
    props: { blog: JSON.parse(blog) },
  };
}

export default Slug;
