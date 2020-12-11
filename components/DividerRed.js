import styled from "styled-components";
import { RED40 } from "styles/colors";
import {
  mediaQueriesBiggerThan,
} from "styles";
const DividerRed = styled.div`
  background: ${RED40};
  min-width: 27px;
  height: 4px;
  margin-top: ${props => props.marginTop || "16px"};
  ${mediaQueriesBiggerThan("sm")} {
    display: none;
  }
`;

export default DividerRed;
