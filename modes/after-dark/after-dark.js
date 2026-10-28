import {mountQuestions} from '../../js/core/question-controller.js';
import {questions} from './questions.js';
mountQuestions({root:document.querySelector('#mode-root'),slug:"after-dark",title:"21+ After Dark",questions});
