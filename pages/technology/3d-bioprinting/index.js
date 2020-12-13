import Layout from "components/layout";
import { inject, observer } from "mobx-react";
import ThreeDimensionalBioprinting from "./components/ThreeDimensionalBioprinting";
import CommonPageLayout from "components/CommonPageLayout";

const ThreeDimensionalBioprintingPage = ({ templateStore }) => {
  return (
    <Layout home>
      <CommonPageLayout>
        <ThreeDimensionalBioprinting />
      </CommonPageLayout>
    </Layout>
  );
};

export default inject("templateStore")(observer(ThreeDimensionalBioprintingPage));

export async function getStaticProps() {
  return {
    props: {},
  };
}
