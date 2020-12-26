import styled from "styled-components";
import Layout from "components/layout";
import { getSortedPostsData } from "../lib/posts";
import { inject, observer } from "mobx-react";
import BrandVideo from "./components/BrandVideo";
import Slogan from "./components/Slogan";
import NewsAndAnnouncement from "./components/NewsAndAnnouncement";

const Home = ({ allPostsData, templateStore }) => {
  return (
    <Layout home>
      <PageContainer>
        <BrandVideo />
        <Slogan />
        <NewsAndAnnouncement />
      </PageContainer>
    </Layout>
  );
};

const PageContainer = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default inject("templateStore")(observer(Home));

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}
