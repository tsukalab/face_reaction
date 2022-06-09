import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  FormHelperText,
} from '@mui/material';
import { useEffect, useState } from 'react';
import '../styles/App.css';
import { speakText } from '../utils/speechSynthesis';
import { cornerButton, marginContent } from '../styles/styles';
import {
  getRecordData,
  getRecordingState,
  stopRecording,
} from '../utils/webCamera';
import { getDatePath, uploadToDropBox } from '../utils/uploadFile';
import { useNavigate } from 'react-router-dom';

// import logos
import SmileLogo from '../images/04_smile.svg';
import NormalLogo from '../images/04_normal.svg';
import SadLogo from '../images/04_sad.svg';

const Question = () => {
  const [answer, setAnswer] = useState(null);
  const [helperText, setHelperText] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    speakText('今日の問題の難易度はどうでしたか？');
  }, []);

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!answer) {
      setHelperText('質問に回答してください');
      setError(true);
    } else {
      setHelperText('');
      setError(false);

      const recordingState = getRecordingState();
      const uploadTask = () => {
        navigate('/loading');
        //イベント発火待ちタイムアウト（あんまり良くない）
        setTimeout(async () => {
          const datePath = getDatePath();
          const videoPath = `/kawatani/${datePath}.mp4`;
          const textPath = `/kawatani/${datePath}.txt`;
          const videoFile = getRecordData();
          const answerTextFile = new Blob([answer], {
            type: 'text/plain',
          });

          try {
            await Promise.all([
              uploadToDropBox(videoFile, videoPath),
              uploadToDropBox(answerTextFile, textPath),
            ]);
            navigate('/complete');
          } catch (err) {
            alert('アップロードに失敗しました');
            console.error(err);
          }
        }, 100);
      };

      if (recordingState === 'recording') {
        stopRecording();
        uploadTask();
      } else {
        const result = window.confirm(
          '録画に失敗しました．トップページに戻ります．'
        );
        if (result) {
          navigate('/');
        }
      }
    }
  };

  return (
    <div id="question" className="question-container">
      <h2 className="main-text" style={{ marginTop: 60 }}>
        今日の問題の難易度はどうでしたか？
      </h2>
      <form onSubmit={handleSubmit} className="question-form">
        <FormControl error={error}>
          <RadioGroup onChange={handleChange} value={answer}>
            <FormControlLabel
              value="easy"
              control={<Radio />}
              label={
                <span className="radio-text">
                  簡単
                  <img src={SmileLogo} alt="smileIcon" className="radio-logo" />
                </span>
              }
              style={{ marginBottom: marginContent }}
            />
            <FormControlLabel
              value="normal"
              control={<Radio />}
              label={
                <span className="radio-text">
                  普通
                  <img
                    src={NormalLogo}
                    alt="NormalIcon"
                    className="radio-logo"
                  />
                </span>
              }
              style={{ marginBottom: marginContent }}
            />
            <FormControlLabel
              value="difficult"
              control={<Radio />}
              label={
                <span className="radio-text">
                  難しい
                  <img src={SadLogo} alt="SadIcon" className="radio-logo" />
                </span>
              }
              style={{ marginBottom: marginContent }}
            />
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
        <Button variant="contained" style={cornerButton} type="submit">
          送信
        </Button>
      </form>
    </div>
  );
};

export default Question;
