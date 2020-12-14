import Layout from "components/layout";
import { inject, observer } from "mobx-react";
import Announcement from "./components/Announcement";
import CommonPageLayout from "components/CommonPageLayout";

const AnnouncementPage = ({ templateStore }) => {
  return (
    <Layout home>
      <CommonPageLayout>
        <Announcement />
      </CommonPageLayout>
    </Layout>
  );
};

export default inject("templateStore")(observer(AnnouncementPage));

export async function getStaticProps() {
  return {
    props: {},
  };
}
