import styled from "styled-components";

export default styled.div`
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  ${props.bold ? "font-weight: 600;" : "font-weight: 400;"}
  color: #000000;
`;
