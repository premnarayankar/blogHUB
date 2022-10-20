import * as fs from "fs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    let data = await fs.promises.readdir("blogData");
    await fs.promises.writeFile(
      `blogData/${data.length + 1}.json`,
      JSON.stringify(req.body)
    );
    console.log(data);
    res.status(200).json(req.body);
  } else {
    res.status(500).json(["allBlogs"]);
  }
}
