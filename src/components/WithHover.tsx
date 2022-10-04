import React from 'react';
import styled from 'styled-components';

interface WithHoverProps {
  children: React.ReactNode;
}

export default function WithHover({ children }: WithHoverProps) {
  return <WithHoverCss>{children}</WithHoverCss>;
}

const WithHoverCss = styled.div`
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    opacity: 0.54;
  }
`;
