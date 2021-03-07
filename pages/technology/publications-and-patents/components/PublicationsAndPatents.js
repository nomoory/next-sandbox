import Headline from "components/typography/Headline";
import { useEffect } from "react";
import Divider from "components/Divider";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import { Col, Row } from "antd";
import {
  side_padding_mobile,
  side_padding_desktop,
  mediaQueriesBiggerThan,
  gutter,
  gutter_vertical
} from "styles";
import PList from "./PList";

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

const PublicationsAndPatents = ({ publicationStore, patentStore }) => {
  useEffect(() => {
    publicationStore.loadAll();
    patentStore.loadAll();
  }, []);
  return (
    <ComponentContainer>
      <Row style={{ width: "100%" }} gutter={[gutter, gutter_vertical]}>
        <Col xs={24}>
          <Header>
            <Headline bold>Publications And Patents</Headline>
            <Divider />
          </Header>
        </Col>
        <Col xs={24}>
          <PList
            title={"Publications"}
            dataArray={publicationStore.dataArray}
          />
        </Col>

        <Col xs={24}>
          <PList title={"Patents"} dataArray={patentStore.formattedDataArray} />
        </Col>
      </Row>
    </ComponentContainer>
  );
};

export default inject(
  "publicationStore",
  "patentStore"
)(observer(PublicationsAndPatents));
