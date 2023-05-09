const dialog=[{question:"salut",answer:"Salut"},{question:"toto",answer:"titi"},{question:"La terre est ronde?",answer:"Non, la terre est plate dirigé par des réptiliens"}]
//console.table(dialog)
//console.log(document.getElementById("dialogchat"))
document.getElementById("dialogchat").addEventListener("submit",function(event){
    event.preventDefault();
    //console.log(even.target);
    document.querySelector(".question").innerHTML = document.querySelector(".ask").value

dialog.forEach(Element =>{
//console.log(Element.question)
if(Element.question === document.querySelector(".ask").value){
//console.log(Element.answer)
document.querySelector(".answer").innerHTML=Element.answer

}
});

})