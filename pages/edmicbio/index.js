import Layout from "components/layout";
import utilStyles from "styles/utils.module.css";
import { inject, observer } from "mobx-react";

const Home = ({ templateStore }) => {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        
        <div>isLoading: {templateStore.isLoading ? "yes" : "no"}</div>
        <div>{templateStore.dataArray.map((data) => data.toString())}</div>
        <div>{templateStore.data?.time}</div>
        <button
          onClick={(e) => {
            templateStore.loadArray();
            templateStore.setData({ time: Date.now() });
            console.log({ templateStore: templateStore.dataArray });
          }}
        >
          test
        </button>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
        </ul>
      </section>
    </Layout>
  );
};

export default inject("templateStore")(observer(Home));

export async function getStaticProps() {
  return {
    props: {
    },
  };
}
