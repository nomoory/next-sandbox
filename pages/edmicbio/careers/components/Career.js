import Headline from "components/typography/Headline";
import Divider from "components/Divider";
import Body from "components/typography/Body";
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
import CareerList from "./CareerList";
import { withTranslation } from "../../../../i18n";

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

const DescriptionContainer = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${GRAY20};
  text-align: center;
`;

const Career = ({ t }) => {
  return (
    <ComponentContainer>
      <Row style={{ width: "100%" }} gutter={[gutter, gutter_vertical]}>
        <Col xs={24}>
          <Header>
            <Headline bold>Career</Headline>
            <Divider />
            <DescriptionContainer>
              <Body>{t("careers_1")}</Body>
            </DescriptionContainer>
          </Header>
        </Col>
        <Col xs={24}>
          <CareerList />
        </Col>
      </Row>
    </ComponentContainer>
  );
};

export default withTranslation("common")(Career);
