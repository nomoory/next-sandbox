import Headline from "components/typography/Headline";
import styled from "styled-components";
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

  ${mediaQueriesBiggerThan("sm")} {
    padding: 0 ${side_padding_desktop}px;
  }
`;

const ComponentTemplate = () => (
  <ComponentContainer>
    <Headline>
      Slogan
    </Headline>

  </ComponentContainer>
)

export default ComponentTemplate;