import Headline from "components/typography/Headline";
import Body from "components/typography/Body";
import Caption1 from "components/typography/Caption1";
import Divider from "components/Divider";
import DividerRed from "components/DividerRed";
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
import db from "../../../../db";

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
  const [mobileUngSrc, setMobileImgSrc] = useState(
    "https://firebasestorage.googleapis.com/v0/b/edmicbio.appspot.com/o/edmicbio%2Fhistory%2Fhistory_mobile.png?alt=media&token=5b9c466b-eff8-4c91-b96f-ee574d3bcba6"
  );
  const [desktopImgSrc, setDesktopImgSrc] = useState(
    "https://firebasestorage.googleapis.com/v0/b/edmicbio.appspot.com/o/edmicbio%2Fhistory%2Fhistory_desktop.png?alt=media&token=79fcb3cf-ba2b-49b0-a15d-f3d0dd896af4"
  );
  useEffect(() => {
    db.collection("histories")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const { src } = doc.data();
          if (doc.id === "mobile") {
            setMobileImgSrc(src);
          }
          if (doc.id === "desktop") {
            setDesktopImgSrc(src);
          }
        });
      });
  }, []);
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
          <HistoryImage mobile src={mobileUngSrc} />
          <HistoryImage desktop src={desktopImgSrc} />
        </Col>
      </Row>
    </ComponentContainer>
  );
};

export default History;
