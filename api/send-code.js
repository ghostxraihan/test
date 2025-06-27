const axios = require('axios');

module.exports = async (req, res) => {
  const { number } = req.query;

  if (!number) {
    return res.status(400).json({ error: 'Missing "number" query parameter' });
  }

  try {
    const url = 'https://www.efsanetr.com/api/v2/send/mobileCode';

    const data = new URLSearchParams({
      mobile: number,
      countryCode: '880',
      type: '1',
    });

    const headers = {
      'host': 'www.efsanetr.com',
      'content-length': data.toString().length.toString(),
      'language': 'en_US',
      'sec-ch-ua-platform': '"Android"',
      'verification': '...',
      'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Android WebView";v="134"',
      'sec-ch-ua-mobile': '?1',
      'x-requested-with': 'XMLHttpRequest',
      'user-agent': 'Mozilla/5.0 (Linux; Android 15...)',
      'accept': '*/*',
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'origin': 'https://www.efsanetr.com',
      'sec-fetch-site': 'same-origin',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': 'https://www.efsanetr.com/en_US/internal/register/?inviteCode=SY64XX',
      'accept-encoding': 'gzip, deflate, br, zstd',
      'accept-language': 'en-US,en;q=0.9',
      'cookie': 'inviteCode=SY64XX; AWSALBTG=...',
      'priority': 'u=1, i',
    };

    const response = await axios.post(url, data.toString(), { headers });

    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({
      error: error.response ? error.response.data : error.message,
    });
  }
};
