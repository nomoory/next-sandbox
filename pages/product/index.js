import Layout from "components/layout";
import { inject, observer } from "mobx-react";
import styled from "styled-components";
import Product from "./components/Product";

const PageContainer = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;

  min-height: 200px;
`;

const ProductPage = ({ templateStore }) => {
  return (
    <Layout product>
      <PageContainer>
        <Product />
      </PageContainer>
    </Layout>
  );
};

export default inject("templateStore")(observer(ProductPage));


