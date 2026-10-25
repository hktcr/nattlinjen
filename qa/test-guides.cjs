'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const base=path.resolve(__dirname,'../campaign');const ctx={};vm.createContext(ctx);for(const file of ['core.js','chapters-01-03.js','chapters-04-06.js','chapters-07-08.js','guides.js'])vm.runInContext(fs.readFileSync(path.join(base,file),'utf8'),ctx,{filename:file});
const fixtures={
'K01-U01':{group:3,rannanGroups:3,kajGroups:2,sum:24},
'K01-U02':{packageWidth:10},
'K01-U03':{beforeLast:'09:50',beforeHandover:'09:35',forward1:'09:35',forward2:'09:50'},
'K02-U01':{aCm:1500,aM:15,exampleCm:1000,exampleM:10,bCm:2400},
'K02-U02':{startX:0,startY:0,viaX:4,viaY:0,leg1:4,leg2:3},
'K02-U03':{oCm:1500,kCm:1500},
'K03-U01':{feeA:64,feeB:112},
'K03-U02':{neighborsM1:'(2,1);(1,2)',neighborsM2:'(1,1);(3,1);(2,2)'},
'K03-U03':{remainingKm:4,remainingHour:.5,remainingMin:30},
'K04-U01':{firstMeasure:12,firstCm:600,firstM:6},
'K04-U02':{bandHeight:4,firstBand:'L',secondBand:'S',firstTop:1},
'K04-U03':{coat1:3.6,coat2:3.6,fewerLiters:5,availableLiters:7.5},
'K05-U01':{larkanStart:'09:00',larkanEnd:'13:00',sommenStart:'10:00',sommenEnd:'14:30',kilenStart:'11:00',kilenEnd:'15:00'},
'K05-U02':{sorted:'3;4;4;5;24',min:3,max:24,sum:40},
'K05-U03':{dockA:'09:10',latestA:'09:28',departA:'09:30',dockB:'09:20',latestB:'09:23',departB:'09:25',dockC:'09:15',latestC:'09:08',departC:'10:10'},
'K06-U01':{square8:64,square6:36,squareSum:100,distanceSquare:100},
'K06-U02':{xParts:3,usable:39},
'K06-U03':{AkajStart:'10:00',AkajEnd:'13:00',AstrandStart:'12:00',AstrandEnd:'15:00',Amaterial:'11:00',BkajStart:'09:00',BkajEnd:'12:00',BstrandStart:'10:00',BstrandEnd:'14:00',Bmaterial:'09:30',CkajStart:'11:00',CkajEnd:'15:00',CstrandStart:'12:00',CstrandEnd:'16:00',Cmaterial:'13:00',usableStartA:'12:00',usableEndA:'13:00',usableMinutesA:60,usableStartB:'10:00',usableEndB:'12:00',usableMinutesB:120,usableStartC:'13:00',usableEndC:'15:00',usableMinutesC:120},
'K07-U01':{feeA:144,feeB:252},
'K07-U02':{lowerBand:0,upperBand:3},
'K07-U03':{},
'K08-U01':{newStrips:3},
'K08-U02':{sortedA:'-0,5;1;1;2',sortedB:'0,5;0,7;0,8;1',sortedC:'0,2;0,4;0,5;0,8',clearance0:1,clearance30:.8,clearance60:.5,clearance90:.7},
'K08-U03':{nine:27,two:4,one:1}
};
const tasks=ctx.NATTLINJEN_PARTS.flatMap(c=>c.tasks);let checked=0,alternates=0;
assert.equal(tasks.length,24);assert.equal(Object.keys(ctx.NATTLINJEN_GUIDES).length,24);
for(const task of tasks){const steps=task.guideSteps;assert(steps.length>=6,task.id);assert.equal(steps,ctx.NATTLINJEN_GUIDES[task.id]);
const extraFields=steps.flatMap(s=>s.extraFields||[]);const known=new Set([...task.fields,...extraFields].map(f=>f.id));
for(const step of steps){assert.equal(typeof step.check,'function');assert(step.fields.every(id=>known.has(id)),task.id+' unknown field');if(step.level>2){assert(step.fields.length>0);assert.equal(step.check({},{}).ok,false,task.id+' blank accepted: '+step.text);}else assert(step.readOnly);}
for(const example of task.examples.filter(e=>e.ok)){const extras={...fixtures[task.id]};const a={...example.answers,...Object.fromEntries(Object.entries(extras).map(([k,v])=>['guide_'+k,String(v)]))};
if(task.id==='K02-U02'&&a.route==='D')Object.assign(a,{guide_viaX:'0',guide_viaY:'3',guide_leg1:'3',guide_leg2:'4'});
if(task.id==='K03-U02')for(const id of ['M1','M2']){const c=Number(a[id+'c']),r=Number(a[id+'r']);const list=[];for(let x=1;x<=4;x++)for(let y=1;y<=2;y++)if(Math.abs(x-c)+Math.abs(y-r)===1)list.push('('+x+','+y+')');a['guide_neighbors'+id]=list.join(';');}
if(task.id==='K04-U02'){const bottom=['L','S','K'].find(id=>Number(a[id+'y'])===0);a.guide_firstBand=bottom;a.guide_firstTop=bottom==='S'?'2':'1';a.guide_secondBand=['L','S','K'].find(id=>id!==bottom&&Number(a[id+'y'])===Number(a.guide_firstTop));}
for(const step of steps){const before=JSON.stringify(a);const result=step.check(a,example.context||{});assert.equal(result.ok,true,task.id+' '+step.text+' → '+result.message);assert.equal(JSON.stringify(a),before,'Guide mutated answers');checked++;}
alternates++;
}
for(const example of task.examples.filter(e=>!e.ok))assert.equal(steps.at(-1).check(example.answers,example.context||{}).ok,false,task.id+' final bypass');
}
// A guide that checks a mathematical stage must reject its own missing/incorrect input.
for(const task of tasks){const example=task.examples.find(e=>e.ok),baseA={...example.answers,...Object.fromEntries(Object.entries(fixtures[task.id]).map(([k,v])=>['guide_'+k,String(v)]))};for(const step of task.guideSteps.filter(s=>s.level>2)){for(const f of step.extraFields||[]){const a={...baseA,[f.id]:''};assert.equal(step.check(a,example.context||{}).ok,false,task.id+' skipped '+f.id);}}}
const board=tasks.find(t=>t.id==='K07-U02');const boardA={...board.examples.find(e=>e.ok).answers,Bx:'1.99999999999999999999999999999'};
assert.equal(board.guideSteps.find(s=>s.text.startsWith('Placera bord B.')).check(boardA,{}).ok,false,'Rounded overlap accepted in active step');
const support=tasks.find(t=>t.id==='K08-U03'),supportA={...support.examples.find(e=>e.ok).answers,R_Prova:'2'};
assert.equal(support.guideSteps.find(s=>s.text.startsWith('Lägg R:')).check(supportA,{}).ok,false,'Concurrent R assignments accepted');
console.log(JSON.stringify({tasks:tasks.length,steps:tasks.reduce((n,t)=>n+t.guideSteps.length,0),successfulStepChecks:checked,validSolutionVariants:alternates,blankAndFinalRejection:'passed'},null,2));
