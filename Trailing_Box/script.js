var box = document.querySelector('#rect');

window.addEventListener("mousemove",function(details){
    gsap.to(box,{
        left: details.clientX, //automatically in px I guess
        // automatically adding ease parameter
    })
})