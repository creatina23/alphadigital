'use strict';
(()=>{
 const buttons=[...document.querySelectorAll('[data-stage]')],panels=[...document.querySelectorAll('.stage-panel')],status=document.querySelector('#stage-status');
 function select(id,announce){
  buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.stage===id)));
  panels.forEach(p=>p.hidden=p.id!=='stage-'+id);
  if(announce)status.textContent='Momento selecionado: '+buttons.find(b=>b.dataset.stage===id).textContent.trim();
 }
 buttons.forEach(b=>b.addEventListener('click',()=>select(b.dataset.stage,true)));
 select('comecar',false);document.documentElement.classList.add('growth-ready');
})();
