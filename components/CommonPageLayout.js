import styled from "styled-components";
import { Col, Row } from "antd";
import Navigation from "components/Navigation";

const PageContainer = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CommonPageLayout = ({ children }) => (
  <PageContainer>
    <Row style={{ width: "100%" }}>
      <Col xs={null} sm={{ span: 4 }}>
        <Navigation />
      </Col>
      <Col
        xs={{ span: 24, offset: 0 }}
        sm={{ span: 18, offset: 2 }}
        xl={{ span: 14, offset: 4 }}
      >
        {children}
      </Col>
    </Row>
  </PageContainer>
);

export default CommonPageLayout;
