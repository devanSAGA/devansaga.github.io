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

  & .page-container__headings {
    margin: 16px 0px;
    color: ${(props) => props.theme['content-color-tertiary']};
    font-family: ${(props) => props.theme['font-family-pageHeading']};
    line-height: 1;

    &--main {
      font-size: ${(props) => props.theme['font-size-xxl']};
    }
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
  background: rgba(255, 255, 255, .1);
  padding: 6px;
  color: ${(props) => props.theme['content-color-primary']};
  font-size: ${(props) => props.theme['content-color-primary']};
  line-height: 20px;
  transition: box-shadow 0.3s ease;

  svg path {
    fill: ${(props) => props.theme['content-color-primary']};
  }

  &:hover {
    background: rgba(255, 255, 255, .1);
    backdrop-filter: blur(15px);
    box-shadow: 0 0 0 2px #505050;
  }
`;

function PageContainer(props) {
  const { children, title: heading, history, showBackButton = false } = props;

  const handleBackButtonClick = () => {
    history.goBack();
  }

  return(
    <StyledPageContainer>
      {showBackButton ? (
        <BackButton onClick={handleBackButtonClick}>
          <BackArrowIcon />
        </BackButton>
      ) : null}
      <div className='page-container__headings'>
        {heading ? <h1 className='page-container__headings--main'>{heading}</h1> : null}
      </div>
      {children}
    </StyledPageContainer>
  );  
}

export default withRouter(PageContainer);