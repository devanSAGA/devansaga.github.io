import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CardHeading = styled.div`
  font-family: ${(props) => props.theme['font-family-pageHeading']};
  width: 100%;

  .dashboard-card__heading {
    display: inline-block;
    margin: 0;
    font-size: ${(props) => props.theme['font-size-l']};
    font-weight: ${(props) => props.theme['font-weight-strong']};
    color: ${(props) => props.theme['content-color-primary']};
    line-height: 24px;
  }

  .dashboard-card__subheading {
    display: inline-block;
    color: ${(props) => props.theme['content-color-secondary']};
    font-size: ${(props) => props.theme['font-size-s']};
    ${(props) => {
      if (props.subHeadingPosition === 'bottom') {
        return `
          display: block;
        `;
      }

      return `margin-left: 4px;`;
    }}
  }
`;

const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  width: 100%;
  color: ${(props) => props.theme[`${props.brand}-primary-color`]};
  font-family: ${(props) => props.theme['font-family-primary']};
  font-weight: ${(props) => props.theme['font-weight-strong']};
  font-size: ${(props) => props.theme['font-size-l']};
  line-height: 24px;

  a {
    color: ${(props) => props.theme[`${props.brand}-primary-color`]};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }

  .dashboard-card__content {
    display: flex;
    flex-grow: 1;
    height: 100%;
    width: calc(100% - 32px);

    &--text {
      justify-content: flex-start;
      align-self: flex-end;
      width: 100%;
    }
  }

  .dashboard-card__metaIcon {
    display: flex;
    align-self: flex-end;
    margin-left: 4px;
  }
`;

const StyledDashboardCard = styled.div`
  display: flex;
  height: ${(props) => props.height};
  border-radius: 16px;
  padding: 12px;
  border: 4px solid ${(props) => props.theme[`${props.brand}-primary-color`]};
`;

function DashboardCard(props) {
  const {
    heading,
    subHeading,
    subHeadingPosition,
    content,
    metaIcon,
    brand,
    height,
    children,
    className,
 } = props;

  return (
    <StyledDashboardCard className={className} brand={brand} height={height}>
      {children ? children : (
        <CardContainer>
          <CardHeading subHeadingPosition={subHeadingPosition}>
            <h2 className='dashboard-card__heading'>{heading}</h2>
            <span className='dashboard-card__subheading'>{subHeading}</span>
          </CardHeading>
          <CardContent brand={brand}>
            <div className='dashboard-card__content'>
              <span className='dashboard-card__content--text'>{content}</span>
            </div>
            <div className='dashboard-card__metaIcon'>{metaIcon}</div>
          </CardContent>
        </CardContainer>
      )}
    </StyledDashboardCard> 
  );
}

DashboardCard.defaultProps = {
  subHeadingPosition: 'right',
  height: '200px'
};

export default DashboardCard;