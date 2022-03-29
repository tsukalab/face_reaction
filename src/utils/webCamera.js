let mediaRecorder = null;
let recordedChunks = [];

export const getDevices = async () => {
  try {
    const d = await navigator.mediaDevices.enumerateDevices();
    const devices = d.filter((device) => device.kind === 'videoinput');
    return devices;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const initializeCamera = async (deviceId = null) => {
  try {
    const constraints = {
      audio: false,
      video: {
        facingMode: 'environment',
        width: 1280,
        height: 720,
        deviceId: deviceId,
      },
    };

    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    const video = document.getElementById('player');
    video.srcObject = stream;
    video.play();
    return stream;
  } catch (err) {
    console.error(`camera error occured: ${err}`);
  }
};

export const startRecording = (stream) => {
  if (!mediaRecorder) {
    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.ondataavailable = (e) => {
      recordedChunks.push(e.data);
    };
  }

  mediaRecorder.start();
  console.log('MediaRecorder start');
};

export const stopRecording = () => {
  mediaRecorder.stop();

  console.log('MediaRecorder stop');
};

export const pauseRecording = () => {
  mediaRecorder.pause();

  console.log('MediaRecorder pause');
};

export const resumeRecording = () => {
  mediaRecorder.resume();

  console.log('MediaRecorder resume');
};

export const getRecordingState = () => {
  if (mediaRecorder) {
    const state = mediaRecorder.state;
    return state;
  }

  return null;
};

export const getRecordData = () => {
  const blob = new Blob(recordedChunks, { type: 'video/mp4' });

  return blob;
};
