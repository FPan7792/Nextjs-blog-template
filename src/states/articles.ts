// @ts-nocheck

// ZUSTAND STORE MANAGEMENT
import create from "zustand";
import datas_articles from "../database/articles.json";

interface Articles_State {
  allArticles: Datas_Article[];
  getAllArticles: () => Datas_Article[];
}

const useArticlesStore = create<Articles_State>((set, get) => ({
  allArticles: datas_articles.articles,
  getAllArticles: (): Datas_Article[] => {
    const allArticles = get().allArticles;

    return allArticles;
  },
}));

export default useArticlesStore;
