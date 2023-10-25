var box = document.querySelector("#center");

box.addEventListener("mousemove",function(details){

    var box_dims = box.getBoundingClientRect()
    var mouse_absolute = details.clientX - box_dims.left
  
    if(mouse_absolute<(box_dims.width/2)){
        var red_color = gsap.utils.mapRange(0,(box_dims.width/2),255,0,mouse_absolute);
        console.log(red_color);

        gsap.to(box,{
            backgroundColor: `rgb(${red_color},0,0)`,
            ease: Power4,
        })
    }
    else{
        if(mouse_absolute>(box_dims.width/2)){  //This if can be removed as we have applied the listener only on the box element so the event will not trigger if we are outside the box
            var blue_color = gsap.utils.mapRange((box_dims.width/2),box_dims.width,0,255,mouse_absolute);
            console.log(blue_color);
            
            gsap.to(box,{
                backgroundColor: `rgb(0,0,${blue_color})`,
                ease: Power4,
            })
        }
    }
    
})
box.addEventListener("mouseleave",function(){
    gsap.to(box,{backgroundColor: "white"})
})