import { CircularProgress } from '@mui/material';

const Loading = () => {
  return (
    <div
      className="question-container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress></CircularProgress>
    </div>
  );
};

export default Loading;
