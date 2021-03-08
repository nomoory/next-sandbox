import Body from "components/typography/Body";
import { inject, observer } from "mobx-react";
import { Drawer } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import { header_height_mobile } from "styles";
import Caption1, { caption1Bold } from "./typography/Caption1";
import { GRAY80, GRAY10, GRAY50 } from "styles/colors";
import ArrowRightIcon from "components/icons/ArrowRightIcon";
import { i18n } from "../i18n";

const DrawerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 12px;
  height: ${header_height_mobile}px;
  box-shadow: 0px 1px 0px #f4f4f4;
`;
const CloseDrawerButton = styled.button``;
const LanguageToggleButton = styled.div`
  display: flex;
  flex-direction: row;
  background: ${GRAY80};
  border-radius: 20px;
  padding: 5px 13px 6px 13px;
  margin-left: 27px;
`;
const Language = styled.div`
  ${caption1Bold}
  ${({ active }) => `color: ${active ? GRAY10 : GRAY50}`}
`;
const LanguageDivider = styled.div`
  margin: 0 5px;
  background-color: ${GRAY10};
  width: 1px;
`;

const BUTTONS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "EDmicBio",
    href: "/edmicbio",
  },
  {
    name: "Technology",
    href: "/technology",
  },
  {
    name: "Product",
    href: "/product",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
];

const MobileDrawer = ({ visible, closeDrawer, languageStore }) => {
  const router = useRouter();
  const pathname = router.pathname;
  const mainPath = pathname.split("/")[1];
  return (
    <Drawer
      placement="right"
      closable={false}
      onClose={closeDrawer}
      visible={visible}
      bodyStyle={{ padding: 0 }}
    >
      <DrawerContainer>
        <BoxContainer style={{justifyContent: "space-between"}}>
          <LanguageToggleButton
            onClick={() => {
              const nextLang = i18n.language === "en" ? "ko" : "en";
              i18n.changeLanguage(nextLang);
              languageStore.setLanguage(nextLang);
            }}
          >
            <Language active={i18n.language === "ko"}>KO</Language>
            <LanguageDivider />
            <Language active={i18n.language === "en"}>EN</Language>
          </LanguageToggleButton>
          <CloseDrawerButton onClick={closeDrawer}>
            <ArrowRightIcon width={32} height={32} />
          </CloseDrawerButton>
        </BoxContainer>
        {BUTTONS.map(({ name, href }) => (
          <Link key={href} href={`${href}`} locale={i18n.language}>
            <BoxContainer>
              <Body bold={`/${mainPath}` === href}>{name}</Body>
            </BoxContainer>
          </Link>
        ))}
      </DrawerContainer>
    </Drawer>
  );
};
export default inject("languageStore")(observer(MobileDrawer));
