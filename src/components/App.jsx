import CameraReady from './CameraReady';
import Question from './Question';
import Loading from './Loading';
import ThankYouScreen from './ThankYouScreen';
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

  const moveResult = () => {
    setFlag(3);
  };

  return (
    <div className="App">
      {pageFlag === 0 ? (
        <CameraReady moveQuestion={moveQuestion}></CameraReady>
      ) : pageFlag === 1 ? (
        <Question moveLoading={moveLoading} moveResult={moveResult}></Question>
      ) : pageFlag === 2 ? (
        <Loading></Loading>
      ) : (
        <ThankYouScreen></ThankYouScreen>
      )}
    </div>
  );
}

export default App;
