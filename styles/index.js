export const horizontal_gutter_desktop = 30;
export const vertical_gutter_desktop = 72;
export const gutters_desktop = [horizontal_gutter_desktop, vertical_gutter_desktop];
export const horizontal_gutter = 30;
export const vertical_gutter = 72;
export const gutters = [horizontal_gutter, vertical_gutter];

export const margin_mobile = 20;
export const margin_desktop = 40;

// ant design에서 사용하는 기준입니다. 
// 값 변경시 styled component에는 적용되나 ant design의 grid break point에는 적용되지 않습니다.
export const breakpoints = {
  xs: "480px",
  sm: "576px", // mainly used
  md: "768px", // mainly used
  lg: "992px",
  xl: "1200px", // mainly used
  xxl: "1600px"
};

export const mediaQueries = key => {
  return `@media (min-width: ${breakpoints[key]})`;
};

/* Example of using mediaQueries*/
/* const Example = styled.div`
  background-color: blue;
  ${mediaQueries("md")} {
    background-color: red;
  }
`; */
