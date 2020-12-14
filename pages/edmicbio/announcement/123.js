import Layout from "components/layout";
import { inject, observer } from "mobx-react";
import AnnouncementDetail from "./components/AnnouncementDetail";
import CommonPageLayout from "components/CommonPageLayout";

const AnnouncementDetailPage = ({ templateStore }) => {
  return (
    <Layout home>
      <CommonPageLayout>
        <AnnouncementDetail />
      </CommonPageLayout>
    </Layout>
  );
};

export default inject("templateStore")(observer(AnnouncementDetailPage));

export async function getStaticProps() {
  return {
    props: {},
  };
}
