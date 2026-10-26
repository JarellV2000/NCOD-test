import { modes } from './mode-registry.js';
const target = document.querySelector('#modes');
for (const mode of modes) { const a=document.createElement('a');a.className='card';a.href=mode.path;a.textContent=mode.name+' →';target.append(a); }
