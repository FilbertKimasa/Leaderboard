import scrores from './data.js';

const scoreList = document.querySelector('.score-list');
const renderScores = () => {
  scoreList.innerHTML = scrores
    .map((score) => ` <li>${score.name} : ${score.score}</li>`)
    .join('');
};

renderScores();
