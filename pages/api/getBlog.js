// this is file not useful when do static site  generation

// http://localhost:3000/api/getBlog?slug=react-blog

import * as fs from "fs";

export default function handler(req, res) {
  const slug = req.query.slug;
  fs.readFile(`blogData/${slug}.json`, "utf-8", (err, data) => {
    if (err) {
      console.warn("Error occured");
    } else {
      res.status(200).json(JSON.parse(data));
    }
  });
}
