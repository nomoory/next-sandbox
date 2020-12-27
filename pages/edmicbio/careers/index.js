import Layout from "components/layout";
import { inject, observer } from "mobx-react";
import Career from "./components/Career";
import CommonPageLayout from "components/CommonPageLayout";

const CareerPage = ({ templateStore }) => {
  return (
    <Layout>
      <CommonPageLayout>
        <Career />
      </CommonPageLayout>
    </Layout>
  );
};

export default inject("templateStore")(observer(CareerPage));

export async function getStaticProps() {
  return {
    props: {}
  };
}
