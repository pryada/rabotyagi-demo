import React from "react";

const SearchIcon = ({ width = 15, height = 15, fill = "#1D3557", className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M6.5 12.5C7.8845 12.5 9.15725 12.0238 10.1728 11.234L13.4698 14.531L14.5303 13.4705L11.2333 10.1735C12.0238 9.15725 12.5 7.8845 12.5 6.5C12.5 3.19175 9.80825 0.5 6.5 0.5C3.19175 0.5 0.5 3.19175 0.5 6.5C0.5 9.80825 3.19175 12.5 6.5 12.5ZM6.5 2C8.98175 2 11 4.01825 11 6.5C11 8.98175 8.98175 11 6.5 11C4.01825 11 2 8.98175 2 6.5C2 4.01825 4.01825 2 6.5 2Z"
            fill={fill}
        />
    </svg>
);

export { SearchIcon };
