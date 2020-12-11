import styled, { css } from "styled-components";

export const subtitleRegular = css`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 31.5px;
  color: #000000;
  font-weight: 400;
`;

export const subtitleBold = css`
  ${subtitleRegular}
  font-weight: 600;
`;

export default styled.div`
  ${(props) => (props.bold ? subtitleBold : subtitleRegular)}
`;
