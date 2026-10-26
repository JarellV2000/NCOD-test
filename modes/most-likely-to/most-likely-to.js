import {mountVoting} from '../../js/core/voting.js';
import {questions} from './questions.js';
mountVoting(document.querySelector('#mode-root'),{slug:'most-likely-to',questions,anonymous:false});
