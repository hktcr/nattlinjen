'use strict';
// Shared pure helpers and transaction contract. No network or external actions.
function N(value){
 const raw=String(value??'');if(raw.length>300)return null;const s=raw.trim().replace(',','.');if(!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:\/[+-]?(?:\d+(?:\.\d*)?|\.\d+))?$/.test(s))return null;
 // Compare each decimal token with its Number's canonical decimal value.
 // This preserves 9,0 and 0.1 but refuses silently rounded long input.
 const decimal=text=>{const [mantissa,expText='0']=text.toLowerCase().split('e'),exp=Number(expText);const sign=mantissa.startsWith('-')?-1n:1n;const [whole,frac='']=mantissa.replace(/^[+-]/,'').split('.');let n=sign*BigInt((whole||'0')+frac),d=10n**BigInt(frac.length);if(exp>=0)n*=10n**BigInt(exp);else d*=10n**BigInt(-exp);return [n,d];};
 const parts=s.split('/'),numbers=parts.map(Number);if(!numbers.every(Number.isFinite))return null;
 const qs=parts.map(decimal);for(let i=0;i<qs.length;i++){const canonical=decimal(String(numbers[i]));if(qs[i][0]*canonical[1]!==canonical[0]*qs[i][1])return null;}
 if(parts.length===1)return numbers[0];if(qs[1][0]===0n)return null;
 let numerator=qs[0][0]*qs[1][1],denominator=qs[0][1]*qs[1][0];if(denominator<0n){numerator=-numerator;denominator=-denominator;}
 const gcd=(a,b)=>{a=a<0n?-a:a;while(b){const t=a%b;a=b;b=t;}return a;};const common=gcd(numerator,denominator);numerator/=common;denominator/=common;const n=Number(numerator)/Number(denominator);if(!Number.isFinite(n))return null;
 // Scalar answers must retain their exact decimal value. Geometry uses its
 // independent rational validators and can still accept recurring coordinates.
 const canonical=decimal(String(n));if(numerator*canonical[1]!==canonical[0]*denominator)return null;
 return n;
}
function T(value){const s=String(value??'').trim();const m=/^(\d{1,2})[:.](\d{2})$/.exec(s);if(!m||+m[1]>23||+m[2]>59)return null;return +m[1]*60 + +m[2]}
function campaignClone(x){return JSON.parse(JSON.stringify(x))}
function campaignUse(branch,task,context,stamp){if(branch.receipts[task.id])return {ok:false,message:'Denna lösning är redan använd.'};const draft=branch.drafts[task.id]||{answers:{},help:[]};const verdict=task.validate(draft.answers,context);if(!verdict.ok)return verdict;const next=campaignClone(branch);next.receipts[task.id]={id:task.id+'-used',answers:campaignClone(draft.answers),support:[...(draft.help||[])],usedAt:stamp};next.screen='after';next.afterStep=0;if(task.id==='K06-U03')next.chosenDay={day:draft.answers.day,start:draft.answers.start,end:draft.answers.end};return {ok:true,next}}
function campaignProgress(branch,tasks){return tasks.filter(t=>!!branch.receipts[t.id]).length}
