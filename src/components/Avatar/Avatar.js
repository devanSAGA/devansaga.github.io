import React from "react";
import styled from 'styled-components';
import AvatarIllustration from '../../assets/myAvatar.png';

const StyledAvatar = styled.img`
  height: 300px;

  @media (max-width: 468px) {
    height: 240px;
  }
`;

function Avatar() {
  return (
    <StyledAvatar
      src={AvatarIllustration}
      title="Avatar"
      alt="avatar-illustration"
    />
  );
}

export default Avatar;