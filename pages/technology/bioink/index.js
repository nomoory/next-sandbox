import Layout from "components/layout";
import { inject, observer } from "mobx-react";
import Bioink from "./components/Bioink";
import CommonPageLayout from "components/CommonPageLayout";

const BioinkPage = ({ templateStore }) => {
  return (
    <Layout >
      <CommonPageLayout>
        <Bioink />
      </CommonPageLayout>
    </Layout>
  );
};

export default inject("templateStore")(observer(BioinkPage));

export async function getStaticProps() {
  return {
    props: {},
  };
}
