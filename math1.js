document.getElementById("math-5").style.visibility = "hidden";
document.getElementById("math-6").style.visibility = "hidden";
document.getElementById("math-7").style.visibility = "hidden";
document.getElementById("math-8").style.visibility = "hidden";
document.getElementById("math-9").style.visibility = "hidden";
document.getElementById("math-4").style.visibility = "visible";


document.getElementById("math-4").addEventListener('click', () => 
{
    document.getElementById("math-5").style.visibility = "visible";
    document.getElementById("math-6").style.visibility = "visible";
    document.getElementById("math-7").style.visibility = "visible";
    document.getElementById("math-8").style.visibility = "visible";
    document.getElementById("math-9").style.visibility = "visible";
    document.getElementById("math-4").style.visibility = "hidden";
})
document.getElementById("math-5").addEventListener('click', () => 
{
    document.getElementById("math-5").style.visibility = "hidden";
    document.getElementById("math-6").style.visibility = "hidden";
    document.getElementById("math-7").style.visibility = "hidden";
    document.getElementById("math-8").style.visibility = "hidden";
    document.getElementById("math-9").style.visibility = "hidden";
    document.getElementById("math-4").style.visibility = "visible";
})



document.getElementById("math-8").onclick = function a()
{
    var convert = document.getElementById("math-10");
    let number = document.getElementById("math-3").value;
    convert = parseInt(number,16);
    document.getElementById("math-9").style.visibility = "visible";
    document.getElementById("math-9").innerText = `THE VALUES FROM BASE16(${number}) TO BASE10 IS : ${convert}`;
}
document.getElementById("math-7").onclick = function a()
{
    var convert = document.getElementById("math-10");
    let number = document.getElementById("math-3").value;
    convert = parseInt(number,8);
    document.getElementById("math-9").style.visibility = "visible";
    document.getElementById("math-9").innerText = `THE VALUES FROM BASE8(${number}) TO BASE10 IS : ${convert}`;
}
document.getElementById("math-6").onclick = function a()
{
    var convert = document.getElementById("math-10");
    let number = document.getElementById("math-3").value;
    convert = parseInt(number,2);
    document.getElementById("math-9").style.visibility = "visible";
    document.getElementById("math-9").innerText = `THE VALUES FROM BASE2(${number}) TO BASE10 IS : ${convert}`;
}