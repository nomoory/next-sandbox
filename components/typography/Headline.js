import styled, { css } from "styled-components";

export const headlineRegular = css`
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  line-height: 35px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
  font-weight: 400;
`;

export const headlineBold = css`
  ${headlineRegular}
  font-weight: 600;
`;

export default styled.div`
  ${(props) => (props.bold ? headlineBold : headlineRegular)}
`;
