import React from "react";
import styled from "styled-components";
import search from "../../icons/search.svg";
import notification from "../../icons/notification.svg";
import newNotification from "../../icons/newNotification.svg";
import divider from "../../icons/divider.svg";

const IconRow = styled.div`
  display: flex;
  align-items: center;
`;
export const Notification = styled.div`
  position: relative;
  width: fit-content;
  padding: 0 14px;
  :hover {
    cursor: pointer;
  }
`;

export const Bell = styled.div`
  position: absolute;
  top: -3px;
  right: -3px;
  padding: 0 14px;
`;

export const SearchIcon = styled.img`
  padding: 4px 14px;
  :hover {
    cursor: pointer;
  }
`;

const Divider = styled.div`
  padding: 0 14px;
  @media (max-width: 425px) {
    display: none;
  }
`;
function Icons() {
  return (
    <IconRow>
      <SearchIcon src={search} alt="search on page" role="presentation" />
      <Notification>
        <img src={notification} alt="notification" role="presentation" />
        <Bell>
          <img
            src={newNotification}
            alt="new notification"
            role="presentation"
          />
        </Bell>
      </Notification>
      <Divider>
        <img
          src={divider}
          alt="Divider for separating buttons"
          role="presentation"
        />
      </Divider>
    </IconRow>
  );
}

export default Icons;
