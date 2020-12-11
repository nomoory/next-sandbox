import Layout from "components/layout";
import { inject, observer } from "mobx-react";
import styled from "styled-components";

const PageContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;

  min-height: 200px;
`;

const ContactUs = ({ templateStore }) => {
  return (
    <Layout contactUs>
      <PageContainer>Contact Us</PageContainer>
    </Layout>
  );
};

export default inject("templateStore")(observer(ContactUs));

export async function getStaticProps() {
  return {
    props: {},
  };
}
