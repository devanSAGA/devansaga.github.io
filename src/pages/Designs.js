import React from 'react';
import styled from 'styled-components';
import { NavLink, withRouter } from "react-router-dom";

import Link from '../components/Link/Link';
import RightArrowIcon from '../icons/RightArrowIcon';
import PageContainer from '../components/PageContainer/PageContainer';
import NarutoSeriesCoverImage from '../assets/designs/naruto/Jiraiya.jpg';

const INSTAGRAM_LINK = "https://www.instagram.com/_devansaga_/";

const GallaryGrid = styled.div`
  display: grid;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 24px;
`;

const StyledGallaryItem = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 8px;
  box-shadow:
    1px 2px 2px rgba(0, 0, 0, 0.2),
    2px 4px 4px rgba(0, 0, 0, 0.2),
    4px 8px 8px rgba(0, 0, 0, 0.2);
  transition: transform 200ms linear;

  & img {
    height: 400px;
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
    opacity: 0.7;
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
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.98)) rgba(0, 0, 0, 0);
  padding: 2rem 1.5rem 1.5rem;
  border-radius: 8px;
  opacity: 0.4;
`;

const ImgInfo = styled.div`
  position: absolute;
  justify-content: space-between;
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

const GlassMorphicButton = styled.button`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  height: 32px;
  padding: 0px 4px 0px 12px;
  border-radius: 999px;
  outline: none;
  background: rgba(0, 0, 0, .5);
  border: 1px solid hsla(0, 0%, 100%, .05);
  backdrop-filter: blur(12px);
  transition: all .2s ease;
  color: ${(props) => props.theme['content-color-primary']};
  line-height: 16px;
  cursor: pointer;

  & svg {
    margin-left: 4px;
  }

  &:hover {
    background: rgba(0, 0, 0, .4);
  }
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
    margin-bottom: 24px;
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
    <StyledGallaryItem>
      <img src={imgSrc} alt={imgAlt} />
      <ImgBottomBlur />
      <ImgInfo>
        {title && <h3>{title}</h3>}
        <GlassMorphicButton>
          Check <RightArrowIcon />
        </GlassMorphicButton>
      </ImgInfo>
    </StyledGallaryItem>
  );
}

function Designs() {
  return (
    <PageContainer title="Designs">
      <Category
        title='Posters and Illustrations'
        desc='Mostly based on my favourite TV shows/Movies/Anime. I have tried to follow a consistent design style each series'
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