// Reactions are local to this device; no voice recording or answer analysis.
const settingsKey='ncod-party-settings-v1';
let preferences={sound:false,motion:true};
try{const saved=JSON.parse(localStorage.getItem(settingsKey));if(saved&&typeof saved==='object')preferences={sound:saved.sound===true,motion:saved.motion!==false};}catch{}
let audioContext;
const artBase=new URL('../assets/images/',import.meta.url);
export function artwork(slug='friends'){
 const key=['talking-stage','couples','love-or-drink'].includes(slug)?'flirty':['most-likely-to','confessional','confessionals-pt2','exposed','hot-seat'].includes(slug)?'voting':['after-dark','no-mercy','dare-or-drink'].includes(slug)?'afterdark':'friends';
 return new URL('alive-'+key+'.webp',artBase).href;
}
function node(tag,text,cls){const e=document.createElement(tag);e.className=cls||'';if(text)e.textContent=text;return e;}
function reduced(){return !preferences.motion||(typeof matchMedia==='function'&&matchMedia('(prefers-reduced-motion: reduce)').matches);}
function persist(){try{localStorage.setItem(settingsKey,JSON.stringify(preferences));}catch{}}
function tone(kind){if(!preferences.sound||typeof window==='undefined')return;try{const Audio=window.AudioContext||window.webkitAudioContext;if(!Audio)return;audioContext??=new Audio();audioContext.resume().catch(()=>{});const t=audioContext.currentTime;const pitches=kind==='drink'?[440,330]:kind==='skip'?[330]:[523,659,784];pitches.forEach((pitch,i)=>{const osc=audioContext.createOscillator(),gain=audioContext.createGain();osc.type='sine';osc.frequency.value=pitch;gain.gain.setValueAtTime(.045,t+i*.08);gain.gain.exponentialRampToValueAtTime(.001,t+i*.08+.15);osc.connect(gain);gain.connect(audioContext.destination);osc.start(t+i*.08);osc.stop(t+i*.08+.16);});}catch{}}
const choose=items=>items[Math.floor(Math.random()*items.length)];
export function react(kind,{prompt='',label=''}={}){
 document.querySelector('.party-response')?.remove();document.querySelector('.party-sparks')?.remove();
 const lines={honest:['NO CAP. RESPECT.','THE TRUTH JUST DROPPED.','KEEPING IT REAL.'],drink:['SIP CHOSEN. CHEERS.','TAKE THE SIP.','YOUR PACE. YOUR NIGHT.'],skip:['NEXT CARD. SAME GOOD VIBES.','SKIPPED. KEEP IT MOVING.'],reveal:['CARD FLIPPED. YOUR TURN.'],vote:['VOTE LOCKED. 👀'],results:['THE ROOM HAS SPOKEN.','THE REVEAL IS HERE.'],confession:['SECRET REVEALED. 👀'],team:['THAT’S TEAM CHEMISTRY.'],finish:['THAT’S A NIGHT TO REMEMBER.']};
 let text=label||choose(lines[kind]||['PARTY REACTION']);
 // Cue follows the visible prompt and selected button, never a guessed spoken answer.
 if(kind==='honest'&&/\bex\b|ghost|situationship/i.test(prompt))text=choose(['THE GROUP CHAT NEEDS CONTEXT.','THE TEA JUST DROPPED.']);
 if(kind==='honest'&&/secret|lie|caught/i.test(prompt))text=choose(['OKAY, THE TRUTH IS OUT.','NO CAP DETECTED.']);
 const emojis={honest:['🔥','👏','👀'],drink:['🥤','🥂','✨'],skip:['✌️','🫶','✨'],reveal:['👀','✨','🔥'],vote:['🔒','👀','🗳️'],results:['😂','👑','🔥'],confession:['🤫','👀','😂'],team:['❤️','🔥','🙌'],finish:['🎉','🥂','🔥']};
 const pool=emojis[kind]||[kind,'✨'];
 const banner=node('div',null,'party-response response-'+kind);banner.setAttribute('role','status');const portrait=node('span',null,'response-portrait');portrait.setAttribute('aria-hidden','true');portrait.style.setProperty('--reaction-art',`url("${artwork(['results','confession'].includes(kind)?'most-likely-to':kind==='drink'?'after-dark':kind==='team'?'couples':'friends')}")`);portrait.append(node('span',pool[0],'response-emoji'));banner.append(portrait,node('strong',text),node('small','NO CAP OR DRINK'));document.body.append(banner);
 if(!reduced()){const layer=node('div',null,'party-sparks');layer.setAttribute('aria-hidden','true');for(let i=0;i<8;i++){const bit=node('span',pool[i%pool.length],'party-spark');bit.style.setProperty('--x',(8+Math.random()*84)+'vw');bit.style.setProperty('--sway',(-65+Math.random()*130)+'px');bit.style.setProperty('--delay',(i*.07)+'s');bit.style.setProperty('--spin',(-30+Math.random()*60)+'deg');layer.append(bit);}document.body.append(layer);setTimeout(()=>layer.remove(),2200);}
 tone(kind);setTimeout(()=>banner.remove(),2100);
}
export function reactionBar(){const wrap=node('div',null,'reaction-strip live-reactions');wrap.setAttribute('aria-label','Send a local reaction');for(const [emoji,name]of [['😂','Laugh'],['🔥','Fire'],['👀','Eyes'],['🫶','Love']]){const b=node('button',emoji);b.type='button';b.setAttribute('aria-label',name+' reaction');b.addEventListener('click',()=>react(emoji,{label:emoji+' '+name.toUpperCase()}));wrap.append(b);}return wrap;}
export function modeBanner(slug,title){const wrap=node('div',null,'mode-photo');wrap.style.setProperty('--mode-art',`url("${artwork(slug)}")`);wrap.setAttribute('role','img');wrap.setAttribute('aria-label',title+' illustrated party scene');wrap.append(node('span','♛','photo-crown'),node('span','YOUR PEOPLE. YOUR NIGHT.','photo-sticker'));return wrap;}
export function mountPartyControls(parent){const wrap=node('div',null,'party-controls');const sound=node('button',null,'secondary'),motion=node('button',null,'secondary');sound.type=motion.type='button';function update(){sound.textContent=preferences.sound?'♫ Sound on':'♫ Sound off';motion.textContent=preferences.motion?'✦ Motion on':'✦ Motion off';sound.setAttribute('aria-pressed',String(preferences.sound));motion.setAttribute('aria-pressed',String(preferences.motion));document.documentElement.classList.toggle('party-still',!preferences.motion);}
 sound.addEventListener('click',()=>{preferences.sound=!preferences.sound;persist();update();if(preferences.sound)tone('honest');});motion.addEventListener('click',()=>{preferences.motion=!preferences.motion;persist();update();});wrap.append(sound,motion);parent.append(wrap);update();}
