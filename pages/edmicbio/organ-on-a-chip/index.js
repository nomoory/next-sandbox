import Layout from "components/layout";
import { inject, observer } from "mobx-react";
import OrganOnAChip from "./components/OrganOnAChip";
import CommonPageLayout from "components/CommonPageLayout";

const OrganOnAChipPage = ({ templateStore }) => {
  return (
    <Layout >
      <CommonPageLayout>
        <OrganOnAChip />
      </CommonPageLayout>
    </Layout>
  );
};

export default inject("templateStore")(observer(OrganOnAChipPage));

export async function getStaticProps() {
  return {
    props: {},
  };
}
