/* The nav is sticky. It slides away as you read down and comes back the moment
   you scroll up, so the way back to Work is never a full page away. */
(function(){
  var navs=document.querySelectorAll('nav');if(!navs.length)return;
  var last=window.pageYOffset||0,ticking=false;
  function update(){
    var y=window.pageYOffset||0;
    navs.forEach(function(nav){
      if(y<=nav.offsetHeight){nav.classList.remove('nav-hidden');}
      else if(y>last+4){nav.classList.add('nav-hidden');}
      else if(y<last-4){nav.classList.remove('nav-hidden');}
    });
    last=y;ticking=false;
  }
  window.addEventListener('scroll',function(){if(!ticking){window.requestAnimationFrame(update);ticking=true;}},{passive:true});
})();
