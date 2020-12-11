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

const HeaderContainer = styled.header`
  position: fixed;
  z-index: 1;
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

const Logo = styled.div`
  width: 124px;
  height: 28px;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("/images/landing/logo-m.png");

  ${mediaQueriesBiggerThan("sm")} {
    width: 163px;
    height: 32px;
    background-image: url("/images/landing/logo.png");
  }
`;

const NavigationContainer = styled.nav`
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
export default () => {
  const router = useRouter();
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
    <HeaderContainer>
      <Link href="/">
        <Logo />
      </Link>
      <NavigationContainer>
        {navigationItems.map((item) => (
          <NavigationItem
            key={item.id}
            href={item.link}
            active={router.pathname.includes(item.link)}
          >
            {item.title}
          </NavigationItem>
        ))}
      </NavigationContainer>
    </HeaderContainer>
  );
};
