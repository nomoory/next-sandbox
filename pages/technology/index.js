import { inject, observer } from "mobx-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getSubCategoryIdsByCategoryid } from "components/Navigation";

const MAIN_CATEGORY_ID = "technology";

const Technology = ({ templateStore }) => {
  const router = useRouter();

  useEffect(() => {
    const subCategoryIds = getSubCategoryIdsByCategoryid(`${MAIN_CATEGORY_ID}`);
    for (let subCategoryId of subCategoryIds) {
      router.prefetch(`${MAIN_CATEGORY_ID}/${subCategoryId}`);
    }
    router.push(`/${MAIN_CATEGORY_ID}/${subCategoryIds[0]}`);
  }, []);

  return <></>;
};

export default inject("templateStore")(observer(Technology));

export async function getStaticProps() {
  return {
    props: {},
  };
}
