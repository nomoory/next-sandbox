import Headline from "components/typography/Headline";
import Body from "components/typography/Body";
import Caption1 from "components/typography/Caption1";
import Divider from "components/Divider";
import styled from "styled-components";
import { GRAY10 } from "styles/colors";
import {
  side_padding_mobile,
  side_padding_desktop,
  mediaQueriesBiggerThan,
} from "styles";

const ComponentContainer = styled.div`
  width: 100%;
  padding: 0 ${side_padding_mobile}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  background: ${GRAY10};
  padding-bottom: 32px;

  ${mediaQueriesBiggerThan("sm")} {
    padding: 0 ${side_padding_desktop}px;
  }
`;

const SloganImage = styled.img`
  width: 100%;
`;

export default () => (
  <ComponentContainer>
    <Headline bold>Slogan</Headline>
    <Divider />
    <SloganImage
      style={{ marginTop: 24 }}
      src="/images/landing/slogan/slogan.png"
    />
    <Body bold style={{ marginTop: 25 }}>
      EDmicBio Inc.
    </Body>
    <Caption1 style={{ marginTop: 12, textAlign: "center" }}>
      We develop 3D Organ-on-a-chip and medical devices that mimic the tissues
      and organs of the human body using in house developed technologies to
      improve the quality of the human life
    </Caption1>
  </ComponentContainer>
);
