import React from 'react';

interface LegacyModalProps extends React.CSSProperties {
  onClose: () => void;
  children: React.ReactNode;
}

export default function LegacyModal({
  onClose,
  children,
  ...style
}: LegacyModalProps) {
  return (
    <div
      className="nbro-modal modal fade show"
      id="nbroModal"
      role="dialog"
      style={{
        display: 'block',
        position: 'unset',
        zIndex: 'unset',
        overflow: 'unset',
        ...style,
      }}
    >
      <div className="modal-dialog" style={{ margin: '5% 0' }}>
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal" onClick={onClose}>
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">{children}</div>
        </div>
      </div>
    </div>
  );
}
