import {mountReactionCast} from './reaction-cast.js';
import {mountPartyControls,modeBanner,artwork} from './party-effects.js';
const main=document.querySelector('main');
if(main){mountPartyControls(main);const root=document.querySelector('#mode-root');if(root){const slug=location.pathname.split('/').filter(Boolean).slice(-2)[0];document.body.dataset.mode=slug;document.body.style.setProperty('--mode-art',`url("${artwork(slug)}")`);const title=document.querySelector('h1')?.textContent||'Party';root.before(modeBanner(slug,title));mountReactionCast(main,root);}}

if(main&&!document.querySelector('#mode-root')){const modes=document.querySelector('#modes');if(modes)mountReactionCast(main,modes);}
