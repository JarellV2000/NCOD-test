export const $=s=>document.querySelector(s);
export function el(tag,text,cls){const e=document.createElement(tag);if(text!==undefined&&text!==null)e.textContent=text;if(cls)e.className=cls;return e;}
export function button(text,fn,secondary=false){const b=el('button',text,secondary?'secondary':'');b.type='button';b.addEventListener('click',fn);return b;}
export function link(text,href,cls='button secondary'){const a=el('a',text,cls);a.href=href;return a;}
export function field(parent,title,tag='input',value=''){const l=el('label',title);const i=el(tag);i.id='field-'+crypto.randomUUID();l.htmlFor=i.id;i.value=value;parent.append(l,i);return i;}
export function toast(text){document.querySelector('.toast')?.remove();const t=el('div',text,'toast');t.setAttribute('role','status');document.body.append(t);setTimeout(()=>t.remove(),2800);}
export function avatar(color='#ff793f',skin='#a86e4a'){const a=el('div',null,'avatar');a.style.setProperty('--shirt',color);a.style.setProperty('--skin',skin);a.setAttribute('aria-label','Stylized character preview');a.setAttribute('role','img');for(const c of ['head','body','legs','eyes'])a.append(el('div',c==='eyes'?'••':null,c));return a;}
export function scene(name,color){const s=el('div',null,'scene');s.dataset.environment=name;s.append(el('span',name,'scene-label'),avatar(color),el('div','🔥','bubble'));return s;}
export function shuffled(items,rng=Math.random){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
export function namesFrom(text){return text.split(/\n/).map(s=>s.trim().slice(0,32)).filter(Boolean).slice(0,12);}
