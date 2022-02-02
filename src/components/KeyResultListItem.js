import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

function getStatusStyles(status) {
  switch (status) {
    case "done":
      return `
                background-color: #E5FFF1;
                border: 1px solid #007F31;
                color: #007F31;

                svg path {
                  fill: #007F31;
                }

                .key-result__list-item--status-icon {
                  border: 1px solid #007F31;
                }
            `;
    default:
      return `
                background-color: #F9F9F9;
                border: 1px solid #E6E6E6 ;

                .key-result__list-item--status-icon {
                  border: 1px solid #A6A6A6 ;
                }
            `;
  }
}

function renderStatusIcon(status) {
  if (status === "done") {
    return (
      <StyledStatusIcon className="key-result__list-item--status-icon">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.00004 9.7929L11.6465 5.14645L12.3536 5.85356L7.00004 11.2071L3.64648 7.85356L4.35359 7.14645L7.00004 9.7929Z"
            fill="#6B6B6B"
          />
        </svg>
      </StyledStatusIcon>
    );
  }
  return (
    <StyledStatusIcon className="key-result__list-item--status-icon">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle r="2" cx="8" cy="8" fill="#A6A6A6" />
      </svg>
    </StyledStatusIcon>
  );
}

const StyledStatusIcon = styled.div`
  height: 20px;
  width: 20px;
  min-width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  margin-right: 12px;
`;

const KeyResultContainer = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 6px;
  list-style-type: none;
  width: 100%;
  font-size: 1.6rem;
  ${(props) => getStatusStyles(props.status)};
`;

const progressBarAnimation = (percentage) => keyframes`
    0% { width: 0%; }
    100% { width: ${percentage}%; }
`;

const ProgressBarContainer = styled.div`
  position: absolute;
  height: 100%;
  width: ${(props) => props.completionPercentage}%;
  border-radius: 6px;
  border-top: 3px solid #F9F9F9;
  border-bottom: 3px solid #F9F9F9;
  border-left: 3px solid #F9F9F9;
  background-color: #A4EEC4;
  animation: ${(props) => progressBarAnimation(props.completionPercentage)} 2s;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
`;

const KeyResultPrimaryInfo = styled.div`
  display: flex;
  flex-grow: 1;
`;

const KeyResultLabel = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;

  @media (max-width: 468px) {
    flex-direction: column;
    & .progress-info {
      margin-top: 4px;
      font-size: 1.2rem;
    }
  }
`;

const ProgressInfo = styled.div`
  color: #686868;
  font-size: 1.4rem;
  height: 100%;
  display: flex;
  align-items: center;
`;

const InitiativesListContainer = styled.div`
  display: flex;
`;

const InitiativeListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`;

const InitiativeLabel = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

function KeyResultListItem(props) {
  const { children, label, progress, showProgress, status } = props;
  const [completionPercentage, setCompletionPercentage] = useState(0);

  useEffect(() => {
    let percentage = 0;
    if (progress) {
      percentage = (progress.current * 100) / progress.target;
      setCompletionPercentage(percentage);
    }
  }, []);

  return (
    <KeyResultContainer status={status}>
      <div
        style={{
          padding: "12px 16px",
          zIndex: 1,
        }}
      >
        <KeyResultPrimaryInfo>
          {renderStatusIcon(status)}
          <KeyResultLabel>
            {label}
            {progress && showProgress && (
              <ProgressInfo className="progress-info">
                {`${progress.current}/${progress.target} ${progress.unit}`}
              </ProgressInfo>
            )}
          </KeyResultLabel>
        </KeyResultPrimaryInfo>
        {children}
      </div>
      {(completionPercentage > 0 && showProgress) ? (
        <ProgressBarContainer completionPercentage={completionPercentage} />
      ) : null }
    </KeyResultContainer>
  );
}

function InitiativesList(props) {
  const { children } = props;
  return (
    <InitiativesListContainer>
      <svg
        width="30"
        height="24"
        viewBox="0 0 30 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ minWidth: "30px" }}
      >
        <rect
          width="48"
          height="32"
          stroke="#C6C6C6"
          strokeWidth={2}
          x="10"
          y="-10"
          rx="8"
        />
      </svg>
      <InitiativeListItemContainer>{children}</InitiativeListItemContainer>
    </InitiativesListContainer>
  );
}

function InitiativeListItem(props) {
  const { label, status } = props;
  return (
    <InitiativeLabel>
      {renderStatusIcon(status)}
      {label}
    </InitiativeLabel>
  );
}

KeyResultListItem.defaultProps = {
  status: "todo",
};

export { KeyResultListItem, InitiativesList, InitiativeListItem };
