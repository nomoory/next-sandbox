import Layout from "components/layout";
import { inject, observer } from "mobx-react";
import styled from "styled-components";
import ContactUs from "./components/ContactUs";

const PageContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;

  min-height: 200px;
`;

const ContactUsPage = ({ templateStore }) => {
  return (
    <Layout contactUs>
      <PageContainer>
        <ContactUs />
      </PageContainer>
    </Layout>
  );
};

export default inject("templateStore")(observer(ContactUsPage));
