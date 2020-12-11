import { Layout } from "antd";
import styled from "styled-components";
import {
  mediaQueriesBiggerThan,
  header_height_mobile,
  header_height_desktop,
} from "styles";
import Header from "components/Header";
import Head from "components/Head";
import Footer from "components/Footer";

const { Content } = Layout;
const ContentContainer = styled.div`
  padding-top: ${header_height_mobile}px;

  ${mediaQueriesBiggerThan("sm")} {
    padding-top: ${header_height_desktop}px;
  }
`;

export default function NextLayout({ children, home }) {
  return (
    <Layout style={{ display: "flex", minHeight: "100%" }}>
      <Head />
      <Header />
      <Content style={{ flex: 1 }}>
        <ContentContainer>{children}</ContentContainer>
      </Content>
      <Footer />
    </Layout>
  );
}

