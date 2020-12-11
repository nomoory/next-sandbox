import Layout from "components/layout";
import { inject, observer } from "mobx-react";
// import Vision from "./components/Vision";
import CommonPageLayout from "components/CommonPageLayout";

const ThreeDimensionalBioPrinting = ({ templateStore }) => {
  return (
    <Layout>
      <CommonPageLayout>
        3d
      </CommonPageLayout>
    </Layout>
  );
};

export default inject("templateStore")(observer(ThreeDimensionalBioPrinting));

export async function getStaticProps() {
  return {
    props: {},
  };
}
