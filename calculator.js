var back = document.getElementsByClassName("change");

	// back[0].style.border = "thick solid #0000FF";
	back[0].style.backgroundColor = "lightblue";
	



function calculate(){
	var amount = document.getElementsByClassName("tot_amount")[0].value;
	var service = document.getElementsByClassName("service")[0].value;
	var people = document.getElementsByClassName("no_of_people")[0].value;
	console.log((amount*service/100)/people);
	var final = (amount*service/100)/people;
	var result = document.getElementsByClassName("result")[0];
	result.innerHTML = "Rs "+final + "<br>each";
	document.getElementsByClassName("tot_amount")[0].value= "";
	document.getElementsByClassName("no_of_people")[0].value= "";
	document.getElementsByClassName("service")[0].value = "";
}
