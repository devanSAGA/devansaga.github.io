import React from 'react';
import styled from 'styled-components';

const StyledPageContainer = styled.div`
  margin: 64px 0;
  width: 100%;

  h1, p {
    width: 100%;
    text-align: left;
  }

  & .page-container__heading {
    color: ${(props) => props.theme['content-color-primary']};
    font-family: ${(props) => props.theme['font-family-pageHeading']};
    font-size: ${(props) => props.theme['font-size-xxl']};
    opacity: 0.3;
    margin-bottom: 16px;
  }

  p {
    color: ${(props) => props.theme['content-color-primary']};
    font-size: ${(props) => props.theme['font-size-m']};
    line-height: 32px;
    margin-bottom: 24px;
  }
`;

export default function PageContainer(props) {
  const { children, title } = props;
  return(
    <StyledPageContainer>
      <h1 className='page-container__heading'>{title}</h1>
      {children}
    </StyledPageContainer>
  );  
}