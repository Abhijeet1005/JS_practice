var box = document.querySelector("#rect");

window.addEventListener("mousemove", function (details) {
  var mapvalue = gsap.utils.mapRange(
    0,
    window.innerWidth,
    100 + box.getBoundingClientRect().width / 2,
    window.innerWidth - (100 + box.getBoundingClientRect().width / 2),
    details.clientX
  ); //Here using the box width will ensure that the box will never go out of bounds and will atleast have 200px distance from the edge
  gsap.to(box, {
    left: mapvalue,
  });
});
