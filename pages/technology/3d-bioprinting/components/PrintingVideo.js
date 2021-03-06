import { useRef } from "react";
import styled from "styled-components";
import Body from "components/typography/Body";
import { GRAY10, GRAY90 } from "styles/colors";
import { mediaQueriesBiggerThan } from "styles";

const VideoContainer = styled.div`
  background-color: ${GRAY10};
  margin-bottom: 30px;

  ${mediaQueriesBiggerThan("sm")} {
    margin-bottom: 0px;
  }
`;

const Video = styled.video`
  ${mediaQueriesBiggerThan("sm")} {
  }
`;

const VideoTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
`;

const PrintingVideoModal = ({ src, type, title }) => {
  const videoRef = useRef();

  return (
    <VideoContainer>
      <Video
        ref={videoRef}
        width="100%"
        autoPlay
        loop
        muted
        playsInline
        onClick={() => {
          // setVisible(true);
          // videoRef.current.requestFullscreen()
          const elem = videoRef.current;
          if (elem.requestFullscreen) {
            elem.requestFullscreen();
          } else if (elem.webkitRequestFullscreen) {
            /* Safari */
            elem.webkitRequestFullscreen();
          } else if (elem.msRequestFullscreen) {
            /* IE11 */
            elem.msRequestFullscreen();
          }
        }}
      >
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </Video>
      <VideoTitle>
        <Body bold style={{ color: GRAY90, textAlign: "center" }}>
          {title}
        </Body>
      </VideoTitle>
    </VideoContainer>
  );
};

export default PrintingVideoModal;
