import axios from 'axios';

export const uploadToDropBox = async (file, path) => {
  try {
    const res = await axios({
      method: 'post',
      url: 'https://content.dropboxapi.com/2/files/upload',
      data: file,
      headers: {
        Authorization:
          'Bearer sl.BESnlvWo86Ws8Xe3aU00KwFs9MtL0M0gEwEvJr2oXy58WBOwzkhmZpAFfxDeyIPK1_VPLINbPuqEzQnYKt-3a2zMbiasj_cTI6P1hxV41J6dEVrXqqlv6M1AhV-POoUG6mStdnQ',
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
