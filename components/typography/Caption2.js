import styled, { css } from "styled-components";

export const caption2Regular = css`
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  line-height: 15px;
  letter-spacing: 0em;
  font-weight: 400;
  text-align: inherit;
  color: inherit;
  word-break: keep-all;
`;

export const caption2Bold = css`
  ${caption2Regular}
  font-weight: 600;
`;

export default styled.span`
  ${(props) => (props.bold ? caption2Bold : caption2Regular)}
`;
