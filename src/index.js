// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import { addScore } from './modules/data.js';
import { refresh, fetchScores } from './modules/scores.js';

const submitForm = document.querySelector('.submit-form');
const refreshBtn = document.querySelector('.refresh-btn');
const name = document.getElementById('name');
const score = document.getElementById('score');

submitForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (name.value !== '' && score.value !== '') {
    await addScore(name.value, score.value);
    name.value = '';
    score.value = '';
    fetchScores();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  fetchScores();
});

refreshBtn.addEventListener('click', refresh);
