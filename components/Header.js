import Link from "next/link";
import { inject, observer } from "mobx-react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Fragment } from "react";
import {
  original_side_padding_mobile,
  original_side_padding_desktop,
  mediaQueriesBiggerThan,
  header_height_mobile,
  header_height_desktop,
} from "styles";
import { useState, useEffect } from "react";
import MobileDrawer from "components/MobileDrawer";
import MobileDrawerFromTop from "components/MobileDrawerFromTop";
import HambergerIcon from "components/icons/HambergerIcon";
import Caption2 from "./typography/Caption2";
import Caption1, { caption1Bold } from "./typography/Caption1";
import ArrowRightGrayIcon from "components/icons/ArrowRightGrayIcon";
import ArrowBottomIcon from "components/icons/ArrowBottomIcon";
import { GRAY10, GRAY50, GRAY80, RED40 } from "@/styles/colors";
import { i18n } from "../i18n";

const HeaderContainer = styled.header`
  position: fixed;
  z-index: 13; // higher than ant design Anchor and footer
  width: 100%;
  background-color: white;
`;

const Logo = styled.img.attrs(() => ({
  src: "/images/common/logo.png",
}))`
  width: 124px;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${mediaQueriesBiggerThan("sm")} {
    width: 163px;
  }
`;

const DesktopNavigationContainer = styled.nav`
  flex-direction: row;
  align-items: center;
  display: none;
  ${mediaQueriesBiggerThan("sm")} {
    display: flex;
    overflow: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

const NavigationItem = styled.a`
  margin-left: 60px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0em;
  ${(props) => (props.active ? "color: #C63F34" : "")}
`;

const MobileDrawerIconContainer = styled.div`
  ${mediaQueriesBiggerThan("sm")} {
    display: none;
  }
`;

const DrawerButton = styled.button`
  width: 32px;
  height: 32px;
  ${mediaQueriesBiggerThan("sm")} {
  }
`;
const Upper = styled.div`
  padding-left: ${original_side_padding_mobile}px;
  padding-right: ${original_side_padding_mobile}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${header_height_mobile}px;
  box-shadow: 0px 1px 0px #f4f4f4;
  ${mediaQueriesBiggerThan("sm")} {
    padding-left: ${original_side_padding_desktop}px;
    padding-right: ${original_side_padding_desktop}px;
    height: ${header_height_desktop}px;
  }
`;

const Bottom = styled.div`
  padding-left: ${original_side_padding_mobile}px;
  padding-right: ${original_side_padding_mobile}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${header_height_mobile}px;
  box-shadow: 0px 1px 0px #f4f4f4;
  ${mediaQueriesBiggerThan("sm")} {
    display: none;
  }
`;
const Breadcrumb = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const DropDownButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
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
  color: ${(props) => `${props.active ? GRAY10 : GRAY50}`};
`;
const LanguageDivider = styled.div`
  margin: 0 5px;
  background-color: ${GRAY10};
  width: 1px;
`;

const Header = ({ home, languageStore }) => {
  const router = useRouter();
  const [mobileDrawalVisible, setMobileDrawalVisible] = useState(false);
  const [mobileTopDrawalVisible, setMobileTopDrawalVisible] = useState(false);
  const navigationItems = [
    {
      id: "edmicbio",
      title: "EDmicBio",
      link: "/edmicbio",
    },
    {
      id: "technology",
      title: "Technology",
      link: "/technology",
    },
    {
      id: "product",
      title: "Product",
      link: "/product",
    },
    {
      id: "contact-us",
      title: "Contact us",
      link: "/contact-us",
    },
  ];
  const pathname = router.pathname || "";
  const [nullString, mainCategory, subCategory] = pathname.split("/");

  return (
    <>
      <HeaderContainer>
        <Upper>
          <Link href={`${i18n.language}/`} locale={i18n.language}>
            <Logo />
          </Link>
          <DesktopNavigationContainer>
            {navigationItems.map((item) => (
              <NavigationItem
                key={item.id}
                href={`/${i18n.language}${item.link}`}
                active={pathname.includes(item.link)}
              >
                {item.title}
              </NavigationItem>
            ))}
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
          </DesktopNavigationContainer>
          <MobileDrawerIconContainer>
            <DrawerButton
              onClick={() => {
                setMobileDrawalVisible(true);
              }}
            >
              <HambergerIcon />
            </DrawerButton>
          </MobileDrawerIconContainer>
        </Upper>

        {!home && (
          <Bottom>
            <Breadcrumb>
              {pathname.split("/").map((key, index) => {
                if (key == "[id]") return null;
                if (!key) return null;
                if (index === 0) return null;
                return (
                  <Fragment key={key}>
                    {index !== 1 && <ArrowRightGrayIcon key={`icon_${key}`} />}
                    <Caption2 key={`text_${key}`}>
                      {key
                        .split("")
                        .map((char, j) =>
                          j === 0 ? char.toLocaleUpperCase() : char
                        )
                        .join("")
                        .split("-")
                        .join(" ")}
                    </Caption2>
                  </Fragment>
                );
              })}
            </Breadcrumb>
            {pathname.includes("contact-us") ? null : (
              <DropDownButton
                onClick={() => {
                  setMobileTopDrawalVisible(!mobileTopDrawalVisible);
                }}
              >
                <Caption1 bold style={{ color: RED40 }}>
                  {subCategory &&
                    subCategory
                      .split("")
                      .map((char, j) =>
                        j === 0 ? char.toLocaleUpperCase() : char
                      )
                      .join("")
                      .split("-")
                      .join(" ")}
                </Caption1>
                <ArrowBottomIcon
                  style={{
                    transform: `rotate(${
                      mobileTopDrawalVisible ? "180deg" : "0deg"
                    })`,
                    transition: "all 0.5s",
                  }}
                />
              </DropDownButton>
            )}
          </Bottom>
        )}
      </HeaderContainer>
      <MobileDrawer
        visible={mobileDrawalVisible}
        closeDrawer={() => {
          setMobileDrawalVisible(false);
        }}
      />
      <MobileDrawerFromTop
        visible={mobileTopDrawalVisible}
        closeDrawer={() => {
          setMobileTopDrawalVisible(false);
        }}
      />
    </>
  );
};

export default inject("languageStore")(observer(Header));
