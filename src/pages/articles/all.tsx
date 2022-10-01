import type { GetServerSideProps, NextPage } from "next";
import styles from "../../styles/Home.module.css";

// components
import HeadComponent from "../../components/HeadComponent";
import useArticlesStore from "../../states/articles";
import HomeArticlesPage from "../../components/HomeArticlesPage";
import Layout from "../../components/Layout";

// Home
const Home: NextPage = (props) => {
  return (
    <div className={styles.container}>
      <Layout>
        <HeadComponent title="Blog" content="Tous les articles de mon blog" />
        <HomeArticlesPage />
      </Layout>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const articles = useArticlesStore.getState().getAllArticles();

  return { props: { articles } };
};

export default Home;
