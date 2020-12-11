import styled from "styled-components";
import { Col, Row } from "antd";
import {
  side_padding_desktop,
  side_padding_mobile,
  mediaQueriesBiggerThan,
  gutter,
} from "styles";

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 ${side_padding_mobile}px;
  padding-top: 42px;
  padding-bottom: 40px;

  ${mediaQueriesBiggerThan("sm")} {
    padding: 0 ${side_padding_desktop}px;
    padding-top: 68px;
    padding-bottom: 133px;
  }
`;

const Video = styled.video`
  box-shadow: 0px 4px 11px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  ${mediaQueriesBiggerThan("sm")} {
  }
`;

const BrandVideo = () => (
  <VideoContainer>
    <Row style={{ width: "100%" }} gutter={gutter}>
      <Col xs={{ span: 24, offset: 0 }} sm={{ span: 16, offset: 4 }}>
        <Video width="100%" autoPlay loop muted playsInline>
          <source
            src="https://firebasestorage.googleapis.com/v0/b/edmicbio.appspot.com/o/videoplayback.mp4?alt=media&token=70b6c4b2-a2e7-4e0f-9a72-27b03e3468a4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </Video>
      </Col>
    </Row>
  </VideoContainer>
);

export default BrandVideo;
