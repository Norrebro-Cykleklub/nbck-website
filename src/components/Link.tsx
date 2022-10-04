import React from 'react';
import WithHover from './WithHover';

interface ExternalLinkProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: OnClickAnchorEvent) => void;
  target?: React.HTMLAttributeAnchorTarget;
  href?: string;
}

export default function Link({ children, ...props }: ExternalLinkProps) {
  return (
    <WithHover>
      <a {...props}>{children}</a>
    </WithHover>
  );
}
