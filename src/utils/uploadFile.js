import axios from 'axios';
import CREDENTIALS from '../.credential.json';

const APP_KEY = CREDENTIALS.APP_KEY;
const APP_SECRET = CREDENTIALS.APP_SECRET;
const REFRESH_TOKEN = CREDENTIALS.REFRESH_TOKEN;

export const getAccessToken = async () => {
  const authCode = window.btoa(`${APP_KEY}:${APP_SECRET}`);

  try {
    const res = await fetch('https://api.dropbox.com/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + authCode,
      },
      body: `grant_type=refresh_token&refresh_token=${REFRESH_TOKEN}`,
    });

    const resJson = await res.json();
    const accessToken = resJson.access_token;
    return accessToken;
  } catch (err) {
    console.log(err);
    throw new Error('get access token error:' + err);
  }
};

export const uploadToDropBox = async (file, path) => {
  const accessToken = await getAccessToken();

  try {
    const res = await axios({
      method: 'post',
      url: 'https://content.dropboxapi.com/2/files/upload',
      data: file,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/octet-stream',
        'Dropbox-API-Arg': JSON.stringify({
          path: path,
          mode: 'overwrite',
        }),
      },
    });
    console.log(res.statusText);
  } catch (err) {
    throw new Error('upload file error:' + err);
  }
};
