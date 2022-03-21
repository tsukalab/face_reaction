import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
} from '@mui/material';
import { useEffect } from 'react';
import '../styles/App.css';
import { speakText } from '../utils/speechSynthesis';
import { cornerButton, questionForm, marginContent } from '../styles/styles';

const Question = () => {
  useEffect(() => {
    speakText('今日の問題の難易度はどうでしたか？');
  }, []);

  const handleChange = () => {};

  return (
    <div id="question" className="question-container">
      <h2 className="main-text" style={{ marginTop: 60 }}>
        今日の問題の難易度はどうでしたか？
      </h2>
      <FormControl style={questionForm}>
        <RadioGroup onChange={handleChange}>
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
      </FormControl>
      <Button variant="contained" style={cornerButton} onClick={() => {}}>
        送信
      </Button>
    </div>
  );
};

export default Question;
