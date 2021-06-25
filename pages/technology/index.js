import { inject, observer } from "mobx-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getSubCategoryIdsByCategoryid } from "components/Navigation";
import { i18n } from "../../i18n";

const MAIN_CATEGORY_ID = "technology";

const Technology = ({ templateStore }) => {
  const router = useRouter();

  useEffect(() => {
    const subCategoryIds = getSubCategoryIdsByCategoryid(`${MAIN_CATEGORY_ID}`);
    // for (let subCategoryId of subCategoryIds) {
    //   router.prefetch(`${MAIN_CATEGORY_ID}/${subCategoryId}`);
    // }
    router.replace(`/${MAIN_CATEGORY_ID}/${subCategoryIds[0]}`);
  }, []);

  return <></>;
};

export default inject("templateStore")(observer(Technology));


