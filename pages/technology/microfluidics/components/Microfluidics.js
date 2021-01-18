import Headline from "components/typography/Headline";
import Body from "components/typography/Body";
import Caption1 from "components/typography/Caption1";
import Divider from "components/Divider";
import styled from "styled-components";
import { Col, Row } from "antd";
import {
  side_padding_mobile,
  side_padding_desktop,
  mediaQueriesBiggerThan,
  gutter,
  gutter_vertical,
} from "styles";
import { GRAY50, GRAY20 } from "styles/colors";
import { withTranslation } from "../../../../i18n";

const ComponentContainer = styled.div`
  width: 100%;
  padding-left: ${side_padding_mobile}px;
  padding-right: ${side_padding_mobile}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;

  ${mediaQueriesBiggerThan("sm")} {
    padding-left: ${side_padding_desktop}px;
    padding-right: ${side_padding_desktop}px;
    padding-bottom: 64px;
  }
`;

const Header = styled.div`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${mediaQueriesBiggerThan("sm")} {
    margin-top: 22px;
  }
`;

const FirstImage = styled.img`
  width: 100%;
`;

const SecondImage = styled.img`
  width: 100%;
`;

const TextContainer = styled.div`
  margin-top: 20px;
  ${mediaQueriesBiggerThan("sm")} {
    margin-top: 0;
    margin-bottom: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

const BrOnDesktop = styled.br`
  display: none;
  ${mediaQueriesBiggerThan("sm")} {
    display: initial;
  }
`;

const DescriptionContainer = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${GRAY20};
  text-align: center;
`;

const SecondTextContainer = styled(TextContainer)`
  ${mediaQueriesBiggerThan("sm")} {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 10px;
  }
`;

const Microfluidics = ({ t }) => {
  return (
    <ComponentContainer>
      <Row style={{ width: "100%" }} gutter={[gutter, gutter_vertical]}>
        <Col xs={24}>
          <Header>
            <Headline bold>Microfluidics</Headline>
            <Divider />
          </Header>
        </Col>
        <Col>
          <Row gutter={gutter}>
            <Col xs={24} sm={12}>
              <FirstImage src="https://firebasestorage.googleapis.com/v0/b/edmicbio.appspot.com/o/edmicbio%2Fmicrofluidics%2Fchip_1.png?alt=media&token=0038ef3a-6586-4173-9760-0510e61ac86a" />
            </Col>
            <Col xs={24} sm={12}>
              <TextContainer>
                <Caption1 style={{ color: GRAY50 }}>
                  {t("microfluidics_1")}
                </Caption1>
              </TextContainer>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row gutter={gutter}>
            <Col xs={24} sm={12}>
              <SecondImage src="https://firebasestorage.googleapis.com/v0/b/edmicbio.appspot.com/o/edmicbio%2Fmicrofluidics%2Fchip_2.png?alt=media&token=1492a206-05c9-4a1e-ad7d-8473ff681030" />
            </Col>
            <Col xs={24} sm={12}></Col>
          </Row>
        </Col>
        <Col>
          <Row gutter={gutter}>
            <Col xs={24} sm={12}>
              <SecondImage src="https://firebasestorage.googleapis.com/v0/b/edmicbio.appspot.com/o/edmicbio%2Fmicrofluidics%2Fchip_3.png?alt=media&token=18096c83-2cea-4b5d-b360-8a29d60bc35b" />
            </Col>
            <Col xs={24} sm={12}>
              <SecondTextContainer>
                <Caption1 style={{ color: GRAY50 }}>
                </Caption1>
              </SecondTextContainer>
            </Col>
          </Row>
        </Col>
      </Row>
    </ComponentContainer>
  );
};

export default withTranslation("common")(Microfluidics);
