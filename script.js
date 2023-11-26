const DEBUG = true;
function clicked(){
  let low=document.getElementById("txtlowinput").value;
  let high=document.getElementById("txthighinput").value;  
  let n1 = parseFloat(low?low:"0");  
  let n2 = parseFloat(high?high:"0");
  let n3= (n1/2.0 + n2/2.0);
  let objmiddle=document.getElementById("txtresultmiddle");  
  objmiddle.value=""+n3;
}
function copyme(){
let objmiddle=document.getElementById("txtresultmiddle");  
  let midval=objmiddle.value;
  objmiddle.select();
  document.execCommand("copy");
}
function pastehere(objid){
  let obj=document.getElementById(objid);
  obj.select();
  document.execCommand("paste");
}
