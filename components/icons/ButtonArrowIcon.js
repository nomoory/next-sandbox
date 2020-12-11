export default ({ width = 24, height = 24, color = "white", style = {} }) => (
  <svg
    style={style}
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.0681 11.993L18.8181 7.75702L17.4061 9.17402L19.2411 11.004L0.932129 11V13L19.2371 13.002L17.4161 14.83L18.8321 16.242L23.0681 11.992V11.993Z"
      fill={color}
    />
  </svg>
);
