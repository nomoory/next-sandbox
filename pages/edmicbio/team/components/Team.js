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

const Team = ({ memberStore }) => {
  useEffect(() => {
    memberStore.loadAll();
  },[])
  const members = memberStore.formattedDataArray || [];
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
          <Col key={member.name + member.position} xs={12} sm={6}>
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
