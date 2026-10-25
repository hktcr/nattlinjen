# Campaign content contract C1
Each file assigns an array to globalThis.NATTLINJEN_PARTS = [...(globalThis.NATTLINJEN_PARTS || []), ...chapters]. Plain JS strict. No DOM/runtime writes. One owner per file.
Chapter: {id:'K01',title,place,intro:[paragraphs],tasks:[Task],outro:[paragraphs]}.
Task: {id:'K01-U01',title,story:[paragraphs],prompt:string,fields:[Field],help:[six strings],after:[paragraphs],validate:(answers,context)=>({ok:boolean,message:string,field?:string}),examples:[{answers:{...},ok:true/false}],diagram?:{kind:'grid'|'rects'|'timeline'|'bars',...}}.
Field: {id,label,type:'number'|'text'|'select'|'time',unit?:string,options?:[{value,label}],min?,max?,step?}. Values always strings. Use strict numeric parser helpers N(value) returns finite numeric or null, T(value) returns minutes or null (HH.MM/HH:MM). Validators may use N/T, but no other engine helpers. Must reject blanks, NaN, negatives when invalid. Decimal comma supported by N. Context includes chosenDay:{day:'B'/'C',start:'10:00',end:'12:00'}, receipts map.
Geometry/arrangement challenges use explicit x/y/orientation fields (keyboard/touch, no dragging required). Diagram: optional function diagram:(answers)=>SVG string derived solely from safely parsed numeric answers; do not show complete correct arrangement before player input. Function takes strings; use N. Prefer SVG scalable viewBox with numeric labels. Rect geometry validators must test all bounds/overlap/conservation, not whitelist example.
Help six actual steps from manuscript; help6 can reveal all method but NEVER automatically complete/apply. All validators require actual player answers; use exact source acceptance including all alternate solutions.
Narrative dialogue: preserve substantive scenes/character arcs and exact given data. Do not turn facit/developer notes into player story. Include all tables needed as prompt text, or extra task.table:{headers:[],rows:[[]]}.
IDs stable. After paragraphs only after explicit used commit. No actual communications. K07-U03 check inherited chosenDay and plan dependencies through context if needed. Fullfield validation and tests owned here. Write sourceNotes with source file / section per task if useful.

## B6: scenlager utan byte av sparformat

Nyckeln `nattlinjen-manus-r4-campaign-v2` och `version: 2` behålls. Äldre B5-grenar och B4-prologimport fungerar utan en omskrivning av befintliga kvitton. Uppgiftsvalidatorer och 281 guidesteg är oförändrade.

Valfria tillägg:

- `draft.scenePackets`: exakt 24 heltal i intervallet −1…2. Indexet är paketets stabila identitet; −1 betyder på bordet, 0 Rännan, 1 Kajverkstaden och 2 Strand. De tre svarsfälten är fortfarande det matematiska underlaget. Manuella antal synkroniserar modellen utan att byta ägare för fler paket än nödvändigt. Ogiltiga antal eller metadata ersätter aldrig ett svar med ett annat tal.
- `receipt.scenePackets`: en kopia vid uttryckligt Använd. Saknas i äldre kvitton; då kan en representativ fördelning byggas från de sparade antalen. Ingen ny användning eller händelse registreras.
- `branch.resumePoint`: `{chapter, taskIndex, screen, introStep, afterStep}` bevarar platsen i resan under återbesök. Återgång återställer denna plats; framtida olösta uppgifter låses inte upp av återbesöket. Saknas normalt och tas bort efter återgång.

Övrig instrumentinspektion (vald vinkel, rundvisning, provklocka, förstorad modell) är tillfällig UI-status, inte ett elevsvar eller ett genomförande. Använda scener hämtar sitt tillstånd från kvittot, inte från denna inspektion. Spela modellfärden ändrar aldrig svar, kvitton eller berättelsehändelser. Minskad rörelse kan avbryta även en pågående uppspelning.
