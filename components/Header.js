import Link from "next/link";
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
import { useState } from "react";
import MobileDrawer from "components/MobileDrawer";
import MobileDrawerFromTop from "components/MobileDrawerFromTop";
import HambergerIcon from "components/icons/HambergerIcon";
import Caption2 from "./typography/Caption2";
import Caption1 from "./typography/Caption1";
import ArrowRightGrayIcon from "components/icons/ArrowRightGrayIcon";
import ArrowBottomIcon from "components/icons/ArrowBottomIcon";
import { RED40 } from "@/styles/colors";

const HeaderContainer = styled.header`
  position: fixed;
  z-index: 12; // higher than ant design Anchor and footer
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

const Header = ({ home }) => {
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

  return (
    <>
      <HeaderContainer>
        <Upper>
          <Link href="/">
            <Logo />
          </Link>
          <DesktopNavigationContainer>
            {navigationItems.map((item) => (
              <NavigationItem
                key={item.id}
                href={item.link}
                active={router.pathname.includes(item.link)}
              >
                {item.title}
              </NavigationItem>
            ))}
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
              {router.pathname.split("/").map((key, index) => {
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
                        .join(" ")
                      }
                    </Caption2>
                  </Fragment>
                );
              })}
            </Breadcrumb>
            <DropDownButton
              onClick={() => {
                setMobileTopDrawalVisible(!mobileTopDrawalVisible);
              }}
            >
              <Caption1 bold style={{ color: RED40 }}>
                {router.pathname
                  .split("/")[2]
                  .split("")
                  .map((char, j) => (j === 0 ? char.toLocaleUpperCase() : char))
                  .join("")
                  .split("-")
                  .join(" ")
                }
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

export default Header;
