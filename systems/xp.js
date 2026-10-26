export const MAX_LEVEL=20, XP_PER_LEVEL=500;
export function levelForXP(xp){return Math.min(MAX_LEVEL,Math.floor(Math.max(0,Number(xp)||0)/XP_PER_LEVEL)+1);}
// Awards must be implemented and validated server-side before activation.
export const rewardsEnabled=false;
