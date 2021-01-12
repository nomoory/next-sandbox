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
import { withTranslation } from "../i18n";

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
    margin-top: 41px;
  }
`;
const Links = styled.div``;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${GRAY60};
  margin-top: 24px;
`;

export const getSubCategoryIdsByCategoryid = (categoryId) => {
  switch (categoryId) {
    case "edmicbio":
      return [
        "vision",
        "organ-on-a-chip",
        "medical-device",
        "team",
        "history",
        "news",
        "announcement",
        "careers",
      ];
    case "technology":
      return [
        "3d-bioprinting",
        "bioink",
        "microfluidics",
        "collaborations",
        "publications-and-patents",
      ];
    default:
      return [];
      break;
  }
};
const Navigation = ({ t }) => {
  const router = useRouter();
  const { pathname } = router;
  const pathes = pathname.split("/");
  const mainCategoryId = pathes[1];
  const selectedSubCategoryId = pathes[2];
  const subCategoryIds = getSubCategoryIdsByCategoryid(mainCategoryId);

  return (
    <NavigationContainer>
      <Anchor offsetTop={header_height_desktop}>
        <NavigationContentContainer>
          <Title2 bold>{t(mainCategoryId)}</Title2>
          <Divider />
          <Links>
            {subCategoryIds.map((id) => {
              return (
                <LinkContainer key={id}>
                  <Link href={`/${mainCategoryId}/${id}`}>
                    <Caption1
                      bold={selectedSubCategoryId === id}
                      style={{
                        color: selectedSubCategoryId === id ? RED40 : GRAY40,
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

export default withTranslation("common")(Navigation);
