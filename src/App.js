import React, {useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey =
  '59e0561031e3254b162477ad3642bba72e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({command, articles}) => {
        if (command === 'newHeadlines') {
          console.log(articles);
        }
      },
    });
  }, []);

  return (
    <div>
      <h1>Alan AI News Application</h1>
    </div>
  );
};

export default App;
