window.addEventListener('scroll', e=>{
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
})

// window.addEventListener('scroll', function() {
//     var layer_base = document.querySelector('.layer_base');
//     var scrollValue = window.scrollY;
//     var rotationValue = scrollValue / 5; // Значение поворота, можно настроить
    
//     layer_base.style.transform = 'rotate(' + rotationValue + 'deg)';
// });
