const ArrowBottomIcon = ({
  width = 28,
  height = 28,
  color = "#1C1D23",
  style = {},
}) => (
  <svg
    style={style}
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 12.2535L14 19.25L7 12.2535L8.75 10.5L14 15.7517L19.25 10.5L21 12.2535Z"
      fill={color}
    />
  </svg>
);

export default ArrowBottomIcon;
