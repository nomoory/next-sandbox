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
import PrintingVideo from "./PrintingVideo";

const VIDEOS = [
  {
    type: "video/mp4",
    src:
      "https://firebasestorage.googleapis.com/v0/b/edmicbio.appspot.com/o/stent_printing.mp4?alt=media&token=9392cff9-deef-45ac-a90a-099e753e5f0e",
    title: "스텐트 프린팅",
  },
  {
    type: "video/mp4",
    src:
      "https://firebasestorage.googleapis.com/v0/b/edmicbio.appspot.com/o/blood_vessel_model_printing.mp4?alt=media&token=c779746e-5f57-40b6-bc4b-f0af2722efa2",
    title: "혈관 모델 프린팅",
  },
  {
    type: "video/mp4",
    src:
      "https://firebasestorage.googleapis.com/v0/b/edmicbio.appspot.com/o/scaffold_printing.mp4?alt=media&token=3ea6f1ed-083d-49eb-8143-af2061b637d1",
    title: "Scaffold 프린팅",
  },
];

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

const ThreeDimensionalBioprinting = () => {
  return (
    <ComponentContainer>
      <Row style={{ width: "100%" }} gutter={[gutter, gutter_vertical]}>
        <Col xs={24}>
          <Header>
            <Headline bold>3D Bioprinting</Headline>
            <Divider />
            <DescriptionContainer>
              <Body>
                (주) 에드믹바이오의 3D 바이오프린팅 기술은 장비설계 및 제작,
                조직/장기 프린팅, <BrOnDesktop />
                3D 장기칩 및 조직/장기 구현을 모두 아우르는 기술입니다
                <BrOnDesktop />
              </Body>
            </DescriptionContainer>
          </Header>
        </Col>
        <Col>
          <Row gutter={gutter}>
            <Col xs={24} sm={12}>
              <FirstImage src="/images/technology/3Dbioprinting_m1.png" />
            </Col>
            <Col xs={24} sm={12}>
              <TextContainer>
                <Caption1 style={{ color: GRAY50 }}>
                  (주) 에드믹바이오는원하는 형태의 3D 장기칩과 조직/장기를
                  제작하기 위한 3D 바이오프린팅 시스템을 설계 및 제작할 수
                  있습니다.
                </Caption1>
              </TextContainer>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row gutter={gutter}>
            <Col xs={24} sm={12}>
              <SecondImage src="/images/technology/3Dbioprinting_m2.jpg" />
            </Col>
            <Col xs={24} sm={12}>
              <SecondTextContainer>
                <Caption1 style={{ color: GRAY50 }}>
                  (주) 에드믹바이오 자체적으로 개발된 3D 바이오프린팅 시스템을
                  기반으로 3D 형태의 조직/장기를 제작하거나, 3D 장기칩을 개발할
                  수 있습니다.
                  <br />
                  또한, 다양한 형태로 조직/장기 및 의료기기를 제작하는 노하우는
                  향후 ~한 결과를 도출할 수 있도록 해주는 원동력이 됩니다.
                </Caption1>
              </SecondTextContainer>
            </Col>
          </Row>
        </Col>
        <Col xs={24}>
          <RedBoxContainer>
            <RedBox>
              <Body bold>VIDEO</Body>
            </RedBox>
          </RedBoxContainer>
        </Col>
        {VIDEOS.map(({ title, src, type }) => (
          <Col key={title} xs={24} sm={8}>
            <PrintingVideo key={src} title={title} src={src} type={type} />
          </Col>
        ))}
      </Row>
    </ComponentContainer>
  );
};

export default ThreeDimensionalBioprinting;
