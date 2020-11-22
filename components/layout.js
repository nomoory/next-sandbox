import Head from "next/head";
import styles from "./layout.module.css";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

export const siteTitle = "EDmicBio";

export default function NextLayout({ children, home }) {
  return (
    <Layout style={{ display: "flex", minHeight: "100%" }}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header className={styles.header}>{home ? <></> : <></>}</Header>
      <Layout>
        <Content style={{ flex: 1 }}>{children}</Content>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
  );
}
