import Headline from "components/typography/Headline";
import Body from "components/typography/Body";
import Caption1 from "components/typography/Caption1";
import Divider from "components/Divider";
import DividerRed from "components/DividerRed";
import styled from "styled-components";
import { Col, Row } from "antd";
import {
  side_padding_mobile,
  side_padding_desktop,
  mediaQueriesBiggerThan,
  gutter,
  gutter_vertical,
} from "styles";

const ComponentContainer = styled.div`
  width: 100%;
  padding-left: ${side_padding_mobile}px;
  padding-right: ${side_padding_mobile}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 32px;

  ${mediaQueriesBiggerThan("sm")} {
    padding-left: ${side_padding_desktop}px;
    padding-right: ${side_padding_desktop}px;
    padding-bottom: 64px;
  }
`;

const VisionHeader = styled.div`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SloganImage = styled.img`
  filter: brightness(80%);
  margin-top: 24px;
  width: 100%;
`;

const DescriptionEn = styled.div`
  width: 100%;
`;

const DescriptionKr = styled.div`
  width: 100%;
`;

const Vision = () => {

  return (
    <ComponentContainer>
      <Row style={{ width: "100%" }} gutter={[gutter, gutter_vertical]}>
        <Col sm={24} md={24}>
          <VisionHeader>
            <Headline bold>VISION</Headline>
            <Divider />
          </VisionHeader>
          <SloganImage src="/images/edmicbio/vision.png" />
        </Col>
        <Col xs={24} sm={10}>
          <DescriptionEn>
            <Body bold style={{ marginTop: 25 }}>
              We develop 3D Organ-on-a-chip that mimic the tissues/organs of the
              human body, and medical devices to improve the quality of the
              human life
            </Body>
          </DescriptionEn>
        </Col>
        <Col xs={6} sm={0}>
          <DividerRed style={{ marginTop: 24 }} />
        </Col>
        <Col xs={24} sm={14}>
          <DescriptionKr>
            <Caption1 style={{ marginTop: 24 }}>
              (주) 에드믹바이오는 3D 바이오프린팅 기술을 기반으로 실제
              조직/장기를 모사한 3D 장기칩, 그리고 보다 고도화된 의료기기를
              개발합니다.
              <br />
              <br />
              인류복지에 기여할 수 있는 기술의 개발과 세상으로의 전달을 행동으로
              실천하는 기업, 에드믹바이오가 보다 건강한 사회, 그리고 동물까지도
              보호할 수 있는 진정한 인류애 실현에 앞장서겠습니다.
            </Caption1>
          </DescriptionKr>
        </Col>
      </Row>
    </ComponentContainer>
  );
};

export default Vision;
