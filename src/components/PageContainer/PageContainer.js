import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import BackArrowIcon from '../../icons/BackArrowIcon';

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
`;

const BackButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: ${(props) => props.theme['border-radius-max']};
  background-color: transparent;
  padding: 4px 12px 4px 8px;
  color: ${(props) => props.theme['content-color-primary']};
  font-size: ${(props) => props.theme['content-color-primary']};
  line-height: 20px;

  svg {
    margin-right: 4px;
  }

  svg path {
    fill: ${(props) => props.theme['content-color-primary']};
  }

  &:hover {
    background: rgba(255, 255, 255, .1);
    backdrop-filter: blur(15px);
  }
`;

function PageContainer(props) {
  const { children, title, history, showBackButton = false } = props;

  const handleBackButtonClick = () => {
    history.goBack();
  }

  return(
    <StyledPageContainer>
      {showBackButton ? (
        <BackButton onClick={handleBackButtonClick}>
          <BackArrowIcon />
          Back
        </BackButton>
      ) : null}
      <h1 className='page-container__heading'>{title}</h1>
      {children}
    </StyledPageContainer>
  );  
}

export default withRouter(PageContainer);