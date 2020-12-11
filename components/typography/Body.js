import styled, { css } from "styled-components";

export const bodyRegular = css`
font-family: Montserrat;
font-size: 16px;
font-style: normal;
line-height: 28px;
letter-spacing: 0em;
text-align: left;
  color: #000000;
  font-weight: 400;
`;

export const bodyBold = css`
  ${bodyRegular}
  font-weight: 600;
`;

export default styled.div`
  ${(props) => (props.bold ? bodyBold : bodyRegular)}
`;
