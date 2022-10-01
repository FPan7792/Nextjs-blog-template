// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { articles } from "../../database/articles.json";

export default function fetchArticles(
  req: NextApiRequest,
  res: NextApiResponse<Datas_Article[]>
) {
  const allArticles = articles;
  res.status(200).json(allArticles);
}
