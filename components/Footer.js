import { Col, Layout, Row } from "antd";
import Link from "next/link";
import styled from "styled-components";
import { margin_desktop, margin_mobile, mediaQueries } from "../styles";
const { Footer } = Layout;

const FooterContainer = styled.div`
  margin: 0 ${margin_mobile}px;
  background: #ffffff;
  box-shadow: 0px -1px 0px rgba(118, 118, 118, 0.25);
  border-radius: 2px;
  padding: 23px 0px 32px 0px;
  ${mediaQueries("sm")} {
    margin: 0 ${margin_desktop}px;
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

const Copyright = styled.div`
  margin-top: 24px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0em;
  color: #1c1d23;
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
  background: #c8493f;
  border-radius: 10px;
  margin-top: 7px;
`;
const FollowUsIcon = styled.div``;

export default () => (
  <Footer style={{ padding: 0, backgroundColor: "white" }}>
    <FooterContainer>
      <Row>
        <Col span={12}>
          <Link href="/">
            <Logo />
          </Link>
          <Copyright>
            Investigate your drug with 3D biomimicry 3D organ-on-a-chip
          </Copyright>
          <RightsReserved>
            © 2020 EDMICBIO. © Copyright 2019~ | All Rights Reserved |  
            <br/>
            Powered by EDmicBio Inc.
          </RightsReserved>
          <FollowUsContainer>
            <FollowUsTitle>Follow us</FollowUsTitle>
            <FollowUsIcons>
              <FollowUsIcon></FollowUsIcon>
            </FollowUsIcons>
          </FollowUsContainer>
        </Col>
        <Col span={12}>2</Col>
      </Row>
    </FooterContainer>
  </Footer>
);
