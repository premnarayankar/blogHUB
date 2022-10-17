// http://localhost:3000/api/blogs

import * as fs from "fs";

export default function handler(req, res) {
  fs.readFile("blogData/blogList.json", "utf-8", (err, data) => {
    try {
      res.status(200).json(JSON.parse(data));
    } catch (error) {
      console.log(error);
    }
  });
}
