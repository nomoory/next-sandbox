import Headline from "components/typography/Headline";
import Body from "components/typography/Body";
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
import { withTranslation } from "../../../../i18n";

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
  ${mediaQueriesBiggerThan("sm")} {
    margin-top: 48px;
  }
`;

const DividerRedOnMobileOnly = styled(DividerRed)`
  width: 73px;
  margin: 24px 0px;
  ${mediaQueriesBiggerThan("sm")} {
    display: none;
  }
`;

const Vision = ({ t }) => {
  return (
    <ComponentContainer>
      <Row style={{ width: "100%" }} gutter={[gutter, gutter_vertical]}>
        <Col sm={24} md={24}>
          <VisionHeader>
            <Headline bold>VISION</Headline>
            <Divider />
          </VisionHeader>
          <SloganImage src="https://firebasestorage.googleapis.com/v0/b/edmicbio.appspot.com/o/edmicbio%2Fvision%2Fvision-1.jpg?alt=media&token=e3670cc5-917e-43aa-8267-2bbec2b150bd" />
        </Col>
        <Col sm={24} md={24}>
          <DescriptionEn>
            <Body bold style={{ marginTop: 25 }}>
              {t("vision_1")}
            </Body>
          </DescriptionEn>
        </Col>
      </Row>
    </ComponentContainer>
  );
};

export default withTranslation("common")(Vision);
