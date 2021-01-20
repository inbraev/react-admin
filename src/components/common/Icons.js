import React from "react";
import styled from "styled-components";
const IconRow = styled.div`
  display: flex;
  align-items: center;
`;
export const Notification = styled.div`
  position: relative;
  width: fit-content;
  padding: 0 14px;
`;
export const Bell = styled.div`
  position: absolute;
  top: -7px;
  right: -3px;
  padding: 0 14px;
`;
export const SearchIcon = styled.div`
  padding: 0 14px;
`;
const Divider = styled.div`
  padding: 0 14px;
`;
function Icons() {
  return (
    <IconRow>
      <SearchIcon>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="6.5"
            cy="6.5"
            r="5.75"
            stroke="#C5C7CD"
            strokeWidth="1.5"
          />
          <path
            d="M11 11L15 15"
            stroke="#C5C7CD"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </SearchIcon>
      <Notification>
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.99999 16C8.10374 16 8.99905 15.1047 8.99905 14H5.00093C5.00093 15.1047 5.89624 16 6.99999 16ZM13.7309 11.3216C13.1272 10.6728 11.9975 9.69687 11.9975 6.5C11.9975 4.07188 10.295 2.12812 7.99937 1.65125V1C7.99937 0.447812 7.55187 0 6.99999 0C6.44812 0 6.00062 0.447812 6.00062 1V1.65125C3.70499 2.12812 2.00249 4.07188 2.00249 6.5C2.00249 9.69687 0.872804 10.6728 0.269054 11.3216C0.0815536 11.5231 -0.00157141 11.7641 -8.9117e-06 12C0.00342859 12.5125 0.405616 13 1.00312 13H12.9969C13.5944 13 13.9969 12.5125 14 12C14.0016 11.7641 13.9184 11.5228 13.7309 11.3216Z"
            fill="#C5C7CD"
          />
        </svg>

        <Bell>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="5"
              cy="5"
              r="3.75"
              fill="#3751FF"
              stroke="#F7F8FC"
              strokeWidth="1.5"
            />
          </svg>
        </Bell>
      </Notification>
      <Divider>
        <svg
          width="2"
          height="32"
          viewBox="0 0 2 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 0V32" stroke="#DFE0EB" />
        </svg>
      </Divider>
    </IconRow>
  );
}

export default Icons;
