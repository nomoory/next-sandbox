import Headline from "components/typography/Headline";
import Divider from "components/Divider";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import { useEffect } from "react";
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
    photo:
      "https://firebasestorage.googleapis.com/v0/b/edmicbio.appspot.com/o/edmicbio%2Fteam%2Fhdh.png?alt=media&token=1e06e61f-68e6-414f-b2c9-8025f4a0a08c",
  },
  {
    name: "이형석",
    position: "CTO",
    positionSub: "(Chief Technology Officer)",
    photo:
      "https://firebasestorage.googleapis.com/v0/b/edmicbio.appspot.com/o/edmicbio%2Fteam%2Flhs.png?alt=media&token=ba7e34bf-f83e-444d-9c35-1dfc3760177b",
  },
  {
    name: "조동우",
    position: "기술고문",
    photo:
      "https://firebasestorage.googleapis.com/v0/b/edmicbio.appspot.com/o/edmicbio%2Fteam%2Fjdw.JPG?alt=media&token=6ffd0b62-0dcd-43d3-bab4-1c16e2aefec2",
  },
  {
    name: "장진아",
    position: "기술고문",
    photo:
      "https://firebasestorage.googleapis.com/v0/b/edmicbio.appspot.com/o/edmicbio%2Fteam%2Fjja.png?alt=media&token=cf7732a6-2f6f-413b-a1d1-b6b4712c76c1",
  },
  {
    name: "이한철",
    position: "기술고문",
    photo:
      "https://firebasestorage.googleapis.com/v0/b/edmicbio.appspot.com/o/edmicbio%2Fteam%2Flhc.png?alt=media&token=c6f00854-4500-45b3-a693-060a3b798373",
  },
  {
    name: "박태준",
    position: "CFO",
    positionSub: "(Chief Financial Officer)",
    photo:
      "https://firebasestorage.googleapis.com/v0/b/edmicbio.appspot.com/o/edmicbio%2Fteam%2Fbtj.jpg?alt=media&token=28a825b5-75a4-4eb4-933c-1c6f63e547df",
  },
  {
    name: "이승록",
    position: "연구원",
    photo:
      "https://firebasestorage.googleapis.com/v0/b/edmicbio.appspot.com/o/edmicbio%2Fteam%2Flsl.png?alt=media&token=20df9947-dd49-4836-99d5-9e933909dda5",
  },
];

const Team = ({ memberStore }) => {
  useEffect(() => {
    memberStore.loadAll();
  },[])
  const members = memberStore.dataArray || [];
  return (
    <ComponentContainer>
      <Row style={{ width: "100%" }} gutter={[gutter, gutter_vertical]}>
        <Col xs={24}>
          <Header>
            <Headline bold>Team</Headline>
            <Divider />
          </Header>
        </Col>
        {members.map((member) => {
          return (
          <Col key={member.name + member.position} xs={12} sm={8}>
            <Member
              name={member.name}
              position={member.position}
              positionSub={member.positionSub}
              photo={member.photo}
              education={member.education}
              career={member.career}
              description={member.description}
            />
          </Col>
        )})}
      </Row>
    </ComponentContainer>
  );
};

export default inject("memberStore")(observer(Team));
