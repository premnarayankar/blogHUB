import * as fs from "fs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    let data = await fs.promises.readdir("blogData");
    const { title, description, author } = req.body;
    const newBlog = {
      id: data.length + 1,
      title: title,
      description: description,
      author: author,
      slug: title.replaceAll(" ", "-"),
    };
    const { slug } = newBlog;

    const validateFileName = data.find((val) => val == slug + ".json");
    if (!validateFileName) {
      await fs.promises.writeFile(
        `blogData/${slug}.json`,
        JSON.stringify(newBlog)
      );
      res.status(200).json({ Status: "Success", data: newBlog });
    } else {
      await fs.promises.writeFile(
        `blogData/${title + data.length}.json`,
        JSON.stringify({ ...newBlog, slug: slug + data.length })
      );
      res.status(200).json({ Status: "Success", data: newBlog });
    }
  } else {
    res.status(500).json({ Status: "Error", data: newBlog });
  }
}
