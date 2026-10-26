import {mountVoting} from '../../js/core/voting.js';
import {questions} from './questions.js';
mountVoting(document.querySelector('#mode-root'),{slug:'confessional',questions,anonymous:true});
