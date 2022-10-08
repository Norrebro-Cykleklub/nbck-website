import React from 'react';
import styled from 'styled-components';

interface WithHoverProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (params?: any) => void;
  children: React.ReactNode;
}

export default function WithHover({ onClick, children }: WithHoverProps) {
  return <WithHoverCss onClick={onClick}>{children}</WithHoverCss>;
}

const WithHoverCss = styled.span`
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    opacity: 0.54;
  }
`;
