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
import { cornerButton, questionForm, marginContent } from '../styles/styles';
import { stopRecording } from '../utils/webCamera';

const Question = ({ answer, setAnswer }) => {
  const [helperText, setHelperText] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    speakText('今日の問題の難易度はどうでしたか？');
  }, []);

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!answer) {
      setHelperText('質問に回答してください');
      setError(true);
    } else {
      setHelperText('');
      setError(false);
      stopRecording();
    }
  };

  return (
    <div id="question" className="question-container">
      <h2 className="main-text" style={{ marginTop: 60 }}>
        今日の問題の難易度はどうでしたか？
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <FormControl style={questionForm} error={error}>
          <RadioGroup onChange={handleChange} value={answer}>
            <FormControlLabel
              value="easy"
              control={<Radio />}
              label={<span className="radio-text">簡単</span>}
              style={{ marginBottom: marginContent }}
            />
            <FormControlLabel
              value="normal"
              control={<Radio />}
              label={<span className="radio-text">普通</span>}
              style={{ marginBottom: marginContent }}
            />
            <FormControlLabel
              value="difficult"
              control={<Radio />}
              label={<span className="radio-text">難しい</span>}
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
