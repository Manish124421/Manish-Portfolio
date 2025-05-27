var main = document.querySelector("body");
var cursor = document.querySelector("#cursor");
// var img = document.querySelector(".folio-list__item");


main.addEventListener("mousemove",function(info){

    gsap.to(cursor,{
        // x : info.x - 8,
        // y : info.y -6,
        x : info.x,
        y : info.y,
        duration : 0.4,
        ease : "back.out"
    })

})


// img.addEventListener("mouseenter",function(){

//     cursor.innerHTML = "View More";

//     gsap.to(cursor,{
//         scale: 4,
//         // background : "#ffffff9a",
//         duration : 0.3
//     })
    
// })
// img.addEventListener("mouseleave",function(){
    
//     cursor.innerHTML = "";
    
//     gsap.to(cursor,{
//         // background : "#fff",
//         scale: 1,
//     })

// })
document.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale : 0,
        opacity : 0,
        duration : 0.5,
    })
})
document.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale : 1,
        opacity : 1,
        duration : 0.5,
    })
})