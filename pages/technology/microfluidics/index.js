import Layout from "components/layout";
import { inject, observer } from "mobx-react";
import Microfluidics from "./components/Microfluidics";
import CommonPageLayout from "components/CommonPageLayout";

const MicrofluidicsPage = ({ templateStore }) => {
  return (
    <Layout >
      <CommonPageLayout>
        <Microfluidics />
      </CommonPageLayout>
    </Layout>
  );
};

export default inject("templateStore")(observer(MicrofluidicsPage));

export async function getStaticProps() {
  return {
    props: {},
  };
}
