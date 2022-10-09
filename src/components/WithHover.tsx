import React from 'react';
import styled from 'styled-components';

interface WithHoverProps {
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (params?: any) => void;
  children: React.ReactNode;
}

export default function WithHover({
  className,
  onClick,
  children,
}: WithHoverProps) {
  return (
    <WithHoverCSS className={className} onClick={onClick}>
      {children}
    </WithHoverCSS>
  );
}

const WithHoverCSS = styled.span`
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    opacity: 0.54;
  }
`;
