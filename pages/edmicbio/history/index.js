import Layout from "components/layout";
import { inject, observer } from "mobx-react";
import History from "./components/History";
import CommonPageLayout from "components/CommonPageLayout";

const HistoryPage = ({ templateStore }) => {
  return (
    <Layout>
      <CommonPageLayout>
        <History />
      </CommonPageLayout>
    </Layout>
  );
};

export default inject("templateStore")(observer(HistoryPage));

export async function getStaticProps() {
  return {
    props: {},
  };
}
