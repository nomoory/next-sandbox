export default ({ width = 24, height = 24, color = "#F7F7F7", style = {} }) => (
  <svg
    style={style}
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <path
        d="M21.0299 14.75H8.8155L9.08821 16.125H20.2723C20.914 16.125 21.3896 16.7395 21.2474 17.3848L21.0175 18.4279C21.7963 18.8178 22.3333 19.641 22.3333 20.5938C22.3333 21.9345 21.27 23.0191 19.9657 22.9997C18.723 22.9813 17.7011 21.9414 17.6675 20.6602C17.6492 19.9604 17.9211 19.3261 18.3677 18.875H9.63233C10.0647 19.3118 10.3333 19.9203 10.3333 20.5938C10.3333 21.9607 9.228 23.0615 7.88875 22.9973C6.69958 22.9404 5.73246 21.9495 5.66996 20.7236C5.62171 19.7768 6.10479 18.9423 6.83875 18.507L3.91179 3.75H1C0.447708 3.75 0 3.2883 0 2.71875V2.03125C0 1.4617 0.447708 1 1 1H5.27204C5.74708 1 6.15654 1.34465 6.25175 1.82457L6.63367 3.75H22.9996C23.6413 3.75 24.1169 4.3645 23.9747 5.0098L22.005 13.9473C21.9015 14.4168 21.4968 14.75 21.0299 14.75ZM16.7929 9.25H15V6.67188C15 6.38712 14.7761 6.15625 14.5 6.15625H13.5C13.2239 6.15625 13 6.38712 13 6.67188V9.25H11.2071C10.7617 9.25 10.5386 9.80541 10.8536 10.1302L13.6465 13.0104C13.8417 13.2117 14.1583 13.2117 14.3536 13.0104L17.1465 10.1302C17.4614 9.80541 17.2383 9.25 16.7929 9.25Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="24" height="22" fill="white" transform="translate(0 1)" />
      </clipPath>
    </defs>
  </svg>
);
