import CameraReady from './CameraReady';
import Question from './Question';
import Loading from './Loading';
import ThankYouScreen from './ThankYouScreen';
import '../styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route index path="/" element={<CameraReady></CameraReady>}></Route>
          <Route path="question" element={<Question></Question>}></Route>
          <Route path="loading" element={<Loading></Loading>}></Route>
          <Route
            path="complete"
            element={<ThankYouScreen></ThankYouScreen>}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
