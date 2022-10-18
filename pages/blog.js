import React, { useEffect, useState } from "react";
import Link from "next/link";
import style from "../styles/Blog.module.css";

const blog = () => {
  const [blogList, setBlogList] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogList(data));
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

export default blog;
