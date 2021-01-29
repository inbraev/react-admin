import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
const ProfileRow = styled.div`
  display: flex;
  align-items: center;
`;
const Span = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  @media (max-width: 425px) {
    display: none;
  }
`;

function Profile({ username, src }) {
  return (
    <ProfileRow>
      <Span>{username}</Span>
      <Avatar src={src} />
    </ProfileRow>
  );
}

export default Profile;
