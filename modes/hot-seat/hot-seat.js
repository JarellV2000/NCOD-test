import {mountQuestions} from '../../js/core/question-controller.js';
import {questions} from './questions.js';
mountQuestions({root:document.querySelector('#mode-root'),slug:"hot-seat",title:"Hot Seat",questions});
