import * as React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@mui/material';
import { cornerButton, player, selectForm } from '../styles/styles';

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      width: 250,
    },
  },
};

const CameraReady = () => {
  const handleChange = () => {};
  return (
    <div id="camera-ready" className="main-container">
      <h2 className="main-text">カメラに顔が映るようにしてくだい</h2>
      <FormControl style={selectForm}>
        <InputLabel>ウェブカメラを切り替える</InputLabel>
        <Select
          id="demo-simple-select"
          onChange={handleChange}
          MenuProps={MenuProps}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
        </Select>
      </FormControl>
      <video id="player" style={player}></video>
      <Button variant="contained" style={cornerButton}>
        次へ
      </Button>
    </div>
  );
};

export default CameraReady;
