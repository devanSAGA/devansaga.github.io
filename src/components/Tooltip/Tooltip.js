import React from 'react';
import styled from 'styled-components';
import Tippy from '@tippyjs/react';

const StyledTooltip = styled(Tippy)`
  & .tippy-content {
    background-color: #000000;
    color: ${(props) => props.theme['content-color-secondary']};
    border: 1px solid #404040;
    border-radius: 8px;
    padding: 6px;
    ${(props) => props.theme['popover-shadow']};
    font-size: ${(props) => props.theme['font-size-xs']};
    text-align: center;
    word-break: break-word;
  }
`;

export default function Tooltip(props) {
  const {
    content,
    placement,
    triggerRef,
    triggerEvent,
    isInteractive,
    onClickOutside,
    maxWidth,
    openDelay,
    closeDelay,
    openAnimationDuration,
    closeAnimationDuration,
    className,
    children
  } = props;

  function handleClickOutside() {
    if (onClickOutside) onClickOutside();
  }

  return (
    <StyledTooltip
      isOpen
      content={content}
      placement={placement}
      trigger={triggerEvent}
      reference={triggerRef}
      interactive={isInteractive}
      delay={[openDelay, closeDelay]}
      duration={[openAnimationDuration, closeAnimationDuration]}
      maxWidth={maxWidth}
      className={className}
      arrow={false}
      offset={[0, 4]}
      onClickOutside={handleClickOutside}
    >
      {children}
    </StyledTooltip>
  );
}

Tooltip.defaultProps = {
  placement: 'top',
  children: null,
  triggerRef: undefined,
  triggerEvent: 'mouseenter focus',
  isInteractive: false,
  onClickOutside: null,
  className: '',
  maxWidth: 300,
  openDelay: 100,
  closeDelay: 100,
  openAnimationDuration: null,
  closeAnimationDuration: null
};
