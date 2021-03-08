import Layout from "components/layout";
import { inject, observer } from "mobx-react";
import Vision from "./components/Vision";
import CommonPageLayout from "components/CommonPageLayout";

const VisionPage = ({ templateStore }) => {
  return (
    <Layout>
      <CommonPageLayout>
        <Vision />
      </CommonPageLayout>
    </Layout>
  );
};

export default inject("templateStore")(observer(VisionPage));
