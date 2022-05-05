import alanBtn from '@alan-ai/alan-sdk-web';
import React, { useEffect } from 'react';

function Assistant() {
  // Adding the Alan button
  useEffect(() => {
    alanBtn({
      key: 'cb4016254a24d2c31b0bbd2a66c9812a2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {
        if (commandData.command === 'go:back') {
          // Call the client code that will react to the received command
        }
      },
    });
  }, []);
  return (<> </>);
}
export default Assistant;
