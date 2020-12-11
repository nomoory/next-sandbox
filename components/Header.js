import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import {
  side_padding_mobile,
  side_padding_desktop,
  mediaQueriesBiggerThan,
  header_height_mobile,
  header_height_desktop,
} from "styles";
import { useState } from "react";
import MobileDrawer from "components/MobileDrawer";
import HambergerIcon from "components/icons/HambergerIcon";

const HeaderContainer = styled.header`
  position: fixed;
  z-index: 12; // higher than ant design Anchor and footer
  width: 100%;
  padding: 0 ${side_padding_mobile}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  height: ${header_height_mobile}px;

  ${mediaQueriesBiggerThan("sm")} {
    padding: 0 ${side_padding_desktop}px;
    height: ${header_height_desktop}px;
  }
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
const Header = () => {
  const router = useRouter();
  const [mobileDrawalVisible, setMobileDrawalVisible] = useState(false);
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
      </HeaderContainer>
      <MobileDrawer
        visible={mobileDrawalVisible}
        closeDrawer={() => {
          setMobileDrawalVisible(false);
        }}
      />
    </>
  );
};

export default Header;
