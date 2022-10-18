import React, { useEffect, useState } from "react";
import Link from "next/link";
import style from "../styles/Blog.module.css";
import * as fs from "fs";

const Blog = (props) => {
  const [blogList, setBlogList] = useState(null);
  useEffect(() => {
    props && setBlogList(props.allBlogs);
  }, []);
  return (
    <div className={style.container}>
      {blogList &&
        blogList.map((data) => (
          <div className={style.blogCard} key={data.id}>
            <Link href={`../blogpost/${data.slug}`}>
              <a>
                <h2>{data.title}</h2>
              </a>
            </Link>
            <p>{data.description}</p>
          </div>
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
