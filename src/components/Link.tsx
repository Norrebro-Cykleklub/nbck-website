import React from 'react';
import WithHover from './WithHover';

type AnchorProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

interface ExternalLinkProps extends AnchorProps {
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
