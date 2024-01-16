 function randomColor(){
    const hex='0123456789ABCDEF';
    let bgColor='#';
    for (let i = 0; i < 6; i++) {
        bgColor += hex[Math.floor(Math.random() * 16)];        
        // bgColor += hex[10] //#919283F
        // console.log(Math.floor(Math.random() * 16));
    }
    console.log(bgColor);
    return bgColor;
};
document.querySelector('#start').addEventListener('click',function(){
    const changeBG = function(){
        document.body.bgColor=randomColor();
       
    }
   const StopInterval= setInterval(changeBG, 1000);
   document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(StopInterval);
    console.log('STOP SUCCESSFULLY');
   })

})

// console.log();



