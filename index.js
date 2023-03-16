let alertPara = document.getElementById("alertId")
let btnId = document.getElementById("loginId")
let idAlertmsg = document.getElementById("idAlert")
let passAlertmsg = document.getElementById("passAlert")

function loginBtn()
{
var username = document.getElementById("userId").value;
var password = document.getElementById("passId").value;
if(username=="admin" && password=="user")
{
    location.href = "https://mathtutor.ccbp.tech/"
}
else 
{
    alert("Login Failed");
}}


  
function imgfunc()
{
    location.href="https://ssc.nic.in/"
}