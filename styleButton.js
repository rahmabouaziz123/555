//alert("gggggggg")

var res=document.querySelectorAll(" .container button")
console.log(res)

for(var i=0;i<res.length;i++)
{
    var buttonTot=res[i].addEventListener("click",addAlert)
}

function  addAlert(event){
    var x= event.target
   x.classList.remove('submit')
   alert("bonjour rahma")
    

}