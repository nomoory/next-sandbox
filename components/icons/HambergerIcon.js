export default ({ width = 32, height = 32, color = "black", style = {} }) => (
  <svg
    style={style}
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.3335 8H26.6668V10.6667H5.3335V8ZM5.3335 14.6667H26.6668V17.3333H5.3335V14.6667ZM5.3335 21.3333H26.6668V24H5.3335V21.3333Z"
      fill={color}
    />
  </svg>
);
