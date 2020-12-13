import styled, { css } from "styled-components";

export const caption1Regular = css`
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  line-height: 24.5px;
  letter-spacing: 0em;
  font-weight: 400;
  text-align: inherit;
  color: inherit;
  word-break: keep-all;
`;

export const caption1Bold = css`
  ${caption1Regular}
  font-weight: 600;
`;

export default styled.span`
  ${(props) => (props.bold ? caption1Bold : caption1Regular)}
`;
