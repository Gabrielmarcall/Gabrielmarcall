var num1 = number(prompt("digite um numero"))
var num2 = number(prompt("digite outro mundo"))
var igual = num1==num2
var maior = num1<num2
var menor = num1<num2
var ou = num1>=num2 
var e = num1<=num2

document.write("<h1>sua resposta é"+igual+"</h1>")
document.write("<h1>sua resposta é"+maior+"</h1>")
document.write("<h1>sua resposta é"+menor+"</h1>")
document.write("<h1>sua resposta é"+ou+"</h1>")
document.write("<h1>sua resposta é"+e+"</h1>")

var idade = 70

if(idade >= 18) {
    alert("maior idade")
}
else{
    alert("menor idade")
}
