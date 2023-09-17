import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  width: 100%;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 12px;
`;

const GridBottom = styled.div`
  z-index: -1;
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 120px;
  border: 1px solid transparent;
  border-top: 1px solid transparent;
  border-radius: 12px;
  margin-top: 24px;
  background: ${(props) => `padding-box linear-gradient(#161616, #161616),
    border-box linear-gradient(${props.theme['imdp-primary-color']}, ${props.theme['imdp-primary-color']})`};
`;

const InfoNote = styled.div`
  padding: 8px;
  margin: 48px auto;
  border-radius: 8px;
  width: 72%;
  font-size: 12px;
  color: ${(props) => props.theme['content-color-primary']};
  background-color: ${(props) => props.theme['imdp-primary-color']};
  text-align: center;

  @media (max-width: 459px ) {
    width: 100%;
  }
`;

const Section = styled.div`
  position: relative;
  margin: 32px auto;
`;

const MovieCardsContainer = styled.div`
  padding: 16px;
`;

const TVShowContainer = styled.div`
  padding: 16px;
`;

const BlankState = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 64px;

  ${(props) => props.showBorder && `
    border: 1px solid ${props.theme['imdp-primary-color']};
    border-radius: 8px;
  `};


  .blank-state_title {
    color: ${(props) => props.theme['content-color-primary']};
    font-size: ${(props) => props.theme['font-size-m']};
    font-family: ${(props) => props.theme['font-family-secondary']};
    line-height: 1.2;
  }

  .blank-state_desc {
    color: ${(props) => props.theme['content-color-secondary']};
    font-size: ${(props) => props.theme['font-size-s']};
    font-family: ${(props) => props.theme['font-family-secondary']};
  }
`;

const IMDPLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;

  img {
    height: 52px;
    width: 96px;
  }
`;

const IMDPPageHeading = styled.h1`
  display: flex;
  justify-content: center;
  font-family: ${(props) => props.theme['font-family-secondary']};
  font-size: ${(props) => props.theme['font-size-m']};
  color: ${(props) => props.theme['content-color-secondary']};
  margin: 8px 0px 64px 0px;

  @media (max-width: 459px ) {
    text-align: center !important;
  }
`;

const SectionHeading = styled.h1`
  display: flex;
  justify-content: center;
  font-family: ${(props) => props.theme['font-family-secondary']};
  font-size: ${(props) => props.theme['font-size-xl']};
  color: ${(props) => props.theme['content-color-primary']};
  margin: 16px 0px;
`;

const FilterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px;
  margin-top: 32px;
  margin-bottom: 16px;
  
  @media (max-width: 900px ) {
    flex-direction: column;

    & > div {
      margin-bottom: 32px;
    }
  }
`;

const FilterDropdowns = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;

  & > span {
    user-select: none;
    font-family: ${(props) => props.theme['font-family-secondary']};
    font-size: ${(props) => props.theme['font-size-xs']};
    color: ${(props) => props.theme['content-color-primary']};
    margin-right: 8px;
  }

  & > .filter-select-dropdown:not(:last-child) {
    margin-right: 8px;
  }

  @media (max-width: 900px ) {
    flex-direction: column;
    align-items: center;

    & > .filter-select-dropdown:not(:last-child) {
      margin-right: 0px;
    }

    & > *:not(:last-child) {
      margin-bottom: 8px;
    }
  }
`;

export {
  Grid,
  GridBottom,
  Section,
  MovieCardsContainer,
  TVShowContainer,
  BlankState,
  IMDPLogoContainer,
  SectionHeading,
  IMDPPageHeading,
  FilterSection,
  FilterDropdowns,
  InfoNote
};