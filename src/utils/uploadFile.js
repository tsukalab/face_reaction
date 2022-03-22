import axios from 'axios';

export const uploadToDropBox = async (file, path) => {
  try {
    const res = await axios({
      method: 'post',
      url: 'https://content.dropboxapi.com/2/files/upload',
      data: file,
      headers: {
        Authorization:
          'Bearer sl.BEQagbmPV4VGwOz5LijYEN6MR6a6Wiy5WWgrnya52GSLYFGj6Ie_rwRQPKnGjEkBHmb68gUom5A32knS9993kCjbPLalsCeD17or83R6uKH5XyHWHJHRw2JpSWY5dqr5xa6S6l0',
        'Content-Type': 'application/octet-stream',
        'Dropbox-API-Arg': JSON.stringify({
          path: path, //アップロード時のファイルパス
          mode: 'overwrite',
        }),
      },
    });
    console.log(res.statusText);
  } catch (err) {
    throw new Error(err);
  }
};
