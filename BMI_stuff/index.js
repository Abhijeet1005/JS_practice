//Here we will be using the submit button instead of 'click' on the form 
const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    const result = document.querySelector('#results')
    if(!height || !weight){
        result.innerHTML = '<span>Enter valid fields</span>'
    }else{
        const res = (weight / ((height*height)/10000).toFixed(2)).toFixed(2)
        result.innerHTML = `<span>${res}</span>`
    }
})