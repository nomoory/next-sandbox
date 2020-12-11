import Body from "components/typography/Body";
import styled from "styled-components";
import { Col, Row } from "antd";
import { GRAY10 } from "styles/colors";
import {
  side_padding_mobile,
  side_padding_desktop,
  mediaQueriesBiggerThan,
  gutter,
} from "styles";
import Divider from "components/Divider";
import Button from "components/Button";
import ButtonArrowIcon from "components/icons/ButtonArrowIcon";
const ComponentContainer = styled.div`
  width: 100%;
  padding: 0 ${side_padding_mobile}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding-top: 60px;

  ${mediaQueriesBiggerThan("sm")} {
    padding-left: ${side_padding_desktop}px;
    padding-right: ${side_padding_desktop}px;
    padding-bottom: 100px;
    padding-top: 100px;
  }
`;

const ListContainer = styled.div`
  width: 100%;
  padding: 0 ${side_padding_mobile}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${GRAY10};

  &:not(:first-child) {
    margin-top: 32px;
  }

  ${mediaQueriesBiggerThan("sm")} {
    padding: 0 ${side_padding_desktop}px;
  }
`;

const ListHeader = styled.div`
  padding: 24px 24px 20px 24px;
  width: 100%;
`;
const ListBody = styled.div``;
const ListFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 24px;
  width: 100%;
`;

const NewsAndAnnouncement = () => (
  <ComponentContainer>
    <Row style={{ width: "100%" }} gutter={[32, gutter]}>
      <Col xs={{ span: 24, offset: 0 }} sm={{ span: 10, offset: 2 }}>
        <ListContainer>
          <ListHeader>
            <Body bold>News</Body>
            <Divider />
          </ListHeader>
          <ListBody></ListBody>
          <ListFooter>
            <Button type="primary">
              More
              <ButtonArrowIcon style={{ marginLeft: 8 }} />
            </Button>
          </ListFooter>
        </ListContainer>
      </Col>
      <Col xs={{ span: 24, offset: 0 }} sm={{ span: 10 }}>
        <ListContainer>
          <ListHeader>
            <Body bold>Announcements</Body>
            <Divider />
          </ListHeader>
          <ListBody></ListBody>
          <ListFooter>
            <Button>
              More
              <ButtonArrowIcon style={{ marginLeft: 8 }} />
            </Button>
          </ListFooter>
        </ListContainer>
      </Col>
    </Row>
  </ComponentContainer>
);

export default NewsAndAnnouncement;