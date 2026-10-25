'use strict';
// Presentation only. No game-state, assessment, storage, or progress changes.
(()=>{
 const button=document.querySelector('#fullscreenButton');
 const root=document.documentElement;
 const supported=!!(root.requestFullscreen&&document.fullscreenEnabled);
 function update(){const active=!!document.fullscreenElement;button.textContent=active?'Lämna helskärm':'Helskärm';button.setAttribute('aria-pressed',String(active));button.setAttribute('aria-label',active?'Lämna helskärm':'Öppna spelet i helskärm');}
 if(!supported){button.textContent='Skärmläge';button.setAttribute('aria-label','Om skärmläget på den här enheten');}
 button.addEventListener('click',async()=>{
  if(!supported){openModal('Spelet använder hela spelytan','<p>Den här webbläsaren erbjuder inte helskärm för spelet. Spelvärlden fyller ändå den tillgängliga fönsterytan och anpassas när du vrider enheten. Webbläsarens egna fält kan vara kvar.</p><p>Text och spelkontroller går att rulla inom spelytan när de behöver mer plats. Du behöver inte byta orientering.</p>');return;}
  try{if(document.fullscreenElement)await document.exitFullscreen();else await root.requestFullscreen();update();}
  catch{announce('Helskärm kunde inte öppnas. Du kan fortsätta spela i hela den tillgängliga fönsterytan.');}
 });
 document.addEventListener('fullscreenchange',update);
})();
