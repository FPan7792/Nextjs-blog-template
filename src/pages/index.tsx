import styles from "../styles/Home.module.css";

// props managed by NEXTJS ✨
import type { GetServerSideProps } from "next";

// components
import HeadComponent from "../components/HeadComponent";
import useArticlesStore from "../states/articles";
import Layout from "../components/Layout";

// utils
import { getLastArticlesWithNumber } from "../utils/utils";

const Home = (props: { articles: Datas_Article[] }) => {
  // You can see in console articles fetched from local dtb
  console.log("Props", props.articles);

  // how many articles displayed
  const lastArticles = getLastArticlesWithNumber(3, props.articles);

  return (
    <div className={styles.container}>
      <Layout>
        <HeadComponent title="Blog" content="Bienvenue sur mon blog" />
        <h1 className="font-bold text-xl text-center ">Derniers articles</h1>
        {lastArticles.map((article, index) => {
          return (
            <div key={index} className="m-5 border-2 border-solid rounded">
              <h2 className="text-3xl">{article.title}</h2>
              <p className=" p-1 ">{article.content}</p>
            </div>
          );
        })}
      </Layout>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const articles = useArticlesStore.getState().getAllArticles();
  return { props: { articles } };
};

export default Home;
