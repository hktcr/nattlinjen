'use strict';
// R4 supplement 10: active, persistent answer steps. No solution is inserted.
(()=>{
const tasks=(globalThis.NATTLINJEN_PARTS||[]).flatMap(c=>c.tasks), guides={};
const ok=()=>({ok:true,message:'Den här delen stämmer.'}),bad=(message,field)=>({ok:false,message,field});
const num=(id,label,unit)=>({id:'guide_'+id,label,type:'number',step:'any',unit});
const time=(id,label)=>({id:'guide_'+id,label,type:'time'});
const text=(id,label)=>({id:'guide_'+id,label,type:'text'});
const select=(id,label,options)=>({id:'guide_'+id,label,type:'select',options:options.map(v=>({value:String(v),label:String(v)}))});
let t,steps;
function begin(id){t=tasks.find(t=>t.id===id);if(!t)throw Error('Missing task '+id);steps=[];guides[id]=steps;t.guideSteps=steps;for(let i=0;i<2;i++)steps.push({level:i+1,text:t.help[i],fields:[],readOnly:true,check:ok});}
function add(level,description,fields,check,extraFields=[]){steps.push({level,text:description,fields,extraFields,check});}
function values(level,description,expected,extras=[]){const task=t;add(level,description,Object.keys(expected),a=>{for(const [id,value]of Object.entries(expected)){if(a[id]===undefined||String(a[id]).trim()==='')return bad('Den här delen är inte ifylld ännu.',id);const valid=typeof value==='number'?N(a[id])===value:Array.isArray(value)?value.includes(a[id]):a[id]===value;if(!valid)return bad('Kontrollera '+(extras.find(f=>f.id===id)||task.fields.find(f=>f.id===id)||{label:id}).label+'. '+description,id);}return ok();},extras);}
function clockStep(level,description,id,minutes,extra){add(level,description,[id],a=>T(a[id])===minutes?ok():bad(String(a[id]||'').trim()?'Kontrollera klockslaget. '+description:'Den här delen är inte ifylld ännu.',id),extra?[extra]:[]);}
function calc(level,description,id,label,value,unit){values(level,description,{['guide_'+id]:value},[num(id,label,unit)]);}
function finish(description){const task=t;add(6,description||task.help[5],task.fields.map(f=>f.id),(a,c)=>task.validate(a,c));}
function subset(level,description,keys,defaults={}){const task=t;add(level,description,keys,(a,c)=>task.validate({...defaults,...Object.fromEntries(keys.filter(k=>a[k]!==undefined).map(k=>[k,a[k]]))},c));}
function converted(level,description,id,unitId,unitValues){add(level,description,[id,unitId],a=>Object.hasOwn(unitValues,a[unitId])&&N(a[id])===unitValues[a[unitId]]?ok():bad('Kontrollera talet och enheten. '+description,id));}
// All placement bounds and overlaps use exact rational comparisons, never rounded SVG coordinates.
const rational=v=>{const s=String(v??'').trim().replace('−','-').replace(',','.');let m;if(s.length>300)return null;if((m=s.match(/^([+-]?\d+)\/([+]?[1-9]\d*)$/)))return [BigInt(m[1]),BigInt(m[2])];if((m=s.match(/^([+-]?)(\d+)(?:\.(\d+))?$/))){const d=m[3]||'';return [BigInt((m[1]==='-'?'-':'')+m[2]+d),10n**BigInt(d.length)];}return null;};
const rq=n=>[BigInt(n),1n],radd=(a,b)=>[a[0]*b[1]+b[0]*a[1],a[1]*b[1]],rlt=(a,b)=>a[0]*b[1]<b[0]*a[1];
const req=(v,n)=>{const a=rational(v);return !!a&&a[0]===BigInt(n)*a[1];};
function rectStep(level,description,ids,config){const fields=ids.flatMap(id=>[id+config.x,id+config.y,id+config.o]);add(level,description,fields,a=>{const rs=[];for(const id of ids){const x=rational(a[id+config.x]),y=rational(a[id+config.y]),o=a[id+config.o];if(!x||!y||!config.os.includes(o))return bad('Ange koordinater och orientering för '+id+'.',id+config.x);const [w,h]=config.size(id,o),right=radd(x,rq(w)),top=radd(y,rq(h));if(rlt(x,rq(0))||rlt(y,rq(0))||rlt(rq(config.w),right)||rlt(rq(config.h),top))return bad(id+' går utanför området. Kontrollera dess fyra kanter.',id+config.x);if(config.middle&&rlt(y,rq(3))&&rlt(rq(1),top))return bad(id+' går in i mittremsan 1<y<3.',id+config.y);if(rs.some(r=>rlt(x,r.right)&&rlt(r.x,right)&&rlt(y,r.top)&&rlt(r.y,top)))return bad(id+' överlappar ett redan placerat föremål.',id+config.x);rs.push({x,y,right,top});}return ok();});}
const packages={x:'x',y:'y',o:'o',os:['0','90'],w:30,h:20,size:(id,o)=>o==='0'?[10,20]:[20,10]};
const deck={x:'x',y:'y',o:'orientation',os:['0','90'],w:6,h:4,size:(id,o)=>o==='0'?[6,id==='S'?2:1]:[id==='S'?2:1,6]};
const tables={x:'x',y:'y',o:'orientation',os:['horizontal','vertical'],w:6,h:4,middle:true,size:(id,o)=>o==='horizontal'?[2,1]:[1,2]};

begin('K01-U01');
calc(3,'Dela de 24 markörerna i åtta lika stora grupper. Hur många paket finns i en grupp?','group','Paket per åttondel',3,'paket');
calc(4,'Markera Rännans andel genom att ange hur många av de åtta grupperna som tillhör Rännan.','rannanGroups','Rännans grupper av åtta',3);
calc(4,'Hur många åttondelar motsvarar Kajverkstadens fjärdedel av ursprungliga 24?','kajGroups','Kajverkstadens grupper av åtta',2);
values(5,'Räkna paketen i Rännans tre grupper och skriv antalet.',{rannan:9});
values(5,'Räkna Kajverkstadens andel av de ursprungliga 24 paketen.',{kaj:6});
values(6,'För de återstående paketen till Strand och skriv antalet.',{strand:9});
calc(6,'Addera alla tre mottagarnas antal paket.','sum','Summan av mottagarnas paket',24,'paket');finish();

begin('K01-U02');
values(3,'Välj orientering för paket 1. Du kan använda remsmodellen eller en annan giltig packning.',{p1o:['0','90']});
calc(4,'Separat modellsteg: när 20 cm-sidan ligger längs lådans 20 cm-sida, hur stor bredd använder paketet? Detta låser inte din packning.','packageWidth','Bredd i det separata exemplet',10,'cm');
rectStep(5,'Placera första paketet. (0,0) med långsidan uppåt är ett möjligt exempel, inte ett krav.',['p1'],packages);
rectStep(5,'Placera paket 2 utan överlapp eller kanter utanför lådan.',['p1','p2'],packages);
rectStep(5,'Placera paket 3 och kontrollera samtliga kanter och överlapp.',['p1','p2','p3'],packages);
values(6,'Dela Rännans 9 paket i grupper om tre och skriv antalet lådor.',{rannan:3});
values(6,'Gör samma sak med Kajverkstadens 6 paket.',{kaj:2});
values(6,'Gör samma sak med Strands 9 paket.',{strand:3});finish();

begin('K01-U03');
clockStep(3,'Lägg fem minuters marginal före avgången 10.15. Skriv senaste tid vid bryggan.','arrival',610);
clockStep(4,'Räkna bakåt från bryggan genom sista promenadens 20 minuter.','guide_beforeLast',590,time('beforeLast','Tid före sista promenaden'));
clockStep(5,'Dra bort överlämningens 15 minuter.','guide_beforeHandover',575,time('beforeHandover','Tid före överlämningen'));
clockStep(5,'Dra bort första promenadens 10 minuter och skriv senaste start.','start',565);
clockStep(6,'Kontrollera framåt: vilken tid är det efter första promenadens 10 minuter?','guide_forward1',575,time('forward1','Efter första promenaden'));
clockStep(6,'Fortsätt framåt genom överlämningens 15 minuter.','guide_forward2',590,time('forward2','Efter överlämningen'));finish();

begin('K02-U01');
calc(3,'Fyll omvandlingsradens första steg för väg A: modellmåttet 3,0 cm gånger 500 ger verkliga centimeter.','aCm','Väg A, verkliga centimeter',1500,'cm');
calc(4,'Omvandla sedan väg A:s centimeterresultat till meter.','aM','Väg A, verkliga meter',15,'m');
calc(5,'Pröva samma samband på en separat 2 cm-sträcka. Hur många verkliga centimeter blir det?','exampleCm','Exempel 2 modell-cm: verkliga centimeter',1000,'cm');
calc(5,'Byt enhet för den separata 2 cm-sträckan till meter.','exampleM','Exempel 2 modell-cm: verkliga meter',10,'m');
converted(5,'Skriv väg A:s verkliga längd med vald enhet.','a','aUnit',{m:15,cm:1500});
calc(5,'Multiplicera väg B:s 4,8 modell-cm med 500.','bCm','Väg B, verkliga centimeter',2400,'cm');
converted(5,'Byt enhet och skriv väg B:s verkliga längd.','b','bUnit',{m:24,cm:2400});
values(6,'Jämför båda längderna med rullens 20 meter. Välj den väg som kan täckas helt.',{route:'A'});finish();

begin('K02-U02');
values(3,'Markera uppgiftens mål, inte exemplet (2,1). Skriv målpunktens x-koordinat.',{x:4});
values(4,'Följ de tre uppåtstegen och skriv målpunktens y-koordinat.',{y:3});
values(5,'Välj en öppen gång: C via (4,0) eller D via (0,3).',{route:['C','D']});
values(5,'Markera starten i din valda gång genom att ange dess koordinater.',{guide_startX:0,guide_startY:0},[num('startX','Startens x'),num('startY','Startens y')]);
add(5,'Markera din valda gångs mellanpunkt.', ['route','guide_viaX','guide_viaY'],a=>{const target=a.route==='C'?[4,0]:a.route==='D'?[0,3]:null;return target&&N(a.guide_viaX)===target[0]&&N(a.guide_viaY)===target[1]?ok():bad('Använd mellanpunkten som hör till din valda gång.','guide_viaX');},[num('viaX','Mellanpunkt x'),num('viaY','Mellanpunkt y')]);
values(5,'Markera målet sist i ordningen: start, mellanpunkt, mål.',{x:4,y:3});
for(const [id,label,index]of [['leg1','Första delens längd',0],['leg2','Andra delens längd',1]])add(6,'Räkna '+label.toLowerCase()+' för din valda gång.',['route','guide_'+id],a=>N(a['guide_'+id])===(a.route==='C'?[4,3]:a.route==='D'?[3,4]:[])[index]?ok():bad('Räkna stegen i just denna del av din valda gång.','guide_'+id),[num(id,label,'modell-m')]);finish();

begin('K02-U03');
calc(3,'Fyll O:s rad: multiplicera dess 7,5 cm med dess egen skalfaktor 200.','oCm','O: verkliga centimeter',1500,'cm');
values(3,'Gör om O:s centimeterresultat till meter.',{o:15});
calc(3,'Fyll K:s rad: multiplicera dess 3,0 cm med dess egen skalfaktor 500.','kCm','K: verkliga centimeter',1500,'cm');
values(3,'Gör om K:s centimeterresultat till meter.',{k:15});
values(4,'Jämför resultaten. Är de förenliga med samma verkliga längd?',{same:'yes'});
values(5,'Beräkna O:s kartlängd delad med K:s kartlängd. Faktorn ska förstora K.',{factor:2.5});finish();

begin('K03-U01');
calc(3,'Fyll A:s lådavgift: antal lådor gånger pris per låda. Grundkostnaden hör till en separat del.','feeA','A: lådavgift',64,'mynt');
values(4,'Lägg A:s grundkostnad till lådavgiften en gång.',{a:184});
calc(5,'Fyll B:s lådavgift för samma åtta lådor.','feeB','B: lådavgift',112,'mynt');
values(5,'Lägg B:s grundkostnad till dess lådavgift en gång.',{b:142});
values(6,'Välj det lägre totalpriset för åtta lådor.',{choice:'B'});
values(6,'Dra det lägre totalpriset från det högre.',{difference:42});finish();

begin('K03-U02');
const cell=(a,id)=>[N(a[id+'c']),N(a[id+'r'])];
const cellValid=([c,r])=>Number.isInteger(c)&&c>=1&&c<=4&&Number.isInteger(r)&&r>=1&&r<=2;
const side=(p,q)=>Math.abs(p[0]-q[0])+Math.abs(p[1]-q[1])===1;
add(3,'Välj M1:s cell i främre raden. (1,1) är en möjlig start, inte ett krav.',['M1c','M1r'],a=>cellValid(cell(a,'M1'))&&N(a.M1r)===1?ok():bad('M1 ska stå i en cell i främre raden.','M1r'));
add(4,'Välj M2:s plats i främre raden, på en annan cell än M1.',['M1c','M1r','M2c','M2r'],a=>cellValid(cell(a,'M1'))&&cellValid(cell(a,'M2'))&&N(a.M1r)===1&&N(a.M2r)===1&&N(a.M1c)!==N(a.M2c)?ok():bad('M1 och M2 behöver olika celler i främre raden.','M2c'));
for(const id of ['M1','M2'])add(5,'Markera sidogrannarna till '+id+' genom att skriva deras koordinater, till exempel (2,1); (1,2). Hörnkontakt räknas inte.',['guide_neighbors'+id,id+'c',id+'r'],a=>{const p=cell(a,id);const s=String(a['guide_neighbors'+id]||'');const found=[...s.matchAll(/\(?\s*([1-4])\s*,\s*([1-2])\s*\)?/g)].map(m=>m[1]+','+m[2]);const expected=[];for(let x=1;x<=4;x++)for(let y=1;y<=2;y++)if(side(p,[x,y]))expected.push(x+','+y);return cellValid(p)&&found.length===expected.length&&new Set(found).size===found.length&&expected.every(k=>found.includes(k))?ok():bad('Skriv precis cellerna som delar sida med '+id+'. Titta på den valda cellen i rutnätet.','guide_neighbors'+id);},[text('neighbors'+id,id+': sidogrannars koordinater')]);
add(6,'Placera L på en ledig cell som inte delar sida med någon M-låda.',['M1c','M1r','M2c','M2r','Lc','Lr'],a=>{const l=cell(a,'L'),ms=['M1','M2'].map(id=>cell(a,id));return cellValid(l)&&ms.every(p=>cellValid(p)&&p[1]===1&&!side(l,p)&&!(p[0]===l[0]&&p[1]===l[1]))?ok():bad('L behöver en annan cell som inte delar sida med M1 eller M2. Flytta en upptagen låda eller välj en annan plats.','Lc');});
for(const [i,id]of ['K1','K2','S1','S2','S3'].entries()){
const ids=['M1','M2','L',...['K1','K2','S1','S2','S3'].slice(0,i+1)];
add(6,'Placera '+id+' i en ledig cell. Varje låd-ID ska finnas exakt en gång.',ids.flatMap(id=>[id+'c',id+'r']),a=>{const occupied=new Set();for(const name of ids){const p=cell(a,name);if(!cellValid(p))return bad('Ange en giltig cell för '+name+'.',name+'c');const key=p.join(',');if(occupied.has(key))return bad('Två lådor står i cellen ('+key+'). Flytta en eller välj en annan ledig plats.',name+'c');occupied.add(key);}return ok();});
}finish();

begin('K03-U03');
calc(3,'Markera den del av 12 km som återstår efter första 8 km.','remainingKm','Återstående sträcka',4,'km');
values(4,'Dela hela sträckan med hastigheten och skriv tiden i timmar.',{hours:1.5});
calc(5,'Hur stor del av en timme behövs för den återstående sträckan?','remainingHour','Tid för den återstående sträckan',0.5,'h');
calc(5,'Omvandla den återstående timdelen med 60 minuter per timme.','remainingMin','Återstående timdel i minuter',30,'min');
values(6,'Lägg ihop hela restiden i minuter.',{minutes:90});
clockStep(6,'Lägg minuterna till avgången 12.00 och skriv planerad ankomst.','arrival',810);finish();

begin('K04-U01');
values(3,'Välj första måttet i tabellen: D-L:s längd. Skriv ritningsmåttet.',{guide_firstMeasure:12},[num('firstMeasure','D-L:s längd på ritningen','cm')]);
calc(4,'Multiplicera första ritningsmåttet med 50. Enheten är fortfarande centimeter.','firstCm','D-L:s längd, verkliga centimeter',600,'cm');
calc(5,'Byt första centimeterresultatet till meter innan du fortsätter.','firstM','D-L:s längd, verkliga meter',6,'m');
for(const id of ['L','S','K'])for(const axis of ['length','width'])converted(6,'Fyll D-'+id+':s '+(axis==='length'?'längd':'bredd')+' i vald enhet.',id+axis,'unit',{m:axis==='length'?6:id==='S'?2:1,cm:axis==='length'?600:id==='S'?200:100});finish();

begin('K04-U02');
calc(3,'Jämför remsorna genom att lägga ihop deras höjder 1 m, 2 m och 1 m.','bandHeight','Remsornas sammanlagda höjd',4,'m');
values(4,'Välj vilken del du vill lägga först. Alla ordningar är tillåtna.',{guide_firstBand:['L','S','K']},[select('firstBand','Första delens ID',['L','S','K'])]);
add(5,'Placera den valda första delen längst ned, över hela bredden. Andra ordningar är lika giltiga.',['guide_firstBand',...['L','S','K'].flatMap(id=>[id+'x',id+'y',id+'orientation'])],a=>{const id=a.guide_firstBand;return ['L','S','K'].includes(id)&&req(a[id+'x'],0)&&req(a[id+'y'],0)&&a[id+'orientation']==='0'?ok():bad('Den valda första delen ska börja vid nederkanten och täcka bredden.','guide_firstBand');});
add(5,'Läs den första delens överkant. Där ska nästa del börja.',['guide_firstBand','guide_firstTop'],a=>N(a.guide_firstTop)===(a.guide_firstBand==='S'?2:['L','K'].includes(a.guide_firstBand)?1:null)&&N(a.guide_firstTop)!==null?ok():bad('Överkanten är nederkant plus delens höjd.','guide_firstTop'),[num('firstTop','Första delens överkant','m')]);
values(5,'Välj vilken av de återstående delarna du vill lägga som andra band.',{guide_secondBand:['L','S','K']},[select('secondBand','Andra delens ID',['L','S','K'])]);
// The selected identity must differ; do not whitelist one example ordering.
steps[steps.length-1].check=a=>['L','S','K'].includes(a.guide_secondBand)&&a.guide_secondBand!==a.guide_firstBand?ok():bad('Välj en annan del än den första.','guide_secondBand');
add(5,'Lägg andra bandets nederkant vid den första delens överkant.', ['guide_firstBand','guide_secondBand',...['L','S','K'].flatMap(id=>[id+'x',id+'y',id+'orientation'])],a=>{const first=a.guide_firstBand,second=a.guide_secondBand;if(!['L','S','K'].includes(first)||!['L','S','K'].includes(second)||first===second)return bad('Välj två olika delar.','guide_secondBand');const top=first==='S'?2:1;return req(a[first+'x'],0)&&req(a[first+'y'],0)&&a[first+'orientation']==='0'&&req(a[second+'x'],0)&&req(a[second+'y'],top)&&a[second+'orientation']==='0'?ok():bad('Andra delen ska möta första delens överkant utan överlapp.',second+'y');});
rectStep(5,'Avsluta med tredje delen. Kontrollera hela täckningen utan glipor eller överlapp.',['L','S','K'],deck);
values(6,'Beräkna hela rektangelns area.',{area:24});values(6,'Gå runt ytterkanten och skriv omkretsen.',{perimeter:20});finish();

begin('K04-U03');
calc(3,'Fyll förbrukningen för första strykningen av 24 m².','coat1','Första strykningen',3.6,'liter');
calc(3,'Fyll förbrukningen för andra strykningen av samma yta.','coat2','Andra strykningen',3.6,'liter');
converted(4,'Multiplicera yta, förbrukning och antal strykningar. Skriv totalen i vald enhet.','volume','unit',{liter:7.2,ml:7200});
values(5,'Lägg till hela burkar tills deras mängd räcker. Skriv minsta antalet.',{cans:3});
calc(6,'Kontrollera mängden i en burk färre än ditt val.','fewerLiters','Mängd med en burk färre',5,'liter');
calc(6,'Beräkna hur mycket de valda hela burkarna innehåller tillsammans.','availableLiters','Burkarnas sammanlagda mängd',7.5,'liter');finish();

begin('K05-U01');
for(const [id,label,start,end]of [['larkan','Lärkan',540,780],['sommen','Sömmen',600,870],['kilen','Kilen',660,900]]){clockStep(3,'Markera '+label+'s intervall: ange ankomsten.','guide_'+id+'Start',start,time(id+'Start',label+': ankomst'));clockStep(3,'Markera '+label+'s intervall: ange avfärden.','guide_'+id+'End',end,time(id+'End',label+': avfärd'));}
clockStep(4,'Välj den senaste av de tre ankomsterna som gemensam start.','start',660);
clockStep(5,'Välj den tidigaste avfärden som gemensamt slut.','end',780);
converted(5,'Räkna tiden mellan gränserna i vald tidsenhet.','duration','unit',{timmar:2,minuter:120});finish();

begin('K05-U02');
values(3,'Lägg alla fem värden i stigande ordning. Skriv dem separerade med semikolon.',{guide_sorted:'3;4;4;5;24'},[text('sorted','Sorterade värden (semikolon mellan)')]);
// Whitespace is immaterial to the ordered list, not to the evidence in it.
steps[2].check=a=>String(a.guide_sorted||'').replace(/\s/g,'')==='3;4;4;5;24'?ok():bad('Behåll alla fem värden i stigande ordning, med semikolon mellan.','guide_sorted');
calc(3,'Markera listans minsta värde.','min','Minsta värde',3,'dagar');
calc(3,'Markera listans största värde.','max','Största värde',24,'dagar');
values(4,'Medianen är mittvärdet. Skriv medianen.',{median:4});
calc(5,'Summera alla fem värden utan att stryka den långa perioden.','sum','Summa av fem perioder',40,'dagar');
values(5,'Dela summan med fem och skriv medelvärdet.',{mean:8});
values(5,'Beräkna största minus minsta och skriv variationsbredden.',{range:21});finish();

begin('K05-U03');
for(const [id,dock,latest,depart,arrival]of [['A',550,568,570,585],['B',560,563,565,575],['C',555,548,610,620]]){
clockStep(3,'Väg '+id+': lägg gångtiden till 09.00 och fyll ankomst till bryggan.','guide_dock'+id,dock,time('dock'+id,'Väg '+id+': bryggankomst'));
clockStep(4,'Väg '+id+': dra två minuter från första angivna avgången och fyll sista tillåtna bryggankomst.','guide_latest'+id,latest,time('latest'+id,'Väg '+id+': sista bryggankomst för första avgången'));
clockStep(5,'Väg '+id+': välj avgången du faktiskt hinner. Om den första missas, använd nästa angivna.','guide_depart'+id,depart,time('depart'+id,'Väg '+id+': användbar avgång'));
clockStep(5,'Väg '+id+': lägg båttiden efter den användbara avgången och skriv slutankomst.','arrival'+id,arrival);
}finish();

begin('K06-U01');
calc(3,'Beräkna första katetkvadraten: 8².','square8','Första katetkvadraten',64,'mm²');
calc(3,'Beräkna andra katetkvadraten: 6².','square6','Andra katetkvadraten',36,'mm²');
calc(4,'Addera katetkvadraterna för att få d².','squareSum','Summan av katetkvadraterna',100,'mm²');
converted(5,'Sök det icke-negativa avstånd vars kvadrat blir summan. Skriv avstånd och längdenhet.','distance','unit',{mm:10,cm:1});
calc(6,'Kontrollera genom att uttrycka avståndet i mm och kvadrera det.','distanceSquare','Avståndets kvadrat i mm²',100,'mm²');finish();

begin('K06-U02');
calc(3,'I modellen x+x+x+2: hur många lika x-delar finns?','xParts','Antal lika provbitar',3);
calc(4,'Ta bort den enda fliken från totalen. Hur långa är de tre provbitarna tillsammans?','usable','Tre provbitar tillsammans',39,'cm');
subset(5,'Välj eller skriv en ekvation som beskriver tre lika bitar och en enda flik.',['equation','customEquation'],{length:'13',check:'41'});
values(5,'Dela den användbara längden med tre. Skriv en provbits längd.',{length:13});
values(6,'Sätt in x i tre lika bitar och lägg till den enda fliken. Skriv kontrollsumman.',{check:41});finish();

begin('K06-U03');
for(const [id,k1,k2,s1,s2,m]of [['A',600,780,720,900,660],['B',540,720,600,840,570],['C',660,900,720,960,780]])for(const [key,label,value]of [['kajStart','Kaj start',k1],['kajEnd','Kaj slut',k2],['strandStart','Strand start',s1],['strandEnd','Strand slut',s2],['material','Material klart',m]])clockStep(3,'Markera dag '+id+': '+label+' på tidsskalan.','guide_'+id+key,value,time(id+key,'Dag '+id+': '+label));
for(const [id,start,end,length]of [['A',720,780,60],['B',600,720,120],['C',780,900,120]]){clockStep(4,'Dag '+id+': behåll bara överlappet där materialet redan är klart. Skriv starten.','guide_usableStart'+id,start,time('usableStart'+id,'Dag '+id+': användbar start'));clockStep(4,'Dag '+id+': skriv det användbara intervallets slut.','guide_usableEnd'+id,end,time('usableEnd'+id,'Dag '+id+': användbart slut'));calc(5,'Mät dag '+id+':s återstående intervall i minuter.','usableMinutes'+id,'Dag '+id+': tillgänglig tid',length,'min');}finish();

begin('K07-U01');
calc(3,'Räkna A:s kolliavgift för de 18 nya kollina. Håll grundavgift och material som separata delar.','feeA','A: kolliavgift',144,'mynt');
calc(3,'Räkna B:s kolliavgift för samma 18 kollin.','feeB','B: kolliavgift',252,'mynt');
values(4,'Räkna A:s transport och lägg till materialets 60 mynt.',{totalA:324});
values(4,'Räkna B:s transport och lägg till samma materialkostnad.',{totalB:342});
values(5,'Jämför A:s total med 330. Återstår eller saknas pengar?',{statusA:'återstår'});
values(5,'Skriv skillnaden för A.',{differenceA:6});
values(5,'Jämför B:s total med 330. Återstår eller saknas pengar?',{statusB:'saknas'});
values(5,'Skriv skillnaden för B.',{differenceB:12});finish();

begin('K07-U02');
values(3,'Markera de två tillåtna banden genom att ange deras nederkanter.',{guide_lowerBand:0,guide_upperBand:3},[num('lowerBand','Nedre bandets nederkant','m'),num('upperBand','Övre bandets nederkant','m')]);
values(4,'Välj en orientering för bord A som ryms i ett 1 m högt band.',{Aorientation:'horizontal'});
for(let i=1;i<=4;i++)rectStep(5,'Placera bord '+['A','B','C','D'][i-1]+'. Kontrollera dess kanter mot området, mittremsan och tidigare bord.',['A','B','C','D'].slice(0,i),tables);
values(6,'Beräkna de fyra bordens sammanlagda area.',{tableArea:8});values(6,'Dra bordens area från hela områdets area.',{freeArea:16});finish();

begin('K07-U03');
const stations=['Mät','Modell','Pröva'];
for(let round=1;round<=3;round++){const ids=[0,1,2].map(g=>'r'+round+'g'+g);add(round===1?3:4,'Fyll runda '+round+': ge grupperna olika stationer. Ingen grupp får upprepa en station från tidigare runda.',ids,a=>{const row=ids.map(id=>a[id]);if(row.some(s=>!stations.includes(s))||new Set(row).size!==3)return bad('Varje grupp behöver en egen station i denna runda.',ids[0]);for(let g=0;g<3;g++){const v=Array.from({length:round},(_,i)=>a['r'+(i+1)+'g'+g]);if(v.some(s=>!stations.includes(s))||new Set(v).size!==round)return bad('Gruppen får inte upprepa en station.','r'+round+'g'+g);}return ok();});}
for(let g=0;g<3;g++)add(5,'Kontrollera grupp '+['Grön','Rund','Rand'][g]+': den ska ha besökt alla tre stationer.',[1,2,3].map(r=>'r'+r+'g'+g),a=>new Set([1,2,3].map(r=>a['r'+r+'g'+g]).filter(s=>stations.includes(s))).size===3?ok():bad('Gruppkolumnen behöver alla tre stationer, var och en en gång.','r1g'+g));
values(5,'Räkna de tre rundornas sammanlagda minuter.',{roundMinutes:60});values(5,'Räkna de två mellanrummen för byten. Inget tredje byte behövs efter sista rundan.',{changeMinutes:10});
values(6,'Skriv rundor plus byten.',{totalMinutes:70});values(6,'Dra också av början och avslut från 120 för att få oplanerad tid.',{remainingMinutes:30});finish();

begin('K08-U01');
calc(3,'Jämför 1, 2 och 3 rutor. Markera hur många nya remsor som tillkommer när nästa ruta delar en sida.','newStrips','Nya remsor per följande ruta',3,'remsor');
values(4,'Välj en regel med första rutans fyra remsor och samma tillägg för varje följande ruta. Båda likvärdiga skrivsätten är tillåtna.',{rule:['3n+1','4+3(n-1)']});
values(5,'Fyll tabellen för en ruta.',{one:4});values(5,'Fyll tabellen för två rutor.',{two:7});values(5,'Fyll tabellen för tre rutor.',{three:10});
values(6,'Använd regeln för tolv rutor.',{twelve:37});values(6,'Dra behovet från de 40 remsorna.',{left:3});finish();

begin('K08-U02');
for(const [id,valuesIn,min]of [['A',[2,1,-.5,1],-.5],['B',[1,.8,.5,.7],.5],['C',[.5,.2,.4,.8],.2]]){values(3,'Placera modell '+id+':s fyra provvärden på tallinjen genom att skriva dem i stigande ordning (semikolon mellan).',{['guide_sorted'+id]:''},[text('sorted'+id,'Modell '+id+': stigande provvärden')]);const field='guide_sorted'+id,expected=[...valuesIn].sort((a,b)=>a-b);steps[steps.length-1].check=a=>{const list=String(a[field]||'').split(';').map(N);return list.length===4&&list.every((n,i)=>n===expected[i])?ok():bad('Behåll alla fyra provvärden, även lika värden. Ordna dem på tallinjen.',field);};values(3,'Markera modell '+id+':s minsta värde.',{['min'+id]:min});}
values(4,'Jämför varje minimum med 0,5 mm. Välj den modell som klarar kravet i alla fyra punkter.',{model:'B'});
for(const [angle,v]of [[0,1],[30,.8],[60,.5],[90,.7]])calc(5,'Kontrollera vald modell B vid '+angle+'°: skriv frigången och jämför med minst 0,5 mm.','clearance'+angle,'B vid '+angle+'°',v,'mm');finish();

begin('K08-U03');
calc(3,'Räkna delsumman för de nio som gjorde tre arbeten var.','nine','9 deltagare gånger 3 arbeten',27,'arbeten');calc(3,'Räkna delsumman för de två som gjorde två arbeten var.','two','2 deltagare gånger 2 arbeten',4,'arbeten');calc(3,'Räkna delsumman för den som gjorde ett arbete.','one','1 deltagare gånger 1 arbete',1,'arbete');
values(3,'Jämför med möjliga arbeten: tolv personer gånger tre stationer.',{possible:36});
add(4,'Lägg R:s två arbeten i olika pass.',['R_Mat','R_Prova'],a=>['1','2'].includes(a.R_Mat)&&['1','2'].includes(a.R_Prova)&&a.R_Mat!==a.R_Prova?ok():bad('R kan inte arbeta vid två stationer i samma pass.','R_Prova'));
add(4,'Lägg P vid Mät när stationen är ledig.',['R_Mat','P_Mat'],a=>['1','2'].includes(a.P_Mat)&&['1','2'].includes(a.R_Mat)&&a.P_Mat!==a.R_Mat?ok():bad('P och R behöver olika pass vid Mät.','P_Mat'));
values(4,'Lägg Q vid Modell i något av passen. Båda är möjliga.',{Q_Modell:['1','2']});
values(5,'Addera delsummorna och skriv genomförda arbeten före stödet.',{completed:32});values(5,'Räkna återstående arbeten. Alla fyra ska finnas i planen.',{remaining:4});
values(6,'Skriv den förkortade andelen av ursprungligen genomförda arbeten: täljaren.',{numerator:8});values(6,'Skriv den förkortade andelens nämnare.',{denominator:9});values(6,'Gör om den ursprungliga andelen till procent och avrunda till en decimal.',{percent:88.9});
values(6,'Ange minsta antal stödpassen som behövs.',{passes:2});values(6,'Kontrollera att de två stödpassen tillsammans ryms inom den oplanerade tiden.',{minutes:30});finish();

for(const task of tasks){const list=guides[task.id];if(!list)throw Error('Missing guide '+task.id);for(const [index,step]of list.entries()){step.id=task.id+'-guide-'+index;step.source='manus_R4_10_hjalptext.md / '+task.id;}}
globalThis.NATTLINJEN_GUIDES=guides;
})();
