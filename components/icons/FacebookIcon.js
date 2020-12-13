export default ({ width = 32, height = 32, color = "white", style = {} }) => (
  <svg
    style={style}
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M29 16.0805C29 8.85435 23.1768 3 16 3C8.81831 3 3 8.85435 3 16.0805C3 22.6077 7.75231 28.0198 13.9688 29V19.8624H10.6676V16.0813H13.9688V13.1979C13.9688 9.92042 15.9066 8.1104 18.8771 8.1104C20.2998 8.1104 21.7891 8.36547 21.7891 8.36547V11.5841H20.147C18.535 11.5841 18.0312 12.5937 18.0312 13.6279V16.0805H21.6363L21.057 19.8616H18.0312V28.9992C24.2428 28.019 29 22.6069 29 16.0797V16.0805Z"
      fill={color}
    />
  </svg>
);