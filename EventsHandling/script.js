let div = document.querySelector('#main')
// div.addEventListener('mouseover',function(){
//     div.style.backgroundColor="yellow"
//     div.style.borderRadius='50%'
// })
// div.addEventListener('mouseout',function(){
//     div.style.backgroundColor="#000"
//     div.style.borderRadius='0'
// })

window.addEventListener('mousemove',function(dets){
    div.style.top=dets.clientY+'px'
    div.style.left=dets.clientX+'px'
    
})