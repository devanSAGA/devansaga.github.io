import React, { useState } from "react";
import styled from "styled-components";
import Tippy from "@tippyjs/react";
import './popover.css';

export const POPOVER_PLACEMENT_POSITIONS = [
  "auto",
  "top",
  "top-start",
  "top-end",
  "bottom",
  "bottom-start",
  "bottom-end",
  "left",
  "left-start",
  "left-end",
  "right",
  "right-start",
  "right-end",
];

export const StyledPopover = styled(Tippy)`
  & .tippy-content {
    min-width: 120px;
    z-index: 1000;
    background-color: #2b2b2b;
    border-radius: 4px;
    padding: ${(props) => `${props.padding};`};
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.72),
      0 16px 24px -8px rgba(0, 0, 0, 0.32);
    font-family: ${(props) => props.theme["text-family-default"]};
    font-size: 1.2rem;
    font-weight: 400;
  }
`;

export default function Popover(props) {
  const [popoverInstance, setPopoverInstance] = useState({});
  const {
    children,
    className,
    maxWidth,
    padding,
    placement,
    trigger,
    triggerEvent,
    triggerRef,
  } = props;

  function onKeyDown(event) {
    // Hide the popover on pressing Escape key.
    if (event.keyCode === 27) {
      // eslint-disable-next-line no-unused-expressions, no-underscore-dangle
      popoverInstance && popoverInstance.hide();
    }
  }

  function handleOnShow() {
    document.addEventListener("keydown", onKeyDown);
  }

  function handleOnHide() {
    document.removeEventListener("keydown", onKeyDown);
  }

  return (
    <StyledPopover
      onCreate={(instance) => setPopoverInstance(instance)}
      content={children}
      placement={placement}
      trigger={triggerEvent}
      interactive
      delay={[0, null]}
      maxWidth={maxWidth}
      className={className}
      reference={triggerRef}
      onShow={handleOnShow}
      onHide={handleOnHide}
      padding={padding}
      appendTo={document.getElementById("popover-portal")}
      arrow={null}
    >
      {trigger}
    </StyledPopover>
  );
}

Popover.defaultProps = {
  children: null,
  className: "",
  maxWidth: 320,
  placement: "bottom",
  trigger: null,
  triggerEvent: "click",
  triggerRef: null,
};
