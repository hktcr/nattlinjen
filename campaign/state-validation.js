'use strict';
// Existing v2 state only. Admission is structural, never a regrade of raw work or used mathematics.
(()=>{
 const S=NattlinjenStorage,plain=S.plain,own=S.own,chapters=globalThis.NATTLINJEN_PARTS,tasks=chapters.flatMap(c=>c.tasks),byTask=new Map(tasks.map(t=>[t.id,t])),chapterIds=new Set(chapters.map(c=>c.id));
 const screens=['intro','task','after','outro','finish'],optional=(o,k,f)=>!own(o,k)||f(o[k]),integer=(v,min,max)=>Number.isSafeInteger(v)&&v>=min&&v<=max,string=v=>typeof v==='string';
 const markers=a=>Array.isArray(a)&&a.every(x=>integer(x,1,6)||/^F(?:0[1-9]|1[0-2])$/.test(typeof x==='string'?x:''));
 const packets=a=>Array.isArray(a)&&a.length===24&&a.every(x=>integer(x,-1,2));
 const answers=a=>plain(a)&&Object.values(a).every(string),day=d=>plain(d)&&['B','C'].includes(d.day)&&string(d.start)&&string(d.end);
 const context=b=>({kind:b.kind,chosenDay:b.chosenDay||b.prepared?.chosenDay,receipts:b.receipts,earlyNeri:!!b.events['ask-neri-early'],prepared:b.prepared,events:b.events,stageChecked:false});
 const content=(v,b)=>typeof v==='function'?v(context(b)):v;
 function beats(lines){return (lines||[]).flatMap(p=>String(p).split('\n').filter(Boolean).flatMap(p=>{const sentences=p.match(/[^.!?]+[.!?]+[”»"]?(?:\s+|$)|.+$/g)||[p];let out=[],part='';for(const sentence of sentences){if(part.length+sentence.length>270&&part){out.push(part.trim());part=''}part+=sentence}if(part.trim())out.push(part.trim());return out}))}
 // This authored-ID set is derived from the existing content, never from stored input.
 const choiceIds=new Set(chapters.flatMap(c=>[...(c.choices||[]),...(c.endingChoices||[]),...(c.outroChoices||[]),...c.tasks.flatMap(t=>t.choices||[])]).map(c=>c.id));
 const eventIds=new Set([...choiceIds,'K04-ankomst','K06-ankomst','K08-ankomst','K07-provdag-bekraftad','K08-stodpass-1','K08-stodpass-2']);
 function navigationShape(p){return plain(p)&&chapterIds.has(p.chapter)&&integer(p.taskIndex,0,2)&&screens.includes(p.screen)&&optional(p,'introStep',n=>integer(n,0,Number.MAX_SAFE_INTEGER))&&optional(p,'introBeat',n=>integer(n,0,Number.MAX_SAFE_INTEGER))&&optional(p,'afterStep',n=>integer(n,0,2));}
 function activeIntro(p,b){if(p.screen!=='intro')return true;const c=chapters.find(c=>c.id===p.chapter),lines=content(c.intro,b)||[],groups=[];for(let i=0;i<lines.length;i+=3)groups.push(lines.slice(i,i+3));const group=own(p,'introStep')?p.introStep:0,beat=own(p,'introBeat')?p.introBeat:0;return group<Math.max(1,groups.length)&&beat<Math.max(1,beats(groups[group]||[]).length);}
 function readingBounds(b){const bounds=new Map(),set=(key,lines)=>bounds.set(key,Math.max(1,beats(lines).length));for(const t of tasks){set(t.id+'-after-result',content(t.after,b)||[]);for(const step of content(t.afterSteps,b)||[])set(t.id+'-after-'+step.id,Array.isArray(step.text)?step.text:[step.text]);}for(const c of chapters){const normal=content(c.outro,b)||[],confirmation=c.confirmation,notice=confirmation?(Array.isArray(confirmation.text)?confirmation.text:[confirmation.text]):[];set(c.id+'-outro-confirmed',[...normal,...notice,...(confirmation?(content(confirmation.after,b)||[]):[])]);if(confirmation)set(c.id+'-outro-pending',[...normal,...notice]);}const count=tasks.filter(t=>b.receipts[t.id]).length;set('finish',[count+' av 24 utmaningar har en faktiskt använd lösning i denna spelgren. Förberedd bakgrund räknas inte som elevens genomförande.','Lyktan har fått användning igen. Nästa möte är ännu inte bestämt.','Detta ger ingen automatisk kunskapsnivå, effektbedömning eller betyg.']);return bounds;}
 function validBranch(b,id){
  if(!navigationShape(b)||b.id!==id||!string(id)||!id.length||!['full','teaching'].includes(b.kind)||!chapterIds.has(b.startChapter)||!optional(b,'createdAt',string))return false;
  if(!['receipts','drafts','events','choices','prepared'].every(k=>plain(b[k])))return false;
  for(const [taskId,r] of Object.entries(b.receipts)){if(!byTask.has(taskId)||!plain(r)||r.id!==taskId+'-used'||!answers(r.answers)||!markers(r.support)||!optional(r,'usedAt',string)||!optional(r,'source',string)||!optional(r,'scenePackets',packets))return false;}
  for(const [taskId,d] of Object.entries(b.drafts)){const t=byTask.get(taskId);if(!t||!plain(d)||!answers(d.answers)||!markers(d.help)||!optional(d,'openHelp',n=>integer(n,0,6))||!optional(d,'scenePackets',packets))return false;if(own(d,'guideProgress')){if(!plain(d.guideProgress))return false;for(const [level,n] of Object.entries(d.guideProgress)){if(!/^[1-6]$/.test(level))return false;const length=level==='6'?t.guideSteps.length:t.guideSteps.filter(s=>s.level===Number(level)).length;if(!integer(n,0,length-1))return false;}}}
  if(!Object.entries(b.events).every(([id,e])=>eventIds.has(id)&&plain(e)&&e.id===id&&optional(e,'label',string)&&optional(e,'reply',a=>Array.isArray(a)&&a.every(string))&&optional(e,'at',string)))return false;
  if(!Object.entries(b.choices).every(([id,v])=>choiceIds.has(id)&&typeof v==='boolean'))return false;
  if(!optional(b,'chosenDay',day)||!optional(b,'importedProlog',v=>typeof v==='boolean')||!optional(b.prepared,'chapter',v=>chapterIds.has(v))||!optional(b.prepared,'chosenDay',day))return false;
  if(own(b.prepared,'chosenDay')&&!chapterIds.has(b.prepared.chapter))return false;
  if(own(b,'resumePoint')&&(!navigationShape(b.resumePoint)||!activeIntro(b.resumePoint,b)))return false;
  const frontier=b.resumePoint||b,late=['K07','K08'].includes(frontier.chapter);if((b.receipts['K06-U03']||(b.kind==='full'&&late))&&!day(b.chosenDay))return false;if(b.kind==='teaching'&&late&&!day(b.chosenDay)&&!day(b.prepared.chosenDay))return false;
  if(!activeIntro(b,b))return false;
  if(own(b,'reading')){if(!plain(b.reading))return false;const bounds=readingBounds(b);if(!Object.entries(b.reading).every(([key,n])=>bounds.has(key)&&integer(n,0,bounds.get(key)-1)))return false;}
  return true;
 }
 function validCampaign(v){try{return S.jsonSafe(v)&&plain(v)&&v.version===2&&plain(v.branches)&&own(v,'active')&&(v.active===null||(string(v.active)&&own(v.branches,v.active)))&&Object.entries(v.branches).every(([id,b])=>validBranch(b,id));}catch{return false}}
 function restoreNavigation(b,p){if(!navigationShape(p))return false;const proposed={...b};for(const k of ['chapter','taskIndex','screen'])proposed[k]=p[k];for(const k of ['introStep','introBeat','afterStep']){if(own(p,k))proposed[k]=p[k];else delete proposed[k];}delete proposed.resumePoint;if(!validBranch(proposed,proposed.id))return false;for(const k of ['chapter','taskIndex','screen'])b[k]=proposed[k];for(const k of ['introStep','introBeat','afterStep']){if(own(proposed,k))b[k]=proposed[k];else delete b[k];}delete b.resumePoint;return true;}
 globalThis.NattlinjenState={validCampaign,validBranch,navigationShape,activeIntro,restoreNavigation,readingBounds,choiceIds,eventIds};
})();
