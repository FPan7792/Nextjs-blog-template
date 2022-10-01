import Head from "next/head";

type Props = {
  title?: string;
  content?: string;
};

export const HeadComponent = ({ title, content }: Props) => {
  const defaultTitle = "Blog";
  const defaultdescription = "Bienvenue sur mon blog !";

  return (
    <Head>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={content || defaultdescription} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadComponent;
