import CameraReady from './CameraReady';
import Question from './Question';
import '../styles/App.css';
import { useState } from 'react';

function App() {
  const [pageFlag, setFlag] = useState(0);
  const [stream, setStream] = useState(null);
  const [answer, setAnswer] = useState(null);

  const moveQuestion = () => {
    setFlag(1);
  };
  return (
    <div className="App">
      {pageFlag === 0 ? (
        <CameraReady
          moveQuestion={moveQuestion}
          stream={stream}
          setStream={setStream}
        ></CameraReady>
      ) : pageFlag === 1 ? (
        <Question answer={answer} setAnswer={setAnswer}></Question>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
