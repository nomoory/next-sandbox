import styled, { css } from "styled-components";

export const headlineRegular = css`
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  line-height: 35px;
  letter-spacing: 0em;
  font-weight: 400;
  text-align: inherit;
  color: inherit;
  word-break: keep-all;
`;

export const headlineBold = css`
  ${headlineRegular}
  font-weight: 600;
`;

export default styled.span`
  ${(props) => (props.bold ? headlineBold : headlineRegular)}
`;
