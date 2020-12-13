import { Col, Layout, Row } from "antd";
import Link from "next/link";
import styled from "styled-components";
import {
  side_padding_desktop,
  side_padding_mobile,
  mediaQueriesBiggerThan,
  gutter,
} from "styles";
import FacebookIcon from "components/icons/FacebookIcon";
import YoutubeIcon from "components/icons/YoutubeIcon";
import InstagramIcon from "components/icons/InstagramIcon";
import Caption2, { caption2Bold } from "components/typography/Caption2";
import { bodyBold } from "components/typography/Body";

const snsLinks = [
  {
    IconComponent: FacebookIcon,
    link: "facebook",
  },
  {
    IconComponent: YoutubeIcon,
    link: "youtube",
  },
  {
    IconComponent: InstagramIcon,
    link: "insta",
  },
];

const { Footer } = Layout;
const CustomFooter = () => (
  <Footer
    style={{
      backgroundColor: "white",
      boxShadow: "0px -1px 0px rgba(118, 118, 118, 0.25)",
      padding: "24px 0px 32px 0",
      zIndex: 11, // higher than ant design Anchor
    }}
  >
    <FooterContainer>
      <Row
        style={{ width: "100%", marginLeft: 0, marginRight: 0 }}
        gutter={gutter}
      >
        <Col span={24} md={{ span: 12 }}>
          <Link href="/">
            <Logo />
          </Link>
          <Copyright>
            Investigate your drug with 3D biomimicry 3D organ-on-a-chip
          </Copyright>
          <RightsReserved>
            <Caption2>
              © 2020 EDMICBIO. © Copyright 2019~ | All Rights Reserved |
              <span style={{wordBreak: "keep-all"}}>Powered by EDmicBio Inc.</span>
            </Caption2>
          </RightsReserved>
          <FollowUsContainer>
            <FollowUsTitle>Follow us</FollowUsTitle>
            <FollowUsIcons>
              {snsLinks.map(({ IconComponent, link }) => (
                <FollowUsIcon key={link} href={link}>
                  {<IconComponent />}
                </FollowUsIcon>
              ))}
            </FollowUsIcons>
          </FollowUsContainer>
        </Col>
        <Col span={24} md={{ span: 12 }}>
          <Contacts>
            <Contact>
              <ContactTitle>Tel</ContactTitle>
              <ContactContent>02-1234-5678</ContactContent>
            </Contact>
            <Contact>
              <ContactTitle>Email</ContactTitle>
              <ContactContent>edmicbio@edmicbio.com</ContactContent>
            </Contact>
            <Contact>
              <ContactTitle>Location</ContactTitle>
              <ContactContent>
                Office: 305, Community building, 117-3, Hoegi-ro, Dongdaemun-gu,
                Seoul, Republic of Korea R&D center: 26, Kyungheedae-ro,
                Dongdaemun-gu, Seoul, Republic of Korea, 403 (KyungHee Business
                Incubator)
              </ContactContent>
            </Contact>
          </Contacts>
        </Col>
      </Row>
    </FooterContainer>
  </Footer>
);

const Contacts = styled.div``;
const Contact = styled.div``;
const ContactTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 154.9%;
`;
const ContactContent = styled.div`
  font-size: 12px;
  line-height: 15px;
  color: #454857;
  opacity: 0.7;
`;

const FooterContainer = styled.div`
  width: 100%;
  padding: 0 ${side_padding_mobile}px;
  background: #ffffff;
  display: flex;
  /* box-shadow: 0px -1px 0px rgba(118, 118, 118, 0.25); */
  /* border-radius: 2px; */

  ${mediaQueriesBiggerThan("sm")} {
    padding: 0 ${side_padding_desktop}px;
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
const Copyright = styled.div`
  margin-top: 24px;
  ${caption2Bold}

  ${mediaQueriesBiggerThan("sm")} {
    ${bodyBold}
  }
`;

const RightsReserved = styled.div`
  margin-top: 16px;
`;

const FollowUsContainer = styled.div`
  margin-top: 56px;
`;
const FollowUsTitle = styled.div`
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0em;
  color: #3b3b3b;
`;
const FollowUsIcons = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #c8493f;
  border-radius: 10px;
  margin-top: 7px;
  padding: 5px 9px 7px 9px;
  width: fit-content;
`;
const FollowUsIcon = styled.a`
  height: 32px;
  width: 32px;
  &:not(:first-child) {
    margin-left: 32px;
  }
`;

export default CustomFooter;