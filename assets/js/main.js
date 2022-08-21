(function(){

    let toggle = false,
        select = function(s) {
          return document.querySelector(s);
        },
        selectAll = function(s) {
          return document.querySelectorAll(s);
        }
        ;
  
    function onClickMenuToggle(e){
        
      if(!toggle){

        select('.menu-toggle-wrapper').classList.remove('is-open');
        select('.menu-toggle-wrapper').classList.add('is-open');
        gsap.set('.menu-toggle-open', {display: 'none'});
        gsap.set('.menu-toggle-close', {display: 'block'});
        gsap.set('.nav-menu', {display: 'block'});

        select('.nav-menu-bg-wrapper').style.transform = 'translate3d(0,0%,0)';
        const nodeList = selectAll('.nav-menu-bg');
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].style.transform = 'translate3d(0,0%,0)';
        }

        gsap.from('.nav-menu-btn', {duration: 0.7, autoAlpha: 0, y: 50, ease: 'back.in(.7)', stagger: 0.2, onComplete: function(){
            gsap.set('.social-overlay', {autoAlpha: 1});
        }});
  
        toggle = true;
  
      }else {
  
        gsap.set('.social-overlay', { autoAlpha: 0 });

        select('.menu-toggle-wrapper').classList.remove('is-open');
        gsap.set('.menu-toggle-open', {display: 'block'});
        gsap.set('.menu-toggle-close', {display: 'none'});
        
        // gsap.set('.nav-menu', {display: 'none'});

        select('.nav-menu-bg-wrapper').style.transform = 'translate3d(0,-100%,0)';
        const nodeList = selectAll('.nav-menu-bg');
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].style.transform = 'translate3d(0,-100%,0)';
        }
  
        toggle = false;
      }
  
    }

    select('.menu-toggle-wrapper').addEventListener('click', () => onClickMenuToggle());
  
})()