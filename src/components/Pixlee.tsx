import React, { useEffect } from 'react';
import windowSafe from './utils/windowSafe';

export default function Pixlee() {
  useEffect(() => {
    if (windowSafe) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const _window = windowSafe as any;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).PixleeAsyncInit = function () {
        _window.Pixlee.init({ apiKey: 'h2RHXgmL2hNiqkrutVC8' });
        _window.Pixlee.addSimpleWidget({ widgetId: '13267' });
      };
    }
  }, []);

  return (
    <>
      <script src="//instafeed.assets.pxlecdn.com/assets/pixlee_widget_1_0_0.js" />
      <iframe
        id="pixlee_lightbox_iframe"
        width="100%"
        height="100%"
        title="Shop customer photos with Pixlee"
        frameBorder="0"
        src="https://instafeed.pixlee.co/lightbox?widget_id=13267&amp;api_key=h2RHXgmL2hNiqkrutVC8&amp;parent_url=http%3A%2F%2Fnorrebrock.dk%2F"
        scrolling="no"
        style={{
          inset: '0px',
          padding: '0px',
          margin: '0px',
          position: 'fixed',
          zIndex: '2147483647',
          display: 'none',
          border: 'none',
          overflow: 'hidden',
        }}
      ></iframe>
    </>
  );
}
