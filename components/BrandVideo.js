import styled from 'styled-components';
import { side_padding_desktop, side_padding_mobile, mediaQueriesBiggerThan } from '../styles';

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 ${side_padding_mobile}px;

  ${mediaQueriesBiggerThan("sm")} {
    padding: 0 ${side_padding_desktop}px;
  }
`;

const Video = styled.video`

  ${mediaQueriesBiggerThan("sm")} {
  }
`;

export default () => (
  <VideoContainer>  
    <Video width="100%" autoPlay loop muted playsInline >
      <source src="https://firebasestorage.googleapis.com/v0/b/edmicbio.appspot.com/o/videoplayback.mp4?alt=media&token=70b6c4b2-a2e7-4e0f-9a72-27b03e3468a4" type="video/mp4" />
      Your browser does not support the video tag.
    </Video>
  </VideoContainer>
);
