export const horizontal_gutter_desktop = 30;
export const vertical_gutter_desktop = 30;
export const gutters_desktop = [
  horizontal_gutter_desktop,
  vertical_gutter_desktop,
];
export const horizontal_gutter_mobile = 30;
export const vertical_gutter_mobile = 24;
export const gutters = [horizontal_gutter_mobile, vertical_gutter_mobile];
export const gutter = {
  xs: horizontal_gutter_mobile,
  sm: horizontal_gutter_desktop,
  md: horizontal_gutter_desktop,
  lg: horizontal_gutter_desktop,
};

export const gutter_vertical = {
  xs: vertical_gutter_mobile,
  sm: vertical_gutter_desktop,
  md: vertical_gutter_desktop,
  lg: vertical_gutter_desktop,
};

export const side_padding_mobile = 20 - horizontal_gutter_mobile / 2;
export const side_padding_desktop = 40 - horizontal_gutter_desktop / 2;
export const header_height_mobile = 56;
export const header_height_desktop = 70;

// ant design에서 사용하는 기준입니다.
// 값 변경시 styled component에는 적용되나 ant design의 grid break point에는 적용되지 않습니다.
export const breakpoints = {
  xs: "480px",
  sm: "576px", // mainly used
  md: "768px", // mainly used
  lg: "992px",
  xl: "1200px", // mainly used
  xxl: "1600px",
};

export const mediaQueriesBiggerThan = (key) => {
  return `@media (min-width: ${breakpoints[key]})`;
};

/* Example of using mediaQueriesBiggerThan*/
/* const Example = styled.div`
  background-color: blue;
  ${mediaQueriesBiggerThan("md")} {
    background-color: red;
  }
`; */
