import Layout from "components/layout";
import { useRouter } from "next/router";
import AnnouncementDetail from "./components/AnnouncementDetail";
import CommonPageLayout from "components/CommonPageLayout";
import AnnouncementStore, { TARGET_COLLECTION } from "stores/AnnouncementStore";
import db from "db";

const AnnouncementDetailPage = () => {
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

export default AnnouncementDetailPage;

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
  console.log({ paths });
  return {
    paths,
    fallback: false
  };
}
