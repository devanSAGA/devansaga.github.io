import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

import PageContainer from '../../components/PageContainer/PageContainer';
import NarutoSeriesCoverImage from '../../assets/designs/naruto/Jiraiya.jpg';

const GallaryGrid = styled.div`
  display: grid;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 24px;
`;

const CardStack = styled.div`
  position: relative;

  .card {
    position: absolute;
    transform-origin: bottom center;
    height: 400px;
    width: 100%;
    border-radius: 8px;
    transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .placeholder-card:nth-child(2) {
    transform: rotate(4deg);
  }

  .placeholder-card:nth-child(3) {
    transform: rotate(-4deg);
  }

  &:hover {
    .placeholder-card:nth-child(2) {
      transform: rotate(8deg);
    }

    .placeholder-card:nth-child(3) {
      transform: rotate(-8deg);
    } 
  }
`;

const StyledGallaryItem = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow:
    1px 2px 2px rgba(0, 0, 0, 0.2),
    2px 4px 4px rgba(0, 0, 0, 0.2),
    4px 8px 8px rgba(0, 0, 0, 0.2);
  transition: transform 200ms linear;
  z-index: 2;

  & img {
    height: 100%;
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

const ImgBottomBlur = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 200px;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)) rgba(0, 0, 0, 0);
  padding: 2rem 1.5rem 1.5rem;
  border-radius: 8px;
  opacity: 0.4;
`;

const ImgInfo = styled.div`
  position: absolute;
  justify-content: center;
  align-items: flex-end;
  display: inline-flex;
  width: 100%;
  padding: 12px 16px;
  bottom: 0;

  h3 {
    color: ${(props) => props.theme['content-color-primary']};
    font-family: ${(props) => props.theme['font-family-secondary']};
    font-size: ${(props) => props.theme['font-size-l']};
    line-height: 1.2;
  }
`;

const DummyGallaryItem = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0px;

  & .category__title {
    font-family: ${(props) => props.theme['font-family-secondary']};
    font-size: ${(props) => props.theme['font-size-l']};
    color: ${(props) => props.theme['content-color-primary']};
  }

  & .category__desc {
    margin-bottom: 48px;
    font-family: ${(props) => props.theme['font-family-primary']};
    font-size: ${(props) => props.theme['font-size-s']};
    line-height: 20px;
    color: ${(props) => props.theme['content-color-secondary']};
  }
`;

function Category(props) {
  const { title, desc, children } = props;

  return (
    <CategoryContainer>
      {title && <h3 className='category__title'>{title}</h3>}
      {desc && <span className='category__desc'>{desc}</span>}
      {children}
    </CategoryContainer>
  );
}

function GallaryItem(props) {
  const { title, imgSrc, imgAlt } = props;

  return (
    <CardStack>
      <StyledGallaryItem className='card'>
        <img src={imgSrc} alt={imgAlt} />
        <ImgBottomBlur />
        <ImgInfo>
          {title && <h3>{title}</h3>}
        </ImgInfo>
      </StyledGallaryItem>
      <DummyGallaryItem className='card placeholder-card' />
      <DummyGallaryItem className='card placeholder-card' />
    </CardStack>
  );
}

function Designs() {
  return (
    <PageContainer title="Designs">
      <Category
        title='Posters and Illustrations'
        desc='Based on TV shows/Movies/Anime, where I have tried to follow a consistent design style for  series'
      >
        <GallaryGrid>
          <NavLink exact to='/designs/naruto'>
            <GallaryItem
              title='Naruto Series'
              desc=''
              imgSrc={NarutoSeriesCoverImage}
              imgAlt='The Naruto Series'
            />
          </NavLink>
        </GallaryGrid>
      </Category>
    </PageContainer>
  );
}

export default Designs;