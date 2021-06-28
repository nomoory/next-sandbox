import { inject, observer } from "mobx-react";
import Title2 from "components/typography/Title2";
import Caption1 from "components/typography/Caption1";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Anchor } from "antd";
import Link from "next/link";
import {
  header_height_desktop,
  mediaQueriesBiggerThan,
  side_padding_desktop,
} from "styles";
import { GRAY60, GRAY40, RED40 } from "styles/colors";
import { withTranslation, i18n } from "../../../i18n";

const NavigationContainer = styled.div`
  width: 100%;
  display: none;

  ${mediaQueriesBiggerThan("sm")} {
    display: flex;
  }
`;

const NavigationContentContainer = styled.div`
  padding-left: ${side_padding_desktop}px;
  padding-top: 48px;
`;

const LinkContainer = styled.div`
  cursor: pointer;
  &:first-child {
    margin-top: 24px;
  }
  &:not(:first-child) {
    margin-top: 38px;
  }
`;
const Links = styled.div``;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${GRAY60};
  margin-top: 24px;
`;
const Navigation = ({ t, productStore }) => {
  const router = useRouter();
  const productGroups = productStore.formattedDataArray || [];
  const { pathname } = router;
  const pathes = pathname.split("/");
  const mainCategoryId = pathes[1];
  const selectedSubCategoryId = pathname.split("#")[1]?.split(" ").join("_");
  const subCategoryIds = [];
  for (let group of productGroups) {
    if (group.productList.length !== 0) {
      subCategoryIds.push(group.title);
    }
  }

  return (
    <NavigationContainer>
      <Anchor offsetTop={header_height_desktop}>
        <NavigationContentContainer>
          <Title2 bold>{t(mainCategoryId)}</Title2>
          <Divider />
          <Links>
            {subCategoryIds.map((id) => {
              let key = id?.split(" ").join("_");
              return (
                <LinkContainer key={id}>
                  <Link
                    href={`/${mainCategoryId}#${key}`}
                    locale={i18n.language}
                  >
                    <Caption1
                      bold={selectedSubCategoryId === key}
                      style={{
                        color: selectedSubCategoryId === key ? RED40 : GRAY40,
                      }}
                    >
                      {t(id)}
                    </Caption1>
                  </Link>
                </LinkContainer>
              );
            })}
          </Links>
        </NavigationContentContainer>
      </Anchor>
    </NavigationContainer>
  );
};

export default withTranslation("common")(
  inject("productStore")(observer(Navigation))
);
