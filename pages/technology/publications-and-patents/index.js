import Layout from "components/layout";
import { inject, observer } from "mobx-react";
import PublicationsAndPatents from "./components/PublicationsAndPatents";
import CommonPageLayout from "components/CommonPageLayout";

const PublicationsAndPatentsPage = ({ templateStore }) => {
  return (
    <Layout>
      <CommonPageLayout>
        <PublicationsAndPatents />
      </CommonPageLayout>
    </Layout>
  );
};

export default inject("templateStore")(observer(PublicationsAndPatentsPage));

export async function getStaticProps() {
  return {
    props: {}
  };
}
