const ArrowRightGrayIcon = ({
  width = 20,
  height = 21,
  color = "#80828F",
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
      d="M8.7525 5.5L13.75 10.5L8.7525 15.5L7.5 14.25L11.2512 10.5L7.5 6.75L8.7525 5.5Z"
      fill={color}
    />
  </svg>
);

export default ArrowRightGrayIcon;
