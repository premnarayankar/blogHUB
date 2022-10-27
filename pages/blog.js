import React, { useEffect, useState } from "react";
import Link from "next/link";
import style from "../styles/Blog.module.css";
import * as fs from "fs";

const Blog = (props) => {
  const [blogList, setBlogList] = useState(null);
  useEffect(() => {
    props && setBlogList(props.allBlogs);
  }, []);

  const fetchData = () => {};
  return (
    <div className="container pb-5">
      <h1 className="display-1 my-4 text-center">Blogs</h1>
      {blogList &&
        blogList.map((data) => (
          <Link key={data.id} href={`../blogpost/${data.slug}`}>
            <div className="card mt-3" style={{ cursor: "pointer" }}>
              <div className="card-header">{data.title}</div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>{data.description.slice(0, 160)}....</p>
                  <footer className="blockquote-footer">{data.author}</footer>
                </blockquote>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

// static site generation not needed in api or fetch request
// static site
export async function getStaticProps(context) {
  const data = await fs.promises.readdir(`blogData`);
  let myflie;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myflie = await fs.promises.readFile(`blogData/${item}`, "utf-8");
    allBlogs.push(JSON.parse(myflie));
  }

  return {
    props: { allBlogs },
  };
}

export default Blog;
