import React, { useEffect, useState } from "react";
import Link from "next/link";
import style from "../styles/Blog.module.css";

const blog = (props) => {
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

export async function getServerSideProps(context) {
  const data = await fetch("http://localhost:3000/api/blogs");
  const allBlogs = await data.json();
  return {
    props: { allBlogs },
  };
}

export default blog;
