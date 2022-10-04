const styleHelpers = {
  childrenSameLine: { display: 'inline-block', whiteSpace: 'pre-wrap' },
  showEllipsis: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  noSelect: { userSelect: 'none' },
} as Record<string, Partial<React.CSSProperties>>;

export default styleHelpers;
