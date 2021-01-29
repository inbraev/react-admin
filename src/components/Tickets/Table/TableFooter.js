import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  height: 38px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const PaginationSpan = styled.span`
  color: ${(props) => (props.darkGrey ? "#4B506D" : "#9FA2B4")};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.3px;
`;
const Icon = styled.button`
  margin-left: ${(props) => props.marginLeft};
  margin-top: ${(props) => props.marginTop};
  background: #fff;
  :hover {
    cursor: pointer;
  }
`;
function TableFooter() {
  return (
    <Footer>
      <PaginationSpan>Rows per page:</PaginationSpan>
      <PaginationSpan darkGrey>8</PaginationSpan>
      <Icon marginLeft="8px">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.98357 4.5H9.01404C9.43123 4.5 9.63982 5.00391 9.34451 5.29922L6.33045 8.31562C6.14763 8.49844 5.84998 8.49844 5.66717 8.31562L2.6531 5.29922C2.35779 5.00391 2.56638 4.5 2.98357 4.5Z"
            fill="#9FA2B4"
          />
        </svg>
      </Icon>
      <PaginationSpan>1-8 of 1240</PaginationSpan>
      <Icon marginLeft="27px" marginTop="3px">
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 13L1.07071 7.07071C1.03166 7.03166 1.03166 6.96834 1.07071 6.92929L7 1"
            stroke="#9FA2B4"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </Icon>
      <Icon marginLeft="20px" marginTop="3px">
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 13L6.92929 7.07071C6.96834 7.03166 6.96834 6.96834 6.92929 6.92929L1 1"
            stroke="#9FA2B4"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </Icon>
    </Footer>
  );
}

export default TableFooter;
