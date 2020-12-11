import styled from "styled-components";
import Layout from "components/layout";
import { inject, observer } from "mobx-react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const SUBJECTS = [
  "vision",
  "organ-on-a-chip",
  "medical-device",
  "team",
  "history",
  "news",
  "announcement",
  "careers",
];

const EDmicBio = ({ templateStore }) => {
  const router = useRouter();

  useEffect(() => {
    for (let subject of SUBJECTS) {
      router.prefetch(`edmicbio/${subject}`);
    }
    router.push(`/edmicbio/${SUBJECTS[0]}`);
  }, []);

  return (
    <Layout EDmicBio>
      <PageContainer></PageContainer>
    </Layout>
  );
};

const PageContainer = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default inject("templateStore")(observer(EDmicBio));

export async function getStaticProps() {
  return {
    props: {},
  };
}
