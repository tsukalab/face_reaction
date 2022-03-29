/* eslint-disable react-hooks/exhaustive-deps */
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { cornerButton, selectForm } from '../styles/styles';
import {
  getDevices,
  initializeCamera,
  startRecording,
} from '../utils/webCamera';
import { useNavigate } from 'react-router-dom';

const CameraReady = () => {
  const [stream, setStream] = useState(null);
  const [devices, setDevices] = useState(null);

  const navigate = useNavigate();

  useEffect(async () => {
    setStream(await initializeCamera());
    setDevices(await getDevices());
  }, []);

  const handleChange = async (e) => {
    setStream(await initializeCamera(e.target.value));
  };

  return (
    <div id="camera-ready" className="main-container">
      <h2 className="main-text">カメラに顔が映るようにしてくだい</h2>
      <FormControl style={selectForm} id="select-form">
        <InputLabel>ウェブカメラを切り替える</InputLabel>
        <Select onChange={handleChange} displayEmpty defaultValue={''}>
          {devices
            ? devices.map((device) => {
                return (
                  <MenuItem key={device.deviceId} value={device.deviceId}>
                    {device.label}
                  </MenuItem>
                );
              })
            : null}
        </Select>
      </FormControl>
      <video id="player"></video>
      <Button
        variant="contained"
        style={cornerButton}
        onClick={() => {
          startRecording(stream);
          navigate('question');
        }}
      >
        次へ
      </Button>
    </div>
  );
};

export default CameraReady;
