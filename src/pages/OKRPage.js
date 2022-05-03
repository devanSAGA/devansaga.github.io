import React from "react";
import styled from "styled-components";
import Emoji from "../components/Emoji/Emoji";
import ToggleSwitch from "../components/ToggleSwitch/ToggleSwitch";
import {
  KeyResultListItem,
  InitiativeListItem,
  InitiativesList,
} from "../components/KeyResultListItem";
import ConfettiButton from "../components/ConfettiButton/ConfettiButton";

const PageContainer = styled.div`
  margin-bottom: 128px;
`;

const PageHeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ShowProgressLabel = styled.div`
  display: flex;
  align-items: center;

  span {
    display: inline-block;
    margin-right: 8px;
    color: #212121;
    font-size: 1.4rem;
    font-weight: bold;
  }
`;

const PageHeadingH1 = styled.h1`
  width: 100%;
  text-align: left;
  color: #212121;
  font-size: 3.2rem;
  font-weight: bold;
  margin-top: 64px;
  margin-bottom: 32px;
`;

const PageHeadingH2 = styled.h2`
  text-align: left;
  color: #212121;
  font-size: 2.4rem;
  font-weight: bold;
  margin: 24px 0px;
`;

const PageHeadingH3 = styled.h3`
  width: 100%;
  text-align: left;
  color: #212121;
  font-size: 2rem;
  font-weight: bold;
  margin: 16px 0px;
`;

const PageText = styled.p`
  width: 100%;
  text-align: left;
  color: #686868;
  font-size: 1.6rem;
  line-height: 1.5;
  margin-bottom: 24px;
`;

const PageDivider = styled.hr`
  border: none;
  border-bottom: 1px solid #e6e6e6;
  margin: 8px 0px;
  width: 100%;
`;

const KeyResultList = styled.ul`
  width: 100%;
  margin-bottom: 16px;
  & > :not(:last-child) {
    margin-bottom: 8px;
  }

  & > :last-child {
    margin-bottom: 32px;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: ${(props) => (props.color ? props.color : "#0265d2")};

  &:hover {
    text-decoration: underline;
  }
`;

const StickyFooter = styled.div`
  position: fixed;
  z-index: 2;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


function OKRPage() {
  const [showProgress, setShowProgress] = React.useState(false);

  const toggleShowProgress = () => {
    setShowProgress((prevState) => !prevState);
  };

  return (
    <PageContainer>
      <PageHeadingH1>2022: Goals and Intentions</PageHeadingH1>
      <PageText>
        2021 was a good year for me. I achieved a few milestones and also missed
        some. I have realized that, I would have been able to work better if I
        had planned and prioritized my actions better. Keeping in mind the
        learnings, this year, I am experimenting a more structured way of
        defining my goals and intentions for 2022.
      </PageText>
      <PageDivider />
      <PageHeadingContainer>
        <PageHeadingH2>Q1 [Jan-April]</PageHeadingH2>
        <ShowProgressLabel>
          <span>Show Progress</span>
          <ToggleSwitch
            isChecked={showProgress}
            onChange={toggleShowProgress}
          />
        </ShowProgressLabel>
      </PageHeadingContainer>
      <PageHeadingH3>
        Wellness <Emoji ariaLabel="muscle-emoji" emoji="💪" />
      </PageHeadingH3>
      <KeyResultList>
        <KeyResultListItem
          label="240km Cycling"
          progress={{ current: 272, target: 240, unit: "km" }}
          status="done"
        />
        <KeyResultListItem
          label="240km Walking"
          progress={{ current: 250, target: 240, unit: "km" }}
          status="done"
        />
        <KeyResultListItem
          label="Play badminton for at least 25 days"
          progress={{ current: 2, target: 25, unit: "Days" }}
          showProgress={showProgress}
        />
        <KeyResultListItem
          label="Achieve 5km in 40mins"
          status="done"
        />
        <KeyResultListItem
          label="Reduce mobile screen time to 2hrs"
          showProgress={showProgress}
        />
      </KeyResultList>
      <PageHeadingH3>
        Tech Learnings <Emoji ariaLabel="person-with-laptop-emoji" emoji="👨‍💻" />
      </PageHeadingH3>
      <KeyResultList>
        <KeyResultListItem
          label={
            <div>
              <span>Complete&nbsp;</span>
              <StyledLink
                href="https://css-for-js.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                css-for-js.dev
              </StyledLink>
              <span>&nbsp;course</span>
            </div>
          }
          progress={{ current: 1, target: 10, unit: "Modules" }}
          showProgress={showProgress}
        />
        <KeyResultListItem
          label={
            <div>
              <span>Complete&nbsp;</span>
              <StyledLink
                href="https://javascript.info/ui"
                target="_blank"
                rel="noopener noreferrer"
              >
                Browser: Document, Events, Interfaces
              </StyledLink>
              <span>&nbsp;section</span>
            </div>
          }
          progress={{ current: 1, target: 6, unit: "Modules" }}
          showProgress={showProgress}
        />
        <KeyResultListItem
          label="Write and publish 3 blog posts"
          progress={{ current: 0, target: 3, unit: "Posts" }}
          showProgress={showProgress}
        />
      </KeyResultList>
      <PageHeadingH3>
        Travelling <Emoji ariaLabel="plane-emoji" emoji="✈️" />
      </PageHeadingH3>
      <KeyResultList>
        <KeyResultListItem
          status="done"
          label={
            <div>
              <span>Climb the&nbsp;</span>
              <StyledLink
                href="https://en.wikipedia.org/wiki/Pavagadh"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pavaghadh mountain
              </StyledLink>
            </div>
          }
          showProgress={showProgress}
        />
        <KeyResultListItem
          label={
            <div>
              <span>Do the&nbsp;</span>
              <StyledLink
                href="https://en.wikipedia.org/wiki/Kedarkantha"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kedarkantha trek
              </StyledLink>
            </div>
          }
          showProgress={showProgress}
        />
      </KeyResultList>
      <PageHeadingH3>
        Skills <Emoji ariaLabel="juggling-person-emoji" emoji="🤹‍♂️" />
      </PageHeadingH3>
      <KeyResultList>
        <KeyResultListItem
          label="Get 2-wheeler driving license"
          showProgress={showProgress}
        />
        <KeyResultListItem
          label="Get the driving license for car"
          showProgress={showProgress}
        />
        <KeyResultListItem label="Learn Swimming" showProgress={showProgress} />
        <KeyResultListItem label="Learn Procreate" showProgress={showProgress}>
          <InitiativesList>
            <InitiativeListItem
              label={
                <StyledLink
                  href="https://www.skillshare.com/classes/Digital-Illustration-Learn-to-Use-Procreate/971736290?via=search-layout-grid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Course: Learn to Use Procreate
                </StyledLink>
              }
              status="done"
            />
            <InitiativeListItem
              label={
                <StyledLink
                  href="https://www.skillshare.com/classes/Hand-Lettering-in-Procreate-Fundamentals-to-Finishing-Touches/1749196794?via=search-layout-grid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Course: Hand Lettering in Procreate
                </StyledLink>
              }
            />
            <InitiativeListItem
              label={
                <StyledLink
                  href="https://www.skillshare.com/classes/Digital-Marbling-Create-Stunning-Abstract-Art-in-Procreate/559162226?via=search-layout-grid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Course: Creating Abstract Art in Procreate
                </StyledLink>
              }
            />
          </InitiativesList>
        </KeyResultListItem>
      </KeyResultList>
      <PageHeadingH3>
        Reading <Emoji ariaLabel="book-emoji" emoji="📖" />
      </PageHeadingH3>
      <KeyResultList>
        <KeyResultListItem
          label={
            <div>
              <span>Complete&nbsp;</span>
              <StyledLink
                href="https://zerodha.com/varsity/module/personalfinance/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Personal Finance Module from Varsity
              </StyledLink>
            </div>
          }
          progress={{ current: 5, target: 30, unit: "Modules" }}
          showProgress={showProgress}
        />
        <KeyResultListItem label="Read 3 books" showProgress={showProgress}>
          <InitiativesList>
            <InitiativeListItem
              label={
                <StyledLink
                  href="https://www.goodreads.com/book/show/16299.And_Then_There_Were_None"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  And Then There Were None
                </StyledLink>
              }
            />
            <InitiativeListItem
              label={
                <StyledLink
                  href="https://www.goodreads.com/book/show/29939161-radical-candor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Radical Candor
                </StyledLink>
              }
            />
            <InitiativeListItem
              label={
                <StyledLink
                  href="https://www.goodreads.com/en/book/show/41940285-user-friendly"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  User Friendly
                </StyledLink>
              }
            />
          </InitiativesList>
        </KeyResultListItem>
      </KeyResultList>
      <PageHeadingH3>
        Fun <Emoji ariaLabel="party-face-emoji" emoji="🥳" />
      </PageHeadingH3>
      <KeyResultList>
        <KeyResultListItem
          label="Kickstart the Dribbble profile"
          showProgress={showProgress}
        />
        <KeyResultListItem
          label={
            <div>
              <span>Build&nbsp;</span>
              <StyledLink
                href="https://devanshpurohit.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Personal Website
              </StyledLink>
            </div>
          }
          showProgress={showProgress}
        >
          <InitiativesList>
            <InitiativeListItem label="Add my Designs and Illustrations cataog to the website" />
            <InitiativeListItem label="Add Strava Insights to the website" />
          </InitiativesList>
        </KeyResultListItem>
      </KeyResultList>
      <StickyFooter>
        <ConfettiButton text="Shabash Devansh" />
      </StickyFooter>
    </PageContainer>
  );
}

export default OKRPage;
