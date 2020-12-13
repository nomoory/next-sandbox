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

const Vision = () => {
  return (
    <ComponentContainer>
      <Row style={{ width: "100%" }} gutter={[gutter, gutter_vertical]}>
        <Col xs={24}>
          <Header>
            <Headline bold>Medical Device</Headline>
            <Divider />
            <DescriptionContainer>
              <Body>
                (주) 에드믹바이오는 3D 바이오프린팅 기술을 기반으로{" "}
                <BrOnDesktop />
                의료기기를 개발합니다.
              </Body>
            </DescriptionContainer>
          </Header>
        </Col>
        <Col xs={24}>
          <RedBoxContainer>
            <RedBox>
              <Body bold>스탠드</Body>
            </RedBox>
          </RedBoxContainer>
        </Col>
        <Col style={{ marginTop: 50 }}>
          <Row gutter={gutter}>
            <Col xs={24} sm={12}>
              <FirstImage src="/images/edmicbio/medical_device_1_m.png" />
            </Col>
            <Col xs={24} sm={12}>
              <TextContainer>
                <Caption1 style={{ color: GRAY50 }}>
                  스텐트는 동맥경화로 인하여 막힌 혈관을 뚫어준 뒤 재협착을
                  방지하기 위해 삽입해주는 의료기기입니다. 보통 스텐트는
                  금속으로 많이 제작되는데, 삽입된 이후 평생토록 몸속에 남아서
                  혈관이 다시 막히는 문제가 발생합니다. <br />
                  (주) 에드믹바이오는 체내에서 녹는 물질을 이용하여 스텐트를
                  개발함으로써 이러한 문제를 해결합니다.
                </Caption1>
              </TextContainer>
            </Col>
          </Row>
        </Col>
        <Col style={{ marginTop: 50 }}>
          <Row gutter={gutter}>
            <Col xs={24} sm={12}>
              <SecondImage src="/images/edmicbio/medical_device_2_m.png" />
            </Col>
            <Col xs={24} sm={12}>
              <SecondTextContainer>
                <Caption1 style={{ color: GRAY50 }}>
                  다리혈관 스텐트를 메인으로 하여 다른 도관형 조직에도 적용할 수
                  있는 스텐트를 개발하고 있습니다.
                </Caption1>
              </SecondTextContainer>
            </Col>
          </Row>
        </Col>
      </Row>
    </ComponentContainer>
  );
};

export default Vision;
