import styled, { css } from "styled-components";

export const subtitleRegular = css`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 31.5px;
  font-weight: 400;
  text-align: inherit;
  color: inherit;
  word-break: keep-all;
`;

export const subtitleBold = css`
  ${subtitleRegular}
  font-weight: 600;
`;

export default styled.span`
  ${(props) => (props.bold ? subtitleBold : subtitleRegular)}
`;
