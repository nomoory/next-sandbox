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
import Caption2, {
  caption2Bold,
  caption2Regular,
} from "components/typography/Caption2";
import { bodyBold } from "components/typography/Body";
import { GRAY40 } from "styles/colors";
import { withTranslation, i18n } from "../i18n";

const snsLinks = [
  {
    IconComponent: FacebookIcon,
    link:
      "https://www.facebook.com/%EC%97%90%EB%93%9C%EB%AF%B9%EB%B0%94%EC%9D%B4%EC%98%A4-EDmicBio-103930075043609/?view_public_for=103930075043609",
  },
  {
    IconComponent: YoutubeIcon,
    link: "https://www.youtube.com/channel/UC6ELpIsoquJSdH6x32i-kTg",
  },
  {
    IconComponent: InstagramIcon,
    link: "https://www.instagram.com/edmicbio/",
  },
];

const Contacts = styled.div``;
const Contact = styled.div`
  margin-bottom: 18px;

  ${mediaQueriesBiggerThan("sm")} {
    margin-bottom: 20px;
  }
`;
const ContactTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 154.9%;
  ${caption2Bold}
  ${mediaQueriesBiggerThan("sm")} {
    ${bodyBold}
  }
`;
const ContactContent = styled.div`
  font-size: 12px;
  line-height: 15px;
  color: #454857;
  opacity: 0.7;
  margin-top: 6px;
  ${mediaQueriesBiggerThan("sm")} {
    margin-top: 8px;
  }
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
  line-height: 15px;
  margin-top: 8px;
  margin-bottom: 30px;
  ${mediaQueriesBiggerThan("sm")} {
    margin-top: 16px;
  }
`;

const FollowUsContainer = styled.div`
  ${(props) => (props.desktop ? "display: none;" : "")}
  margin-top: 56px;
  ${mediaQueriesBiggerThan("sm")} {
    ${(props) => (props.mobile ? "display: none;" : "display: inherit")}
  }
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
  padding: 9px 19px;
  width: fit-content;
`;
const FollowUsIcon = styled.a`
  height: 32px;
  width: 32px;
  &:not(:first-child) {
    margin-left: 32px;
  }
`;

const { Footer } = Layout;

const CustomFooter = ({ t }) => {
  return (
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
          <Col xs={24} sm={{ span: 12 }}>
            <Link href={`/${i18n.language}`}>
              <Logo />
            </Link>
            <Copyright>
              Investigate your drug with 3D biomimicry 3D organ-on-a-chip
            </Copyright>
            <RightsReserved>
              <Caption2 style={{ color: GRAY40 }}>
                © 2020 EDMICBIO. © Copyright 2019~ | All Rights Reserved |{" "}
                <Caption2 style={{ wordBreak: "keep-all" }}>
                  Powered by EDmicBio Inc.
                </Caption2>
              </Caption2>
            </RightsReserved>
            <FollowUsContainer desktop>
              <FollowUsTitle>Follow us</FollowUsTitle>
              <FollowUsIcons>
                {snsLinks.map(({ IconComponent, link }) => (
                  <FollowUsIcon
                    key={link}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {<IconComponent />}
                  </FollowUsIcon>
                ))}
              </FollowUsIcons>
            </FollowUsContainer>
          </Col>
          <Col xs={24} sm={{ span: 12 }}>
            <Contacts>
              <Row>
                {/* <Col xs={12} sm={24}>
                <Contact>
                  <ContactTitle>Tel</ContactTitle>
                  <ContactContent>02-1234-5678</ContactContent>
                </Contact>
              </Col> */}
                <Col xs={12} sm={24}>
                  <Contact>
                    <ContactTitle>{t("footer_email_title")}</ContactTitle>
                    <ContactContent>edmicbio@edmicbio.com</ContactContent>
                  </Contact>
                </Col>
                <Col xs={24} sm={24}>
                  <Contact>
                    <ContactTitle>{t("footer_location_title")}</ContactTitle>
                    <ContactContent>
                      {t("footer_location_content_1")} <br />
                      {t("footer_location_content_2")}
                    </ContactContent>
                  </Contact>
                </Col>

                <Col xs={24} sm={24}>
                  <FollowUsContainer mobile>
                    <FollowUsTitle>Follow us</FollowUsTitle>
                    <FollowUsIcons>
                      {snsLinks.map(({ IconComponent, link }) => (
                        <FollowUsIcon
                          key={link}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {<IconComponent />}
                        </FollowUsIcon>
                      ))}
                    </FollowUsIcons>
                  </FollowUsContainer>
                </Col>
              </Row>
            </Contacts>
          </Col>
        </Row>
      </FooterContainer>
    </Footer>
  );
};

export default withTranslation("common")(CustomFooter);
