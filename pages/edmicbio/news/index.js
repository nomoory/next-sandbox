import Layout from "components/layout";
import { inject, observer } from "mobx-react";
import News from "./components/News";
import CommonPageLayout from "components/CommonPageLayout";

const NewsPage = ({ templateStore }) => {
  return (
    <Layout>
      <CommonPageLayout>
        <News />
      </CommonPageLayout>
    </Layout>
  );
};

export default inject("templateStore")(observer(NewsPage));


