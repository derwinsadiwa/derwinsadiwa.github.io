(function(){

    let toggle = false,
        select = function(s) {
          return document.querySelector(s);
        },
        selectAll = function(s) {
          return document.querySelectorAll(s);
        }
        ;
  
    const onClickMenuToggle = () => {
        
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

        gsap.from('.nav-menu-btn', {duration: 0.7, autoAlpha: 0, y: 50, ease: 'power2.out', stagger: 0.2, delay: 0.5, onComplete: function(){
            gsap.to('.social-overlay', {autoAlpha: 1, duration: 0.5});
        }});
  
        toggle = true;
  
      }else {
  
        gsap.set('.social-overlay', { autoAlpha: 0 });

        select('.menu-toggle-wrapper').classList.remove('is-open');
        gsap.set('.menu-toggle-open', {display: 'block'});
        gsap.set('.menu-toggle-close', {display: 'none'});

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