import Layout from "components/layout";
import { useRouter } from "next/router";
import AnnouncementDetail from "./components/AnnouncementDetail";
import CommonPageLayout from "components/CommonPageLayout";
import { TARGET_COLLECTION } from "stores/NewsStore";
import db from "db";

const NewsDetailPage = () => {
  const router = useRouter();
  const id = router.query.id;
  return (
    <Layout>
      <CommonPageLayout>
        <AnnouncementDetail id={id} />
      </CommonPageLayout>
    </Layout>
  );
};

export default NewsDetailPage;

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
