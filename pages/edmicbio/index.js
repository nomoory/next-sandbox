import styled from "styled-components";
import Layout from "components/layout";
import { inject, observer } from "mobx-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getSubCategoryIdsByCategoryid } from "components/Navigation";

const EDmicBio = ({ templateStore }) => {
  const router = useRouter();

  useEffect(() => {
    const subCategoryIds = getSubCategoryIdsByCategoryid("edmicbio");
    // for (let subCategoryId of subCategoryIds) {
    //   router.prefetch(`edmicbio/${subCategoryId}`);
    // }
    router.replace(`/edmicbio/${subCategoryIds[0]}`);
  }, []);

  return <></>;
};

export default inject("templateStore")(observer(EDmicBio));
