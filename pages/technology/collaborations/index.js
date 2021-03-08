import Layout from "components/layout";
import { inject, observer } from "mobx-react";
import Collaborations from "./components/Collaborations";
import CommonPageLayout from "components/CommonPageLayout";

const CollaborationsPage = ({ templateStore }) => {
  return (
    <Layout >
      <CommonPageLayout>
        <Collaborations />
      </CommonPageLayout>
    </Layout>
  );
};

export default inject("templateStore")(observer(CollaborationsPage));


