let p = document.querySelector('p')
let dbClick = () => {
    p.style.color = 'yellow'
}
let IncreaseFontSize = () => {
    p.style.fontSize = '24px'
}
// p.addEventListener('dblclick',dbClick)
// p.addEventListener('click',IncreaseFontSize)
// p.removeEventListener('dblclick',dbClick)

let inp = document.querySelector('input')
inp.addEventListener('input', function (dets) {
    // console.log(dets.data);
})

let select = document.querySelector('select');
let device = document.querySelector('#device')
select.addEventListener('change', function(dets){
    let selectedDevice=dets.target.value;
        
    device.textContent= "You Selected " + `${!selectedDevice ? `Value is Empty`  : selectedDevice}`
    
})