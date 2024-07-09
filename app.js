const nota1=document.getElementById("nota1")
const nota2=document.getElementById("nota2")
const nota3=document.getElementById("nota3")

const frmnota = document.getElementById("frm-nota")
const response = document.getElementById("response")

frmnote.addEventListener("submit",(event)=>{
    event.preventDefault()
console.log(Nota1);
let data =nota1.value
let data2 =nota2.value
let data3 =nota3.value
let result = (data*0.3) +(data2*0.3)+(data3*0.4)
response.textContent = " su nota es: "+result
})