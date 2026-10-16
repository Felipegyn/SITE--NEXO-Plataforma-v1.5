const $=id=>document.getElementById(id);
const e=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const wa=(t,n)=>'https://wa.me/'+(n||G.whatsapp)+'?text='+encodeURIComponent(t);
const brl=v=>typeof v==='number'?v.toLocaleString('pt-BR',{style:'currency',currency:'BRL'}):'Sob consulta';
function base(){const R=document.documentElement.style;R.setProperty('--ac',G.cor);R.setProperty('--on',G.corSobre);R.setProperty('--tint','color-mix(in srgb,'+G.cor+' 12%,white)');
$('bn').textContent=G.nome;if(G.imagemTopo){$('im').hidden=false;$('im').src=G.imagemTopo;if($('ar'))$('ar').hidden=true}else{$('im').hidden=true;if($('ar')){$('ar').hidden=false;$('am').textContent=G.nome[0]}}$('hr').innerHTML=G.horarios.map(h=>'<div><b>'+e(h[0])+'</b><span>'+e(h[1])+'</span></div>').join('');
$('ad').textContent=G.endereco+' · '+G.cidade;$('mp').href='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(G.mapaBusca);
$('fc').textContent='© '+new Date().getFullYear()+' '+G.nome;$('wa').href=wa('Olá! Vim pelo site '+G.nome+'.');
$('mb').onclick=()=>{const o=$('nav').classList.toggle('open');$('mb').setAttribute('aria-expanded',o)};$('nav').querySelectorAll('a').forEach(a=>a.onclick=()=>$('nav').classList.remove('open'));
$('dlg').addEventListener('click',ev=>{if(ev.target===$('dlg'))$('dlg').close()})}
function dlg(h){$('dlg').innerHTML='<div class="dg"><button class="x" aria-label="Fechar" onclick="document.getElementById(\'dlg\').close()">✕</button>'+h+'</div>';$('dlg').showModal()}
