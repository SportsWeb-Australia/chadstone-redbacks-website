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
})();