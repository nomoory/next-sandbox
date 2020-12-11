import Headline from "components/typography/Headline";
import Body from "components/typography/Body";
import Caption1 from "components/typography/Caption1";
import Divider from "components/Divider";
import styled from "styled-components";
import { Col, Row } from "antd";
import { GRAY10, GRAY40 } from "styles/colors";
import {
  side_padding_mobile,
  side_padding_desktop,
  mediaQueriesBiggerThan,
  gutter,
} from "styles";

const ComponentContainer = styled.div`
  width: 100%;
  padding: 0 ${side_padding_mobile}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  background: ${GRAY10};
  padding-bottom: 32px;
  padding-top: 54px;

  ${mediaQueriesBiggerThan("sm")} {
    padding: 0 ${side_padding_desktop}px;
    padding-top: 54px;
    padding-bottom: 74px;
  }
`;

const SloganImage = styled.img`
  width: 100%;
  margin-top: 24px;
`;

const SloganHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SloganContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  ${mediaQueriesBiggerThan("sm")} {
    padding-left: 24px;
    align-items: flex-start;
    text-align: start;
  }
`;

const Slogan = () => (
  <ComponentContainer>
    <Row style={{ width: "100%" }} gutter={gutter}>
      <Col span={24}>
        <SloganHeader>
          <Headline bold>Slogan</Headline>
          <Divider />
        </SloganHeader>
      </Col>
      <Col xs={{ span: 24, offset: 0 }} sm={{ span: 10, offset: 2 }}>
        <SloganImage src="/images/landing/slogan/slogan.png" />
      </Col>
      <Col xs={{ span: 24, offset: 0 }} sm={{ span: 10 }}>
        <SloganContent>
          <Body bold style={{ marginTop: 25 }}>
            EDmicBio Inc.
          </Body>
          <Caption1 style={{ marginTop: 24, color: GRAY40 }}>
            We develop 3D Organ-on-a-chip and medical devices that mimic the
            tissues and organs of the human body using in house developed
            technologies to improve the quality of the human life
          </Caption1>
        </SloganContent>
      </Col>
    </Row>
  </ComponentContainer>
);

export default Slogan;
