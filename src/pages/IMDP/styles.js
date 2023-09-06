import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  width: 100%;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 12px;
`;


const BlankState = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  font-size: ${(props) => props.theme['font-size-xl']};
  color: ${(props) => props.theme['content-color-primary']};
  margin-top: 32px;
`;

const FilterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
  margin-bottom: 16px;
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

  @media (max-width: 459px ) {
    flex-direction: column;

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
  BlankState,
  IMDPLogoContainer,
  IMDPPageHeading,
  FilterSection,
  FilterDropdowns
};