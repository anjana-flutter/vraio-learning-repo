function clickbtn(val){
    document.getElementById('screen').value=document.getElementById('screen').value+val
}
function ac(){
    document.getElementById("screen").value=""
}
function equalto(){
    var text=document.getElementById('screen').value
    var result= eval(text)
    document.getElementById("screen").value=result
}