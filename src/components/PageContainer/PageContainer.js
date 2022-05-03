import React from 'react';
import styled from 'styled-components';

const StyledPageContainer = styled.div`
  margin-top: 64px;
  width: 100%;
`;

const PageHeading = styled.h1`
  width: 100%;
  text-align: left;
  color: #212121;
  font-size: 3.2rem;
  font-weight: bold;
  margin-bottom: 32px; 
`;

export default function PageContainer(props) {
  const { children, title } = props;
  return(
    <StyledPageContainer>
      <PageHeading>{title}</PageHeading>
      {children}
    </StyledPageContainer>
  );  
}