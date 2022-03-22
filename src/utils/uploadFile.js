import axios from 'axios';

export const uploadToDropBox = async (file, path) => {
  try {
    const res = await axios({
      method: 'post',
      url: 'https://content.dropboxapi.com/2/files/upload',
      data: file,
      headers: {
        Authorization:
          'Bearer sl.BERFkUj4xhpVzZLOGJblBytf6GS9fzab7y6E3RD2CsBibArz7Ixl3SUXSvyLHLNjEVEl-UE1FS_sx4dQbZEZfP6bPICwnKyhQVP9mbNoyVP4eeojB8wJdOUzas0gP3nf4kIILUo',
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
