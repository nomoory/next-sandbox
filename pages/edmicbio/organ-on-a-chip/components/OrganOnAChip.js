import Headline from "components/typography/Headline";
import Body from "components/typography/Body";
import Caption1, { caption1Bold } from "components/typography/Caption1";
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
import { GRAY50, RED30, RED40 } from "styles/colors";
import { withTranslation } from "../../../../i18n";

const ComponentContainer = styled.div`
  width: 100%;
  padding-left: ${side_padding_mobile}px;
  padding-right: ${side_padding_mobile}px;
  display: flex;
  flex-direction: column;
  align-items: center;

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
  margin-top: 24px;
  width: 100%;
`;

const SecondImage = styled.img`
  width: 100%;
`;

const ThirdImage = styled.img`
  width: 100%;
`;

const RedText = styled.span`
  ${caption1Bold}
  color: ${RED30};
`;
const BoldText = styled.span`
  ${caption1Bold}
`;

const TextContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
`;

const RightAlignedOnDesktopTextContainer = styled(TextContainer)`
  ${mediaQueriesBiggerThan("sm")} {
    text-align: right;
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

const OrganOnAChip = ({ t }) => {
  return (
    <ComponentContainer>
      <Row style={{ width: "100%" }} gutter={[gutter, gutter_vertical]}>
        <Col xs={24}>
          <Header>
            <Headline bold>Organ-on-a-chip</Headline>
            <Divider />
          </Header>
        </Col>
        <Col xs={24}>
          <RedBoxContainer>
            <RedBox>
              <Body bold>About Organ-on-a-chip</Body>
            </RedBox>
          </RedBoxContainer>
        </Col>
        <Col xs={24} sm={24}>
          <FirstImage src="https://firebasestorage.googleapis.com/v0/b/edmicbio.appspot.com/o/edmicbio%2Fooc%2Fooc-1.jpg?alt=media&token=01238014-3227-4612-8113-325995763a8c" />
          <TextContainer>
            <Caption1 style={{ color: GRAY50 }}>
              {t("organ_on_a_chip_1")}
            </Caption1>
          </TextContainer>
        </Col>
        <Col xs={24} sm={{ span: 18 }}>
          <SecondImage src="https://firebasestorage.googleapis.com/v0/b/edmicbio.appspot.com/o/edmicbio%2Fooc%2Fooc-2.jpg?alt=media&token=687ab95a-b281-4114-b09e-08090ec6d805" />
          <TextContainer>
            <Caption1 style={{ color: GRAY50 }}>
              {t("organ_on_a_chip_2_1")}{" "}
              <RedText>{t("organ_on_a_chip_2_2")}</RedText>{" "}
              {t("organ_on_a_chip_2_3")}
            </Caption1>
          </TextContainer>
        </Col>
        <Col xs={24} sm={{ span: 18, offset: 6 }}>
          <ThirdImage src="https://firebasestorage.googleapis.com/v0/b/edmicbio.appspot.com/o/edmicbio%2Fooc%2Fooc-3.jpg?alt=media&token=1d028c09-eef3-4783-abb0-151fb8e12454" />
          <RightAlignedOnDesktopTextContainer>
            <Caption1 style={{ color: GRAY50, textAlign: "inherit" }}>
              {t("organ_on_a_chip_3_1")}
              <br />
              <br />
              {t("organ_on_a_chip_4_1")}{" "}
              <BrOnDesktop />
              <BoldText>{t("organ_on_a_chip_4_2")}</BoldText>
            </Caption1>
          </RightAlignedOnDesktopTextContainer>
        </Col>
      </Row>
    </ComponentContainer>
  );
};

export default withTranslation("common")(OrganOnAChip);
