import CameraReady from './CameraReady';
import Question from './Question';
import Loading from './Loading';
import '../styles/App.css';
import { useState } from 'react';

function App() {
  const [pageFlag, setFlag] = useState(0);

  const moveQuestion = () => {
    setFlag(1);
  };

  const moveLoading = () => {
    setFlag(2);
  };

  return (
    <div className="App">
      {pageFlag === 0 ? (
        <CameraReady moveQuestion={moveQuestion}></CameraReady>
      ) : pageFlag === 1 ? (
        <Question moveLoading={moveLoading}></Question>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
}

export default App;
