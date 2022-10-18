// http://localhost:3000/api/blogs

import * as fs from "fs";

export default async function handler(req, res) {
  const data = await fs.promises.readdir(`blogData`);
  let myflie;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myflie = await fs.promises.readFile(`blogData/${item}`, "utf-8");
    allBlogs.push(JSON.parse(myflie));
  }
  res.status(200).json(allBlogs);
}
