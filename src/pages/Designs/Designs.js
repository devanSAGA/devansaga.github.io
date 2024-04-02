import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

import PageContainer from '../../components/PageContainer/PageContainer';
import { DESIGNS_MANIFEST, DESIGNS_OF_ILLUSTRATIONS_CATEGORY, DESIGNS_OF_PUNS_CATEGORY } from './designs-manifest';

const GallaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
`;

const CardStack = styled.div``;

const StyledGallaryItem = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 16px;
  box-shadow:
    1px 2px 2px rgba(0, 0, 0, 0.2),
    2px 4px 4px rgba(0, 0, 0, 0.2),
    4px 8px 8px rgba(0, 0, 0, 0.2);
  transition: transform 200ms linear;
  z-index: 2;
  height: 320px;

  & img {
    height: 100%;
    width: 100%;
    border-radius: 16px;
    object-fit: cover;
    filter: brightness(0.5);
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    
    img {
      filter: brightness(1);
    }
  }
`;

const ImgBottomBlur = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)) rgba(0, 0, 0, 0);
  border-radius: 16px;
  opacity: 0.5;
`;

const ImgInfo = styled.div`
  position: absolute;
  justify-content: flex-start;
  align-items: flex-end;
  display: inline-flex;
  width: 100%;
  padding: 12px 16px;
  bottom: 0;
  border-radius: 16px;

  h3 {
    color: ${(props) => props.theme['content-color-primary']};
    font-family: ${(props) => props.theme['font-family-secondary']};
    font-size: ${(props) => props.theme['font-size-l']};
    line-height: 1.2;
    text-align: left;
  }
`;


const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0px 48px 0px;

  & .category__title {
    width: fit-content;
    color: ${(props) => props.theme['content-color-primary']};
    font-family: ${(props) => props.theme['font-family-secondary']};
    font-size: ${(props) => props.theme['font-size-m']};
    line-height: 1;
    padding: 8px;
    margin-bottom: 8px;
    border: 1px solid #3c3c3c;
    border-radius: 12px;
  }

  & .category__desc {
    font-family: ${(props) => props.theme['font-family-primary']};
    font-size: ${(props) => props.theme['font-size-s']};
    line-height: 20px;
    color: ${(props) => props.theme['content-color-secondary']};
  }
`;

function Category(props) {
  const { title, desc, children } = props;

  return (
    <div>
      <CategoryContainer>
        {title && <span className='category__title'>{title}</span>}
        {desc && <span className='category__desc'>{desc}</span>}
        {children}
      </CategoryContainer>
    </div>
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
    </CardStack>
  );
}

function Designs() {
  return (
    <PageContainer title="Designs">
      <Category
        title='Puns'
      >
        <GallaryGrid>
          {Object.keys(DESIGNS_MANIFEST)
            .filter((seriesName) => DESIGNS_OF_PUNS_CATEGORY.includes(seriesName))
            .map((seriesName, index) => {
            const {
              path,
              title,
              coverImage,
              coverImageAlt
            } = DESIGNS_MANIFEST[seriesName];
            return (
              <NavLink exact to={path} key={index}>
                <GallaryItem
                  title={title}
                  imgSrc={coverImage}
                  imgAlt={coverImageAlt}
                />
              </NavLink>
            );
          })}
        </GallaryGrid>
      </Category>
      <Category
        title='Illustrations'
      >
        <GallaryGrid>
          {Object.keys(DESIGNS_MANIFEST)
            .filter((seriesName) => DESIGNS_OF_ILLUSTRATIONS_CATEGORY.includes(seriesName))
            .map((seriesName, index) => {
            const {
              path,
              title,
              coverImage,
              coverImageAlt
            } = DESIGNS_MANIFEST[seriesName];
            return (
              <NavLink exact to={path} key={index}>
                <GallaryItem
                  title={title}
                  imgSrc={coverImage}
                  imgAlt={coverImageAlt}
                />
              </NavLink>
            );
          })}
        </GallaryGrid>
      </Category>
    </PageContainer>
  );
}

export default Designs;