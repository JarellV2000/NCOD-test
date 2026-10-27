import {modes} from './mode-registry.js';
import {el,button} from './ui.js';
const descriptions={friends:'Stories, laughs & the group chat exposed.','talking-stage':'Break the ice. Find the chemistry.',couples:'Deep, flirty & real talk.',confessional:'Anonymous picks. Final-game reveal.','confessionals-pt2':'Your stories. Their guesses.','most-likely-to':'20 seconds. Let the room decide.','dare-or-drink':'Take the dare. Or take a sip.','love-or-drink':'Three duos. One unforgettable night.','after-dark':'Grown conversations after hours.','hot-seat':'One player. All eyes on you.',exposed:'The group chat gets honest.',chaos:'A little bit of everything.','no-mercy':'Bold questions. Big reactions.'};
const rules={confessional:'Pass the phone to vote. Names become player numbers. Votes stay hidden until the final recap.','most-likely-to':'Add 2–12 players. Vote for anyone, including yourself. Each round closes after 20 seconds or everyone votes.','confessionals-pt2':'Submit stories privately on this shared phone, then pass it around to guess each author. Reveal after guesses or 20 seconds.','love-or-drink':'Exactly six players form three teams of two. Choose teammates or random pairs. Finish challenges and reveal final scores.'};
let returnFocus;
const modal=document.querySelector('#mode-dialog'),inner=document.querySelector('#dialog-card');
function close(){modal.close();returnFocus?.focus();}
document.querySelector('#close-dialog').addEventListener('click',close);
modal.addEventListener('click',e=>{if(e.target===modal)close();});
modal.addEventListener('close',()=>{inner.classList.remove('flipped');returnFocus?.focus();});
for(const [i,m]of modes.entries()){
 const a=el('a',null,'deck-card');a.href=m.path;a.style.setProperty('--position',(i%4)*33.3+'%');a.append(el('span',String(i+1).padStart(2,'0')+' / NCOD','card-index'),el('span',null,'card-art'),el('span','♛','doodle'),el('h3',m.name),el('p',descriptions[m.slug]),el('span','FLIP TO PLAY ↗','card-cta'));a.addEventListener('click',e=>{e.preventDefault();returnFocus=a;inner.classList.remove('flipped');inner.replaceChildren();
 const front=el('div',null,'flip-face front');front.append(el('span','NO CAP OR DRINK','eyebrow'),el('div',null,'dialog-art'),el('h2',m.name),el('p',descriptions[m.slug]),button('Flip for the rules ↻',()=>{inner.classList.add('flipped');setTimeout(()=>start.focus(),300);}));
 const back=el('div',null,'flip-face back');const start=el('a','Start game →','button');start.href=m.path;back.append(el('span','YOUR NIGHT. YOUR RULES.','eyebrow'),el('h2','How to play'),el('p',rules[m.slug]||'Add names or play without them. Flip a card, answer honestly, choose a drink, or skip. Your choice moves to the next prompt. No repeats within your deck.'),el('p','Shared-phone play · any drink works · skip anytime','muted'),start,button('↶ Back to card',()=>{inner.classList.remove('flipped');setTimeout(()=>front.querySelector('button').focus(),300);},true));
 inner.append(front,back);front.inert=false;back.inert=true;const observe=()=>{const flipped=inner.classList.contains('flipped');front.inert=flipped;back.inert=!flipped;};const observer=new MutationObserver(observe);observer.observe(inner,{attributes:true,attributeFilter:['class']});modal.addEventListener('close',()=>observer.disconnect(),{once:true});modal.showModal();
 });document.querySelector('#modes').append(a);
}
document.querySelector('#mode-count').textContent=modes.length+' ways to play';
