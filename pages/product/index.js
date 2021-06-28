import Layout from "components/layout";
import { Col, Row } from "antd";
import { inject, observer } from "mobx-react";
import styled from "styled-components";
import Product from "./components/Product";
import ProductNavigation from "./components/ProductNavigation";

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
        <Row style={{ width: "100%" }}>
          <Col xs={null} sm={{ span: 4 }}>
            <ProductNavigation />
          </Col>
          <Col
            xs={{ span: 24, offset: 0 }}
            sm={{ span: 18, offset: 2 }}
            xl={{ span: 14, offset: 4 }}
          >
            <Product />
          </Col>
        </Row>
      </PageContainer>
    </Layout>
  );
};

export default inject("templateStore")(observer(ProductPage));
