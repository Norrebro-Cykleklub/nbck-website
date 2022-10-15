import React, { useMemo } from 'react';

interface LegacyModalProps extends React.CSSProperties {
  backButtonTitle?: string;
  backButtonOnClick: () => void;
  closeButton: React.ReactNode;
  children: (props: { backButton: JSX.Element }) => React.ReactNode;
}

export default function LegacyModal({
  backButtonTitle,
  backButtonOnClick,
  closeButton,
  children: _children,
  ...style
}: LegacyModalProps) {
  const backButton = useMemo(() => {
    return (
      <button
        className="btn btn-primary"
        data-dismiss="modal"
        type="button"
        onClick={backButtonOnClick}
        style={{ display: 'flex', alignItems: 'center', margin: 'auto' }}
      >
        <i className="fa fa-times" style={{ marginRight: 5 }}></i>{' '}
        {backButtonTitle}
      </button>
    );
  }, [backButtonTitle, backButtonOnClick]);

  const children = useMemo(
    () => _children({ backButton }),
    [_children, backButton],
  );

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
      <div className="modal-dialog" style={{ margin: '0' }}>
        <div className="modal-content">
          {closeButton}
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div id="nbroModalBody" className="modal-body">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
