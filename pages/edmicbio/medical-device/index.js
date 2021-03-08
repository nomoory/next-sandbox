import Layout from "components/layout";
import { inject, observer } from "mobx-react";
import MedicalDevice from "./components/MedicalDevice";
import CommonPageLayout from "components/CommonPageLayout";

const MedicalDevicePage = ({ templateStore }) => {
  return (
    <Layout >
      <CommonPageLayout>
        <MedicalDevice />
      </CommonPageLayout>
    </Layout>
  );
};

export default inject("templateStore")(observer(MedicalDevicePage));


