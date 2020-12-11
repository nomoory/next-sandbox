import styled, { css } from "styled-components";

export const caption1Regular = css`
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  line-height: 24.5px
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
  font-weight: 400;
`;

export const caption1Bold = css`
  ${caption1Regular}
  font-weight: 600;
`;

export default styled.div`
  ${(props) => (props.bold ? caption1Bold : caption1Regular)}
`;
