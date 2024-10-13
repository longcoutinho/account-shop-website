import type { NextApiRequest, NextApiResponse } from "next";
import fsPromises from "fs/promises";
import path from "path";

type IComment = {
  id: string;
  userName: string;
  comment: string;
  time: number;
  productId: string;
};

const filePath = path.join(process.cwd(), "src", "_mock", "reviews.json");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    console.log(JSON.parse(req.body));
    const { comment, userName, productId } = await JSON.parse(req.body);
    try {
      const newComment: IComment = {
        id: Date.now().toString(),
        comment: comment,
        time: Date.now(),
        userName: userName,
        productId: productId,
      };
      const jsonData = await fsPromises.readFile(filePath);
      const comments: IComment[] = JSON.parse(jsonData as any);
      const existUser = comments.find(
        (user) => user?.productId === productId && user?.userName === userName
      );
      if (existUser) {
        res.status(500).json({ message: "Exist", statusCode: 401 });
      } else {
        comments.push(newComment);
        const updatedData = JSON.stringify(comments);
        await fsPromises.writeFile(filePath, updatedData);
        res.status(200).json({ message: "OK", comments, statusCode: 200 });
      }
    } catch (e) {
      res.status(500).json({ message: "Error" });
    }
  } else if (req.method === "GET") {
    try {
      const jsonData = await fsPromises.readFile(filePath);
      const comments = JSON.parse(jsonData as any);
      res.status(200).json({ message: "OK", comments });
    } catch (e) {
      res.status(500).json({ message: "Error" });
    }
  }
}
