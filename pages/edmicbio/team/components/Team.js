import Headline from "components/typography/Headline";
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
import { GRAY20 } from "styles/colors";
import Member from "components/Member";

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
    padding-bottom: 88px;
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

const Image = styled.img`
  width: 100%;
`;

const MEMBERS = [
  {
    name: "하동헌",
    position: "CEO",
    positionSub: "(Chief Executive Officer)",
    photo: "/images/edmicbio/team/하동헌.png",
  },
  {
    name: "이형석",
    position: "CTO",
    positionSub: "(Chief Technology Officer)",
    photo: "/images/edmicbio/team/이형석.png",
  },
  {
    name: "조동우",
    position: "기술고문",
    photo: "/images/edmicbio/team/조동우.png",
  },
  {
    name: "장진아",
    position: "기술고문",
    photo: "/images/edmicbio/team/장진아.png",
  },
  {
    name: "이한철",
    position: "기술고문",
    photo: "/images/edmicbio/team/이한철.png",
  },
  {
    name: "박태준",
    position: "CFO",
    positionSub: "(Chief Financial Officer)",
    photo: "/images/edmicbio/team/박태준.png",
  },
  {
    name: "이승록",
    position: "연구원",
    photo: "/images/edmicbio/team/이승록.png",
  },
];

const Team = () => {
  return (
    <ComponentContainer>
      <Row style={{ width: "100%" }} gutter={[gutter, gutter_vertical]}>
        <Col xs={24}>
          <Header>
            <Headline bold>Medical Device</Headline>
            <Divider />
          </Header>
        </Col>
        {MEMBERS.map((member) => (
          <Col key={member.name + member.position} xs={12} sm={8}>
            <Member 
              name={member.name}
              position={member.position}
              positionSub={member.positionSub}
              photo={member.photo}
            />
          </Col>
        ))}
      </Row>
    </ComponentContainer>
  );
};

export default Team;
