import styled, { css } from "styled-components";

export const caption2Regular = css`
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
  font-weight: 400;
`;

export const caption2Bold = css`
  ${caption2Regular}
  font-weight: 600;
`;

export default styled.div`
  ${(props) => (props.bold ? caption2Bold : caption2Regular)}
`;
