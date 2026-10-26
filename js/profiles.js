import {characters,apartments,clothes} from './catalog.js';
const KEY='ncod2-guest-profile-v1';
export function readProfile(){let p={};try{p=JSON.parse(localStorage.getItem(KEY))||{};}catch{}return {displayName:typeof p.displayName==='string'?p.displayName.slice(0,32):'Guest',character:characters.some(c=>c.id===p.character)?p.character:characters[0].id,apartment:apartments.some(a=>a.id===p.apartment&&a.level===1)?p.apartment:'starter',outfit:clothes.some(c=>c.id===p.outfit&&c.price===0&&!c.level)?p.outfit:'everyday',gamesPlayed:Number.isSafeInteger(p.gamesPlayed)&&p.gamesPlayed>=0?p.gamesPlayed:0,answers:Number.isSafeInteger(p.answers)&&p.answers>=0?p.answers:0,preferences:{reducedMotion:!!p.preferences?.reducedMotion},xp:0,level:1,coins:0};}
export function saveProfile(changes){const p={...readProfile(),...changes};localStorage.setItem(KEY,JSON.stringify(p));return readProfile();}
export function recordGame(answers){const p=readProfile();try{saveProfile({gamesPlayed:p.gamesPlayed+1,answers:p.answers+answers});}catch{}}
export function equippedCharacter(){const p=readProfile();return characters.find(c=>c.id===p.character);}
