import Link from "next/link";
import { Layout } from "antd";
import { useRouter } from "next/router";
import styled from "styled-components";
import { margin_mobile, margin_desktop, mediaQueries } from "styles";
import Head from "components/Head";
import Footer from "components/Footer";

const { Content } = Layout;

export default function NextLayout({ children, home }) {
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
    <>
      <Layout style={{ display: "flex", minHeight: "100%" }}>
        <Head />
        <Header>
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
        </Header>
        <Content style={{ flex: 1 }}>
          <ContentContainer>{children}</ContentContainer>
        </Content>
        <Footer />
      </Layout>
    </>
  );
}

const HEADER_HEIGHT_MOBILE = 56;
const HEADER_HEIGHT = 70;

const Header = styled.header`
  position: fixed;
  z-index: 1;
  width: 100%;
  padding: 0 ${margin_mobile}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  height: ${HEADER_HEIGHT_MOBILE}px;

  ${mediaQueries("sm")} {
    padding: 0 ${margin_desktop}px;
    height: ${HEADER_HEIGHT}px;
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

  ${mediaQueries("sm")} {
    width: 163px;
    height: 32px;
    background-image: url("/images/landing/logo.png");
  }
`;

const NavigationContainer = styled.nav`
  flex-direction: row;
  align-items: center;
  display: none;
  ${mediaQueries("sm")} {
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

const ContentContainer = styled.div`
  padding-top: ${HEADER_HEIGHT_MOBILE}px;

  ${mediaQueries("sm")} {
    padding-top: ${HEADER_HEIGHT}px;
  }
`;
