import React from "react";

const closeIcon = () => {
  return (
    <svg className="hidden">
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 12 13"
        id="close12"
      >
        <g clip-path="url(#dra)">
          <path
            d="M1.214 2.21a.9.9 0 0 1 1.273 0L6 5.726 9.514 2.21a.9.9 0 0 1 1.273 1.273L7.273 6.997l3.514 3.514a.9.9 0 1 1-1.273 1.273L6.001 8.27l-3.514 3.514a.9.9 0 1 1-1.273-1.273l3.514-3.513-3.514-3.514a.9.9 0 0 1 0-1.273Z"
            fill="#1f2937"
            fill-opacity=".92"
          />
        </g>
        <defs>
          <clipPath id="dra">
            <path fill="#fff" transform="translate(0 .998)" d="M0 0h12v12H0z" />
          </clipPath>
        </defs>
      </symbol>
    </svg>
  );
};

export default closeIcon;
