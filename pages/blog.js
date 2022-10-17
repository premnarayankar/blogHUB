import React from "react";
import Link from "next/link";
import style from "../styles/Blog.module.css";
import { data } from "../blogData/blogList";

const blog = () => {
  return (
    <div className={style.container}>
      {data.map((data) => (
        <div className={style.blogCard} key={data.id}>
          <Link href={`../blogpost/${data.title}`}>
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
