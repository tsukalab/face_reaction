import CameraReady from './CameraReady';
import Question from './Question';
import '../styles/App.css';
import { useState } from 'react';

function App() {
  const [pageFlag, setFlag] = useState(0);

  const moveQuestion = () => {
    setFlag(1);
  };
  return (
    <div className="App">
      {pageFlag === 0 ? (
        <CameraReady moveQuestion={moveQuestion}></CameraReady>
      ) : pageFlag === 1 ? (
        <Question></Question>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
