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

const ComponentContainer = styled.div`
  width: 100%;
  padding-left: ${side_padding_mobile}px;
  padding-right: ${side_padding_mobile}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;

  ${mediaQueriesBiggerThan("sm")} {
    padding-left: ${side_padding_desktop}px;
    padding-right: ${side_padding_desktop}px;
    padding-bottom: 200px;
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
  margin-top: 20px;
  ${mediaQueriesBiggerThan("sm")} {
    margin-top: 38px;
  }
`;

const TextContainer = styled.div`
  margin-top: 24px;
  ${mediaQueriesBiggerThan("sm")} {
    margin-top: 30px;
    margin-bottom: 0;
  }
`;

const BrOnDesktop = styled.br`
  display: none;
  ${mediaQueriesBiggerThan("sm")} {
    display: initial;
  }
`;
const BrOnMobile = styled.br`
  display: initial;
  ${mediaQueriesBiggerThan("sm")} {
    display: none;
  }
`;

const DescriptionContainer = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${GRAY20};
  text-align: center;
  ${mediaQueriesBiggerThan("sm")} {
    padding-bottom: 26px;
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
                에드믹바이오의 바이오잉크 기술은 개발하고자 하는 조직/장기의
                생화학적 환경을 모사하여 <BrOnDesktop />
                보다 고도화된 성능을 보여줍니다.
              </Body>
            </DescriptionContainer>
          </Header>
        </Col>
        <Col xs={24}>
          <FirstImage src="/images/technology/bioink.png" />
        </Col>
        <Col xs={24}>
          <TextContainer>
            <Caption1 style={{ color: GRAY50 }}>
              (주) 에드믹바이오는 조직/장기에서부터 직접 바이오잉크를 추출하는
              기술을 가지고 있습니다. <BrOnDesktop />
              이를 통하여 개발하고자 하는 조직/장기에 보다 높은 생화학적
              모사환경을 제공합니다.
              <br />
              <BrOnMobile />
              (주) 에드믹바이오는 간, 식도, 지방 외 20여종에 해당하는
              조직/장기에 대해 바이오잉크를 개발하는 노하우를 보유하고 있습니다.
            </Caption1>
          </TextContainer>
        </Col>
      </Row>
    </ComponentContainer>
  );
};

export default Vision;
