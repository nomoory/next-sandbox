import Layout from "components/layout";
import { inject, observer } from "mobx-react";
import Team from "./components/Team";
import CommonPageLayout from "components/CommonPageLayout";

const TeamPage = ({ templateStore }) => {
  return (
    <Layout >
      <CommonPageLayout>
        <Team />
      </CommonPageLayout>
    </Layout>
  );
};

export default inject("templateStore")(observer(TeamPage));


