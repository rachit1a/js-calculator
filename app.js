function add()
  {
    x=document.getElementById("input1").value
    y=document.getElementById("input2").value
    z=parseInt(x)+parseInt(y)
    document.getElementById("output").value=z
  }
function substract()
{
    x=document.getElementById("input1").value
    y=document.getElementById("input2").value
    z=parseInt(x)-parseInt(y)
    document.getElementById("output").value=z
}
function multiply()
{
    x=document.getElementById("input1").value
    y=document.getElementById("input2").value
    z=parseInt(x)*parseInt(y)
    document.getElementById("output").value=z
}
function divide()
{
    x=document.getElementById("input1").value
    y=document.getElementById("input2").value
    z=parseInt(x)/parseInt(y)
    document.getElementById("output").value=z
}
function clr()
{
    document.getElementById("input1").value=""
    document.getElementById("input2").value=""
    document.getElementById("output").value=""
}
