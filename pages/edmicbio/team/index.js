import Layout from "components/layout";
import { inject, observer } from "mobx-react";
import Team from "./components/Team";
import CommonPageLayout from "components/CommonPageLayout";

const TeamPage = ({ templateStore }) => {
  return (
    <Layout home>
      <CommonPageLayout>
        <Team />
      </CommonPageLayout>
    </Layout>
  );
};

export default inject("templateStore")(observer(TeamPage));

export async function getStaticProps() {
  return {
    props: {},
  };
}
