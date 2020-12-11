import styled from "styled-components";
import {
  mediaQueriesBiggerThan,
} from "styles";
const Divider = styled.div`
  border: 1px solid #b7b3b3;
  width: 27px;
  height: 0px;
  margin-top: ${props => props.marginTop || "16px"};
  ${mediaQueriesBiggerThan("sm")} {
  }
`;

export default Divider;
