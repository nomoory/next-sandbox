import styled, { css } from "styled-components";

export const titleRegular = css`
font-family: Montserrat;
font-size: 30px;
font-style: normal;
line-height: 37px;
letter-spacing: 0em;
text-align: left;
  color: #000000;
  font-weight: 400;
`;

export const titleBold = css`
  ${titleRegular}
  font-weight: 600;
`;

export default styled.div`
  ${(props) => (props.bold ? titleBold : titleRegular)}
`;
