import { useRouter } from "next/router";

import useArticlesStore from "../states/articles";

export const HomePage = () => {
  const articles = useArticlesStore.getState().getAllArticles();

  // routing
  const router = useRouter();

  if (articles.length < 1) {
    return <p>Aucun article disponible</p>;
  }

  return (
    <div className="h-full">
      <h1 className="font-bold text-xl text-center ">Articles</h1>

      <div className="flex justify-center items-center  ">
        {articles.map((article, index) => {
          return (
            <div
              onClick={() => router.push(`${article.title}`)}
              key={index}
              className=" rounded-xl shadow shadow-gray-400 w-full mx-12 my-10 p-5 cursor-pointer "
            >
              <h1 className="text-xl font-bold ">{article.title}</h1>
              <p className="mx-5">{article.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
