const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const gameKey = 'HA3SIpAdpyV6mTFiQEzK';
const scoreUrl = `${apiUrl}/games/${gameKey}/scores`;

const addScore = async (user, score) => {
  try {
    const response = await fetch(scoreUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, score }),
    });
    const data = await response.json();
    // eslint-disable-next-line no-console
    console.log(data);
  } catch {
    throw new Error();
  }
};

export { addScore, scoreUrl };
