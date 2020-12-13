import styled, { css } from "styled-components";

export const bodyRegular = css`
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  line-height: 28px;
  letter-spacing: 0em;
  font-weight: 400;
  color: inherit;
`;

export const bodyBold = css`
  ${bodyRegular}
  font-weight: 600;
`;

export default styled.span`
  ${(props) => (props.bold ? bodyBold : bodyRegular)}
`;
