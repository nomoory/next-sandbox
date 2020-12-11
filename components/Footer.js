import { Col, Layout, Row } from "antd";
import Link from "next/link";
import styled from "styled-components";
import {
  side_padding_desktop,
  side_padding_mobile,
  mediaQueriesBiggerThan,
} from "../styles";
import { GRAY90 } from "../styles/colors";
import FacebookIcon from "components/icons/FacebookIcon";
import YoutubeIcon from "components/icons/YoutubeIcon";
import InstagramIcon from "components/icons/InstagramIcon";

const snsLinks = [
  {
    IconComponent: FacebookIcon,
    url: "",
  },
  {
    IconComponent: YoutubeIcon,
    url: "",
  },
  {
    IconComponent: InstagramIcon,
    url: "",
  },
];

const { Footer } = Layout;

export default () => (
  <Footer style={{ padding: 0, backgroundColor: "white" }}>
    <FooterContainer>
      <Row>
        <Col span={24} md={{ span: 12 }}>
          <Link href="/">
            <Logo />
          </Link>
          <Copyright>
            Investigate your drug with 3D biomimicry 3D organ-on-a-chip
          </Copyright>
          <RightsReserved>
            © 2020 EDMICBIO. © Copyright 2019~ | All Rights Reserved |
            <br />
            Powered by EDmicBio Inc.
          </RightsReserved>
          <FollowUsContainer>
            <FollowUsTitle>Follow us</FollowUsTitle>
            <FollowUsIcons>
              {snsLinks.map(({ IconComponent, link }) => (
                <FollowUsIcon href={link}>{<IconComponent />}</FollowUsIcon>
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
  margin: 0 ${side_padding_mobile}px;
  background: #ffffff;
  box-shadow: 0px -1px 0px rgba(118, 118, 118, 0.25);
  border-radius: 2px;
  padding: 23px 0px 32px 0px;
  ${mediaQueriesBiggerThan("sm")} {
    margin: 0 ${side_padding_desktop}px;
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

const Copyright = styled.div`
  margin-top: 24px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0em;
  color: ${GRAY90};
`;

const RightsReserved = styled.div`
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0em;
  color: #80828f;
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
