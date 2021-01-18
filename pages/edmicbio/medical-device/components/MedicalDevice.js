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
import { GRAY50, RED40, GRAY20 } from "styles/colors";
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
  }
`;

const BrOnDesktop = styled.br`
  display: none;
  ${mediaQueriesBiggerThan("sm")} {
    display: initial;
  }
`;

const RedBoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 32px;

  ${mediaQueriesBiggerThan("sm")} {
    justify-content: flex-start;
    margin-top: 40px;
  }
`;
const RedBox = styled.div`
  padding: 4px 16px;
  background-color: ${RED40};
  color: white;
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

const MedicalDevice = ({ t }) => {
  return (
    <ComponentContainer>
      <Row style={{ width: "100%" }} gutter={[gutter, gutter_vertical]}>
        <Col xs={24}>
          <Header>
            <Headline bold>Medical Device</Headline>
            <Divider />
            <DescriptionContainer>
              <Body>
                {t("medical_device_0_1")} <BrOnDesktop />
                {t("medical_device_0_2")}
              </Body>
            </DescriptionContainer>
          </Header>
        </Col>
        <Col xs={24}>
          <RedBoxContainer>
            <RedBox>
              <Body bold>스탠트</Body>
            </RedBox>
          </RedBoxContainer>
        </Col>
        <Col style={{ marginTop: 50 }}>
          <Row gutter={gutter}>
            <Col xs={24} sm={12}>
              <FirstImage src="https://firebasestorage.googleapis.com/v0/b/edmicbio.appspot.com/o/edmicbio%2Fmedicaldevice%2Fstent_image.jpg?alt=media&token=8699c5cf-5221-492e-8fc2-7617f4d2a65a" />
            </Col>
            <Col xs={24} sm={12}>
              <TextContainer>
                <Caption1 style={{ color: GRAY50 }}>
                  {t("medical_device_1_1")}
                  <br />
                  {t("medical_device_1_2")}
                  <br />
                  {t("medical_device_1_3")}
                </Caption1>
              </TextContainer>
            </Col>
          </Row>
        </Col>
        <Col style={{ marginTop: 50 }}>
          <Row gutter={gutter}>
            <Col xs={24} sm={12}>
              <SecondImage src="https://firebasestorage.googleapis.com/v0/b/edmicbio.appspot.com/o/edmicbio%2Fmedicaldevice%2Fvar_stent.png?alt=media&token=196eb5bb-7863-46fb-b026-a5f11b06578c" />
            </Col>
            <Col xs={24} sm={12}>
              <SecondTextContainer>
                <Caption1 style={{ color: GRAY50 }}>
                  {t("medical_device_2")}
                </Caption1>
              </SecondTextContainer>
            </Col>
          </Row>
        </Col>
      </Row>
    </ComponentContainer>
  );
};

export default withTranslation("common")(MedicalDevice);
