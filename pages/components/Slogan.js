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
import { withTranslation } from "../../i18n";

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

const Slogan = ({ t }) => (
  <ComponentContainer>
    <Row style={{ width: "100%" }} gutter={gutter}>
      <Col span={24}>
        <SloganHeader>
          <Headline bold>Slogan</Headline>
          <Divider />
        </SloganHeader>
      </Col>
      <Col xs={{ span: 24, offset: 0 }} sm={{ span: 10, offset: 2 }}>
        <SloganImage src="https://firebasestorage.googleapis.com/v0/b/edmicbio.appspot.com/o/edmicbio%2Fmain%2Fslogan.png?alt=media&token=48838793-43f1-4e2e-ae15-48b87089f51f" />
      </Col>
      <Col xs={{ span: 24, offset: 0 }} sm={{ span: 10 }}>
        <SloganContent>
          <Body bold style={{ marginTop: 25 }}>
            EDmicBio Inc.
          </Body>
          <Caption1 style={{ marginTop: 24, color: GRAY40 }}>
            {t("slogan")}
          </Caption1>
        </SloganContent>
      </Col>
    </Row>
  </ComponentContainer>
);

export default withTranslation("common")(Slogan);
