export function canEquip(item,profile){return (!item.level||profile.level>=item.level)&&item.price===0;}
