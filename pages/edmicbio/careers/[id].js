import Layout from "components/layout";
import { useRouter } from "next/router";
import CareerDetail from "./components/CareerDetail";
import CommonPageLayout from "components/CommonPageLayout";
import { TARGET_COLLECTION } from "stores/CareerStore";
import db from "db";

const CareerPage = () => {
  const router = useRouter();
  const id = router.query.id;
  return (
    <Layout>
      <CommonPageLayout>
        <CareerDetail id={id} />
      </CommonPageLayout>
    </Layout>
  );
};

export default CareerPage;

export async function getStaticProps() {
  return {
    props: {}
  };
}

export async function getStaticPaths() {
  const paths = await db
    .collection(TARGET_COLLECTION)
    .get()
    .then(querySnapshot => {
      const ids = [];
      querySnapshot.forEach(doc => {
        ids.push(doc.id);
      });

      return ids.map(id => {
        return {
          params: {
            id: id.replace(/\.md$/, "")
          }
        };
      });
    })
    .catch(error => {
      console.log("Error getting documents: ", error);
      return null;
    });
  return {
    paths,
    fallback: false
  };
}
