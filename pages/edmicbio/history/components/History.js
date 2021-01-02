import Headline from "components/typography/Headline";
import Body from "components/typography/Body";
import Caption1 from "components/typography/Caption1";
import Divider from "components/Divider";
import DividerRed from "components/DividerRed";
import styled from "styled-components";
import { Col, Row } from "antd";
import {
  side_padding_mobile,
  side_padding_desktop,
  mediaQueriesBiggerThan,
  gutter,
  gutter_vertical
} from "styles";

const ComponentContainer = styled.div`
  width: 100%;
  padding-left: ${side_padding_mobile}px;
  padding-right: ${side_padding_mobile}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 32px;

  ${mediaQueriesBiggerThan("sm")} {
    padding-left: ${side_padding_desktop}px;
    padding-right: ${side_padding_desktop}px;
    padding-bottom: 64px;
  }
`;

const HistoryHeader = styled.div`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const HistoryImage = styled.img`
  width: 100%;
  ${(props) => (props.desktop ? "display: none;" : "")}
  ${mediaQueriesBiggerThan("sm")} {
    ${(props) => (props.mobile ? "display: none;" : "display: inherit")}
  }
`;

const DescriptionEn = styled.div`
  width: 100%;
`;

const DescriptionKr = styled.div`
  width: 100%;
  ${mediaQueriesBiggerThan("sm")} {
    margin-top: 48px;
  }
`;

const DividerRedOnMobileOnly = styled(DividerRed)`
  width: 73px;
  margin: 24px 0px;
  ${mediaQueriesBiggerThan("sm")} {
    display: none;
  }
`;

const History = () => {
  return (
    <ComponentContainer>
      <Row style={{ width: "100%" }} gutter={[gutter, gutter_vertical]}>
        <Col span={24}>
          <HistoryHeader>
            <Headline bold>History</Headline>
            <Divider />
          </HistoryHeader>
        </Col>
        <Col span={24}>
          <HistoryImage mobile src="https://firebasestorage.googleapis.com/v0/b/edmicbio.appspot.com/o/history_mobile.png?alt=media&token=7854da55-b668-4205-8818-ace8e683088e" />
          <HistoryImage desktop src="https://firebasestorage.googleapis.com/v0/b/edmicbio.appspot.com/o/history_desktop.png?alt=media&token=29a58a17-f9f1-48ec-9bf3-34cf7d3d284d" />
        </Col>
      </Row>
    </ComponentContainer>
  );
};

export default History;
