import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

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
                  border: 1px solid #E6E6E6 ;
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
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  margin-right: 12px;
`;

const KeyResultContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px 16px;
  border-radius: 6px;
  list-style-type: none;
  width: 100%;
  font-size: 1.6rem;
  ${(props) => getStatusStyles(props.status)};
`;

const KeyResultLabel = styled.div`
  display: flex;
  flex-grow: 1;
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
  const { children, label, status } = props;
  return (
    <KeyResultContainer status={status}>
      <KeyResultLabel>
        {renderStatusIcon(status)}
        {label}
      </KeyResultLabel>
      {children}
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
        style={{ minWidth: '30px' }}
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
      <InitiativeListItemContainer>
        {children}
      </InitiativeListItemContainer>
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

KeyResultListItem.propTypes = {
  status: propTypes.oneOf(["todo", "progress", "done"]),
};

export { KeyResultListItem, InitiativesList, InitiativeListItem };
