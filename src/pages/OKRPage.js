import React from "react";
import styled from "styled-components";
import Emoji from "../components/Emoji/Emoji";
import {
  KeyResultListItem,
  InitiativeListItem,
  InitiativesList,
} from "../components/KeyResultListItem";

const PageContainer = styled.div`
  margin-bottom: 128px;
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
  width: 100%;
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
  color: #0265d2;

  &:hover {
    text-decoration: underline;
  }
`;

function OKRPage() {
  return (
    <PageContainer>
      <PageHeadingH1>2022: Goals and Intentions</PageHeadingH1>
      <PageText>
        2021 was a good year for me. I achieved a few milestones and also missed some.
        I have realized that, I would have been able to work better if
        I had planned and prioritized my actions better. Keeping in mind the
        learnings, this year, I am experimenting a more structured way of
        defining my goals and intentions for 2022.
      </PageText>
      <PageDivider />
      <PageHeadingH2>Q1 </PageHeadingH2>
      <PageHeadingH3>
        Wellness <Emoji ariaLabel="muscle-emoji" emoji="💪" />
      </PageHeadingH3>
      <KeyResultList>
        <KeyResultListItem label="180km Cycling" />
        <KeyResultListItem label="180km Walking" />
        <KeyResultListItem label="Play badminton for at least 25 days" />
        <KeyResultListItem label="Achieve 5km in 40mins" />
        <KeyResultListItem label="Reduce mobile screen time to 2hrs" />
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
        />
        <KeyResultListItem label="Write and publish 5 blog posts" />
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
        />
      </KeyResultList>
      <PageHeadingH3>
        Skills <Emoji ariaLabel="juggling-person-emoji" emoji="🤹‍♂️" />
      </PageHeadingH3>
      <KeyResultList>
        <KeyResultListItem label="Get 2-wheeler driving license" />
        <KeyResultListItem label="Get the driving license for car" />
        <KeyResultListItem label="Learn Swimming" />
        <KeyResultListItem label="Learn Procreate" />
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
        />
        <KeyResultListItem label="Read 3 books">
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
        <KeyResultListItem label="Kickstart the Dribbble profile" />
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
        >
          <InitiativesList>
            <InitiativeListItem label="Add my Designs and Illustrations cataog to the website" />
            <InitiativeListItem label="Add Strava Insights to the website" />
          </InitiativesList>
        </KeyResultListItem>
      </KeyResultList>
    </PageContainer>
  );
}

export default OKRPage;
