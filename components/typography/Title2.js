import styled, { css } from "styled-components";

export const titleRegular = css`
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  line-height: 29px;
  letter-spacing: 0em;
  font-weight: 400;
  text-align: inherit;
  color: inherit;
  word-break: keep-all;
`;

export const titleBold = css`
  ${titleRegular}
  font-weight: 600;
`;

export default styled.span`
  ${(props) => (props.bold ? titleBold : titleRegular)}
`;
