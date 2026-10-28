(function(){
  'use strict';
  /* header shadow */
  var header=document.querySelector('.site-header');
  var onScroll=function(){header.classList.toggle('scrolled',window.scrollY>24)};
  onScroll();window.addEventListener('scroll',onScroll,{passive:true});

  /* mobile menu */
  var btn=document.querySelector('.menu-btn'),menu=document.getElementById('menu');
  if(btn&&menu){
    btn.addEventListener('click',function(){
      var open=menu.classList.toggle('open');btn.setAttribute('aria-expanded',open);
    });
    menu.addEventListener('click',function(e){
      if(e.target.tagName==='A'){menu.classList.remove('open');btn.setAttribute('aria-expanded','false');}
    });
  }

  /* reveal on scroll */
  var rv=document.querySelectorAll('.rv');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
    },{threshold:.12,rootMargin:'0px 0px -40px 0px'});
    rv.forEach(function(el){io.observe(el)});
  }else{rv.forEach(function(el){el.classList.add('in')});}

  /* count-up stats */
  var nums=document.querySelectorAll('[data-count]');
  var cio=new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(!e.isIntersecting)return;cio.unobserve(e.target);
      var el=e.target,end=parseFloat(el.dataset.count),dec=(el.dataset.count.split('.')[1]||'').length,suf=el.dataset.suffix||'';
      if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){el.textContent=end.toFixed(dec)+suf;return;}
      var t0=null,dur=1400;
      (function step(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),v=end*(1-Math.pow(1-p,3));
        el.textContent=v.toFixed(dec)+suf;if(p<1)requestAnimationFrame(step);})(performance.now());
    });
  },{threshold:.6});
  nums.forEach(function(n){cio.observe(n)});

  /* portfolio filters */
  var fbtns=document.querySelectorAll('.filters button'),covers=[].slice.call(document.querySelectorAll('.cover'));
  fbtns.forEach(function(b){
    b.addEventListener('click',function(){
      fbtns.forEach(function(x){x.setAttribute('aria-pressed','false')});
      b.setAttribute('aria-pressed','true');
      var g=b.dataset.filter;
      covers.forEach(function(c){c.classList.toggle('hide',!(g==='all'||c.dataset.genre.split(' ').indexOf(g)>-1));});
    });
  });

  /* lightbox */
  var lb=document.getElementById('lb'),lbImg=lb.querySelector('img'),lbCap=lb.querySelector('figcaption'),idx=0,list=[];
  function show(i){
    idx=(i+list.length)%list.length;var c=list[idx];
    lbImg.src=c.dataset.full;lbImg.alt=c.querySelector('img').alt;lbCap.textContent=c.dataset.caption;
  }
  function open(c){
    list=covers.filter(function(x){return !x.classList.contains('hide')});
    show(list.indexOf(c));lb.classList.add('open');document.body.style.overflow='hidden';lb.querySelector('.x').focus();
  }
  function close(){lb.classList.remove('open');document.body.style.overflow='';}
  covers.forEach(function(c){c.addEventListener('click',function(){open(c)})});
  lb.querySelector('.x').addEventListener('click',close);
  lb.querySelector('.p').addEventListener('click',function(){show(idx-1)});
  lb.querySelector('.n').addEventListener('click',function(){show(idx+1)});
  lb.addEventListener('click',function(e){if(e.target===lb)close()});
  document.addEventListener('keydown',function(e){
    if(!lb.classList.contains('open'))return;
    if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(idx-1);if(e.key==='ArrowRight')show(idx+1);
  });

  /* gentle parallax on hero books (desktop only) */
  var hv=document.querySelector('.hero-visual');
  if(hv&&window.matchMedia('(hover:hover) and (min-width:981px)').matches&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    var fl=hv.querySelectorAll('.float');
    hv.addEventListener('mousemove',function(e){
      var r=hv.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
      fl.forEach(function(f,i){var k=(i+1)*10;f.style.translate=(x*k)+'px '+(y*k)+'px';});
    });
  }

  document.getElementById('yr').textContent=new Date().getFullYear();
})();
