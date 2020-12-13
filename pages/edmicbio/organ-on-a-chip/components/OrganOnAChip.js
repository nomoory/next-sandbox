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
} from "styles";
import { GRAY50, RED30, RED40 } from "styles/colors";

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

const Vision = () => {
  return (
    <ComponentContainer>
      <Row style={{ width: "100%" }} gutter={gutter}>
        <Col xs={24}>
          <Header>
            <Headline bold>Organ-on-a-chip</Headline>
            <Divider />
          </Header>
        </Col>
        <Col xs={24}>
          <RedBoxContainer>
            <RedBox>
              <Body bold>About OOC</Body>
            </RedBox>
          </RedBoxContainer>
        </Col>
        <Col xs={24} sm={24}>
          <FirstImage src="/images/edmicbio/organ_1_m.png" />
          <TextContainer>
            <Caption1 style={{ color: GRAY50 }}>
              3D 장기칩은 우리 몸 속에 있는 장기를 체외에서 그대로 구현한
              플랫폼입니다. 이를 통하여 조직/장기에 대한 약물독성평가, 신약개발,
              환자맞춤형 약물처방 등 다양한 실험을 수행할 수 있습니다.
            </Caption1>
          </TextContainer>
        </Col>
        <Col xs={24} sm={{ span: 18 }}>
          <SecondImage src="/images/edmicbio/organ_2_m.png" />
          <TextContainer>
            <Caption1 style={{ color: GRAY50 }}>
              현재, 많은 실험들이 비임상 동물실험을 통해 수행되고 있습니다.
              하지만{" "}
              <RedText>
                이러한 동물실험환경은 실제 인간의 환경과 다르기 때문에, 그
                정확도가 매우 낮습니다.
              </RedText>{" "}
              실제 신약개발 과정에서 비임상을 통과한 신약 후보들 중 오직 8% 만이
              실제 인체에 효과가 있었다는 사실은, 동물실험으로 인하여 수많은
              시간-재원적 낭비가 발생한다는 것을 의미합니다.
            </Caption1>
          </TextContainer>
        </Col>
        <Col xs={24} sm={{ span: 18, offset: 6 }}>
          <ThirdImage src="/images/edmicbio/organ_3_m.png" />
          <RightAlignedOnDesktopTextContainer>
            <Caption1 style={{ color: GRAY50, textAlign: "inherit" }}>
              그리고 전세계적으로 불고있는 동물실험에 대한 윤리적 문제,
              <BrOnDesktop />
              이로 인한 미래 동물실험 금지에 대한 높은 가능성에
              <BrOnDesktop />
              대비할 수 있는 방법이 절실한 상태입니다.
              <br />
              <br />
              (주) 에드믹바이오는 현재 개발하고 있는 3D 장기칩을 통하여{" "}
              <BrOnDesktop />
              <BoldText>미래에 대한 불확실성을 해결하고자 합니다.</BoldText>
            </Caption1>
          </RightAlignedOnDesktopTextContainer>
        </Col>
      </Row>
    </ComponentContainer>
  );
};

export default Vision;
