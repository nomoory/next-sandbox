import styled from "styled-components";

export default styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 31.5px;
  ${props.bold ? "font-weight: 600;" : "font-weight: 400;"}
  color: #000000;
`;
