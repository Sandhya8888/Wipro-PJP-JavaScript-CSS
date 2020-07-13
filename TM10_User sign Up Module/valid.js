
function fun2() {
	  var d = new Date();
	  document.getElementById("s").innerHTML = d;
	  var t = setTimeout(fun2,500);
	  var f=setTimeout(function(){ 
	  var alerted = localStorage.getItem('alerted') || '';
        if (alerted != 'yes') {
         alert("Time is Up!!!"); 
         localStorage.setItem('alerted','yes');
        }
	  window.location = 'Register.html'; },3*60*1000);
	}
	function fun3() {
	  alert("Hello!");
	}




function fun(){
	var fname = document.forms["myform"]["fname"].value;
	var lname = document.forms["myform"]["lname"].value;
	var p = document.forms["myform"]["p"].value;
	var cf =  document.forms["myform"]["cp"].value;
	var mobile =  document.forms["myform"]["mobile"].value;
	var p1=  /^[A-Za-z]$/;
	var p2=  /^[A-Za-z0-9]{6,20}$/;
	var p3=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	var x1=1,x2=1,x3=1,x4=1,x5=1;
	if(p!=cf){
		document.getElementById("pass3").innerHTML ="Password and Confirm password does not match!".fontcolor("red");
		x3=0;
	}
	if(!(p.match(p2))){
		document.getElementById("pass3").innerHTML ="Please enter a password between 6 to 20 characters".fontcolor("red");
		x4=0;

	}
	if(!(mobile.match(p3))){
		document.getElementById("pass4").innerHTML ="Please enter mobile number in valid format".fontcolor("red");
		x5=0;
	}
	if(x1==0 || x2==0 || x3==0 ||x4==0 || x5==0){
		document.getElementById("error").innerHTML ="Required Data Missing!".fontcolor("red").concat( "Enter and Resubmit").fontsize(6).bold();
		return false;
	}
}
