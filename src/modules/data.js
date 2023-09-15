const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const gameKey = 'HA3SIpAdpyV6mTFiQEzK';
const scoreUrl = `${apiUrl}/games/${gameKey}/scores`;

const addScore = async (user, score) => {
  try {
    await fetch(scoreUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, score }),
    });
  } catch {
    throw new Error();
  }
};

export { addScore, scoreUrl };
