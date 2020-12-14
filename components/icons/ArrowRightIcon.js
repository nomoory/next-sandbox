const ArrowRightIcon = ({
  width = 32,
  height = 32,
  color = "black",
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
      d="M18 6L16.57 7.393L24.15 15H4V17H24.15L16.57 24.573L18 26L28 16L18 6Z"
      fill={color}
    />
  </svg>
);

export default ArrowRightIcon;
