import { scoreUrl } from './data.js';

const scoreList = document.querySelector('.score-list');

const fetchScores = async () => {
  try {
    const data = await (
      await fetch(scoreUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json();
    const scoreArray = data.result;
    scoreList.innerHTML = scoreArray
      .map((score) => ` <li>${score.user} : ${score.score}</li>`)
      .join('');
    return scoreArray;
  } catch {
    throw new Error();
  }
};

const refresh = () => {
  window.location.reload();
  if (scoreList === '') {
    fetchScores();
  }
};

export { fetchScores, refresh };
