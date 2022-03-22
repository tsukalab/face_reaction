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

export const getRecordData = () => {
  const blob = new Blob(recordedChunks, { type: 'video/mp4' });
  console.log(blob);
  return blob;
};