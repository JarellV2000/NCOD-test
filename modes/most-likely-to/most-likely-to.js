import { questions } from './questions.js';
import { mountQuestionPreview } from '../../js/core/question-controller.js';
mountQuestionPreview({ root: document.querySelector('#mode-root'), title: 'Most Likely To', questions });
