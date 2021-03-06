import styled from "styled-components";
import { Col, Row } from "antd";
import {
  side_padding_desktop,
  side_padding_mobile,
  mediaQueriesBiggerThan,
  gutter,
} from "styles";

const VideoContainer = styled.div`
  position: relative;
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

const BackgroundImage = styled.div`
  display: none;
  ${mediaQueriesBiggerThan("sm")} {
    display: inherit;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 63%;
    background-image: url("https://firebasestorage.googleapis.com/v0/b/edmicbio.appspot.com/o/edmicbio%2Fbg%2Fbg_3.png?alt=media&token=62accd3b-4cc1-4dd7-8d52-fd807bfd83e8");
    background-size: cover;
  }
`;

const BrandVideo = () => (
  <VideoContainer>
      <BackgroundImage />
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
