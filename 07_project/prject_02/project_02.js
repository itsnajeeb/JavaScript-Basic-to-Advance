const form=document.querySelector('form')
console.log(form);
form.addEventListener('submit',function(e){
    e.preventDefault()
    let height=document.getElementById('height').value;
    let weight=document.getElementById('weight').value;
    // console.log(height);
    let results=document.querySelector('#results');
    if(height === '' || height <= 0 || isNaN(height)){
        // results.innerHTML=`Please Give a valid Height`
        alert("Please Give a valid height")

    }else if(weight === '' || weight <= 0 || isNaN(weight)){
        alert("Please Give a valid weight")
    }
        const bmi= (weight / ((height * height) / 10000)).toFixed(2)

        results.innerHTML=`Result is : ${bmi} <br>`;
        let message=document.querySelector('#message');
        
        if(bmi < 18.6){
            message.innerHTML = `You are Under Weight : ${bmi}`;
        }
        else if(bmi > 18.6 && bmi < 24.9){
            message.innerHTML=`You are in Normal Range : ${bmi}`;
        }
        else{
            message.innerHTML =`You are in over weight ${bmi}`;   
        }
    
})
