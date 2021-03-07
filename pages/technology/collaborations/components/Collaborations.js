import Headline from "components/typography/Headline";
import Body from "components/typography/Body";
import Divider from "components/Divider";
import styled from "styled-components";
import { Col, Row } from "antd";
import { useState, useEffect } from "react";
import {
  side_padding_mobile,
  side_padding_desktop,
  mediaQueriesBiggerThan,
  gutter,
  gutter_vertical,
} from "styles";
import { GRAY20 } from "styles/colors";
import { withTranslation } from "../../../../i18n";
import db from "../../../../db";

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

const Title = styled.div`
  ${mediaQueriesBiggerThan("sm")} {
  }
`;

const DescriptionContainer = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${GRAY20};
  text-align: center;
  ${mediaQueriesBiggerThan("sm")} {
    padding-top: 30px;
    padding-bottom: 26px;
  }
`;

const Collaborations = ({ t }) => {
  const [colleges, setColleges] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  useEffect(() => {
    db.collection("collaborations")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const { images } = doc.data();
          if (doc.id === "college") {
            setColleges(images);
          }
          if (doc.id === "hospital") {
            setHospitals(images);
          }
        });
      });
  }, []);
  return (
    <ComponentContainer>
      <Row style={{ width: "100%" }} gutter={[gutter, gutter_vertical]}>
        <Col xs={24}>
          <Header>
            <Headline bold>Collaboration</Headline>
            <Divider />
            <DescriptionContainer>{t("collaborations_1")}</DescriptionContainer>
          </Header>
        </Col>
        <Col xs={24}>
          <Title>
            <Body bold>Laboratory & College</Body>
          </Title>
        </Col>
        {colleges.map((src) => (
          <Col key={"college_" + src} xs={12} sm={6}>
            <Image src={src} />
          </Col>
        ))}
        <Col xs={24}>
          <Title>
            <Body bold>Hospital</Body>
          </Title>
        </Col>
        {hospitals.map((src) => (
          <Col key={"hospital_" + src} xs={12} sm={6}>
            <Image src={src} />
          </Col>
        ))}
      </Row>
    </ComponentContainer>
  );
};

export default withTranslation("common")(Collaborations);
