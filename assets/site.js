(function(){
 var vids=document.querySelectorAll('.vid[data-vid]');
 function mount(v){if(v.dataset.on)return;v.dataset.on='1';var id=v.dataset.vid;var f=document.createElement('iframe');
  f.src='https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1&mute=1&loop=1&playlist='+id+'&controls=1&modestbranding=1&rel=0&playsinline=1';
  f.allow='autoplay; encrypted-media; picture-in-picture';f.setAttribute('frameborder','0');f.allowFullscreen=true;
  f.style.cssText='position:absolute;inset:0;width:100%;height:100%;border:0';v.appendChild(f);}
 function unmount(v){if(!v.dataset.on)return;var f=v.querySelector('iframe');if(f)f.remove();v.dataset.on='';}
 if(vids.length){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting&&e.intersectionRatio>=.45)mount(e.target);else unmount(e.target);});},{threshold:[0,.45,1]});
  vids.forEach(function(v){io.observe(v);var p=v.querySelector('.poster');if(p)p.addEventListener('click',function(){mount(v);});});}
 var rev=document.querySelectorAll('.reveal');
 if(rev.length){var r=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');r.unobserve(e.target);}});},{threshold:.12});rev.forEach(function(e){r.observe(e);});}
 var b=document.getElementById('burger'),m=document.getElementById('mnav');if(b&&m)b.addEventListener('click',function(){m.classList.toggle('open');});
 var t=document.querySelectorAll('.mc-tab');t.forEach(function(x){x.addEventListener('click',function(){t.forEach(function(y){y.classList.remove('on')});x.classList.add('on');var id=x.dataset.t;document.querySelectorAll('.mc-pane').forEach(function(p){p.style.display=p.id===id?'block':'none';});});});
})();/* site search — client-side, no backend */
(function(){
 var btn=document.getElementById('searchBtn'); if(!btn) return;
 var SI=[
  {t:'Home',u:'index.html',d:'The fastest game on two feet — join the Redbacks.',k:'home join alternative sport fastest game two feet redbacks'},
  {t:'About the Club',u:'about.html',d:'Family-friendly, inclusive lacrosse club since 1960.',k:'about club values brand established 1960 family inclusive who we are'},
  {t:'What is Lacrosse?',u:'what-is-lacrosse.html',d:'How the game works and why it is so much fun.',k:'what is lacrosse rules how to play the game beginners learn stick ball'},
  {t:'Teams',u:'teams.html',d:'Men’s, women’s and junior programs — find your team.',k:'teams mens womens junior program chadfield coordinators training grades find your team'},
  {t:'Match Centre',u:'match-centre.html',d:'Fixtures, ladders and results.',k:'match centre fixtures ladders results gameday draw scores'},
  {t:'News & Events',u:'news.html',d:'Come & try nights, carnivals and club news.',k:'news events come and try under 10 carnival junior memberships womens training development officer'},
  {t:'Membership & Fees',u:'membership.html',d:'2026/27 fees and how to register.',k:'membership fees cost price register join 2026 2027 bank eft social membership gameday how to join sign up'},
  {t:'Play at Chaddy',u:'play-at-chaddy.html',d:'Start playing — juniors, adults, schools and international players.',k:'play at chaddy start playing come and try juniors adults international players school clinic quick stick'},
  {t:'History & Honours',u:'history.html',d:'Founded 1960 — premierships and Australian representatives.',k:'history honours founded 1960 cardinals premierships green jacket australian representatives gordon purdie life members'},
  {t:'Sponsors',u:'sponsors.html',d:'The businesses that support our club.',k:'sponsors sponsor partners support us slater levin better health network headspace brandy creek daizies sport rec victoria'},
  {t:'Contact',u:'contact.html',d:'Get in touch — email, phone, and where to find us.',k:'contact email phone address percy treyvaud reserve map coordinators find us treasurer'}
 ];
 var ov=document.createElement('div'); ov.className='search-ov';
 ov.innerHTML='<div class="search-box" role="search"><input id="searchInput" type="search" placeholder="Search — fees, juniors, teams, history…" autocomplete="off" aria-label="Search the site"><div class="search-res" id="searchRes"></div><div class="search-hint">Press Esc to close</div></div>';
 document.body.appendChild(ov);
 var input=ov.querySelector('#searchInput'), res=ov.querySelector('#searchRes');
 function esc(s){return s.replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
 function render(q){
  q=(q||'').trim().toLowerCase();
  var list;
  if(!q){list=SI;}
  else{var terms=q.split(/\s+/);
   list=SI.filter(function(p){var hay=(p.t+' '+p.d+' '+p.k).toLowerCase();return terms.every(function(t){return hay.indexOf(t)>-1;});})
   .sort(function(a,b){return (b.t.toLowerCase().indexOf(q)>-1?1:0)-(a.t.toLowerCase().indexOf(q)>-1?1:0);});}
  if(!list.length){res.innerHTML='<div class="none">No results for “'+esc(q)+'”. Try “fees”, “juniors” or “teams”.</div>';return;}
  res.innerHTML=list.map(function(p,i){return '<a href="'+p.u+'"'+(i===0?' class="sel"':'')+'><div class="st">'+esc(p.t)+'</div><div class="sd">'+esc(p.d)+'</div></a>';}).join('');
 }
 function open(){ov.classList.add('open');input.value='';render('');setTimeout(function(){input.focus();},40);}
 function close(){ov.classList.remove('open');}
 btn.addEventListener('click',open);
 ov.addEventListener('click',function(e){if(e.target===ov)close();});
 input.addEventListener('input',function(){render(input.value);});
 document.addEventListener('keydown',function(e){
  if(e.key==='Escape'){close();return;}
  var open_=ov.classList.contains('open');
  if(!open_ && (e.key==='/' || ((e.key==='k'||e.key==='K')&&(e.metaKey||e.ctrlKey)))){var tag=(document.activeElement||{}).tagName;if(tag!=='INPUT'&&tag!=='TEXTAREA'){e.preventDefault();open();}}
  if(open_ && e.key==='Enter'){var f=res.querySelector('a');if(f)window.location.href=f.getAttribute('href');}
 });
})();
